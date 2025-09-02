import { supabase, FormSubmission, PdfFile } from './supabase'
import { uploadPdfFile, UploadResult } from './fileUpload'

export interface FormSubmissionData {
  businessName: string
  name: string
  email: string
  phone: string
  comments: string
  files: File[]
}

export interface SubmissionResult {
  success: boolean
  error?: string
  submissionId?: string
  confirmationNumber?: string
}

// Generate a unique confirmation number
const generateConfirmationNumber = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'FE-';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const submitForm = async (data: FormSubmissionData): Promise<SubmissionResult> => {
  try {
    // Track form submission in Google Analytics
    if (typeof window !== 'undefined' && (window as any).trackFormSubmission) {
      (window as any).trackFormSubmission(data);
    }

    // Track file uploads if any files were uploaded
    if (data.files.length > 0 && typeof window !== 'undefined' && (window as any).trackFileUpload) {
      const totalSize = data.files.reduce((sum, file) => sum + file.size, 0);
      (window as any).trackFileUpload(data.files.length, totalSize);
    }

    // Generate confirmation number
    const confirmationNumber = generateConfirmationNumber()
    
    // First, create the form submission record
    const { data: submission, error: submissionError } = await supabase
      .from('form_submissions')
      .insert({
        business_name: data.businessName,
        name: data.name,
        email: data.email,
        phone: data.phone,
        comments: data.comments,
        confirmation_number: confirmationNumber // Added
      })
      .select()
      .single()

    if (submissionError) {
      console.error('Error creating form submission:', submissionError)
      return {
        success: false,
        error: 'Failed to create form submission'
      }
    }

    const submissionId = submission.id

    // Upload PDF files if any
    if (data.files.length > 0) {
      for (const file of data.files) {
        const uploadResult = await uploadPdfFile(file, submissionId)
        if (uploadResult.success && uploadResult.filePath) {
          // Create PDF file record
          const { error: pdfError } = await supabase
            .from('pdf_files')
            .insert({
              form_submission_id: submissionId,
              file_name: file.name,
              file_path: uploadResult.filePath,
              file_size: file.size
            })
          if (pdfError) {
            console.error('Error creating PDF file record:', pdfError)
          }
        }
      }
    }

    // Call the Edge Function to send email notification
    try {
      const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      console.log('API Key available:', !!apiKey, 'Length:', apiKey?.length || 0);
      console.log('Environment variables:', Object.keys(import.meta.env));
      console.log('VITE_SUPABASE_ANON_KEY exists:', 'VITE_SUPABASE_ANON_KEY' in import.meta.env);
      
      const response = await fetch(
        'https://xbmiuxttuuzhasdakdxc.supabase.co/functions/v1/send-form-notification',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
                         formSubmission: {
               id: submissionId,
               business_name: data.businessName,
               name: data.name,
               email: data.email,
               phone: data.phone,
               comments: data.comments,
               confirmation_number: confirmationNumber,
               created_at: new Date().toISOString(),
               pdf_files: data.files.map(file => ({
                 file_name: file.name,
                 file_size: file.size
               }))
             }
          })
        }
      );

             if (!response.ok) {
         const errorText = await response.text();
         console.warn('Email notification failed, but form was submitted successfully. Status:', response.status, 'Response:', errorText);
       } else {
         console.log('Email notification sent successfully!');
       }
     } catch (error) {
       console.warn('Email notification failed, but form was submitted successfully:', error);
       console.log('Error details:', error.message, error.stack);
     }

    return {
      success: true,
      submissionId: submissionId,
      confirmationNumber: confirmationNumber
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred during form submission'
    }
  }
}
