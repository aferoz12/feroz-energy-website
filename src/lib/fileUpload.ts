import { supabase } from './supabase'

export interface UploadResult {
  success: boolean
  filePath?: string
  error?: string
}

export const uploadPdfFile = async (file: File, submissionId: string): Promise<UploadResult> => {
  try {
    // Validate file type
    if (file.type !== 'application/pdf') {
      return {
        success: false,
        error: 'Only PDF files are allowed'
      }
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return {
        success: false,
        error: 'File size must be less than 10MB'
      }
    }

    // Create a unique file path
    const fileExt = file.name.split('.').pop()
    const fileName = `${submissionId}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `pdf-uploads/${fileName}`

    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from('pdf-files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Upload error:', error)
      return {
        success: false,
        error: error.message
      }
    }

    return {
      success: true,
      filePath: data.path
    }
  } catch (error) {
    console.error('Upload error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred during upload'
    }
  }
}

export const deletePdfFile = async (filePath: string): Promise<boolean> => {
  try {
    const { error } = await supabase.storage
      .from('pdf-files')
      .remove([filePath])

    if (error) {
      console.error('Delete error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Delete error:', error)
    return false
  }
}
