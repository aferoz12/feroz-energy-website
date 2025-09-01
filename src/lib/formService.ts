import { supabase, FormSubmission, PdfFile } from './supabase'
import { uploadPdfFile, UploadResult } from './fileUpload'

export interface FormSubmissionData {
  name: string
  email: string
  phone: string
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
    // Generate confirmation number
    const confirmationNumber = generateConfirmationNumber()

    // First, create the form submission record
    const { data: submission, error: submissionError } = await supabase
      .from('form_submissions')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        confirmation_number: confirmationNumber
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
