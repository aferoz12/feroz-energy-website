import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Log environment variables for debugging
console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Missing')
console.log('Supabase Key:', supabaseAnonKey ? 'Set' : 'Missing')

// Create mock client for when Supabase is not configured
const createMockClient = () => ({
  from: () => ({
    insert: () => ({ 
      select: () => ({ 
        single: () => Promise.resolve({ 
          data: null, 
          error: { message: 'Supabase not configured' } 
        }) 
      }) 
    }),
    update: () => ({ 
      eq: () => Promise.resolve({ 
        error: { message: 'Supabase not configured' } 
      }) 
    })
  }),
  storage: {
    from: () => ({
      upload: () => Promise.resolve({ 
        data: null, 
        error: { message: 'Supabase not configured' } 
      })
    })
  }
}) as any

// Export the appropriate client
export const supabase = (!supabaseUrl || !supabaseAnonKey) 
  ? createMockClient()
  : createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface FormSubmission {
  id?: string
  name: string
  email: string
  phone: string
  confirmation_number: string
  created_at?: string
}

export interface PdfFile {
  id?: string
  form_submission_id: string
  file_name: string
  file_path: string
  file_size: number
  created_at?: string
}
