-- Check current status of Supabase setup
-- Run this first to see what exists

-- Check if tables exist
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'form_submissions') 
    THEN 'form_submissions table EXISTS'
    ELSE 'form_submissions table MISSING'
  END as form_submissions_status;

SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'pdf_files') 
    THEN 'pdf_files table EXISTS'
    ELSE 'pdf_files table MISSING'
  END as pdf_files_status;

-- Check if storage bucket exists
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'pdf-files') 
    THEN 'pdf-files bucket EXISTS'
    ELSE 'pdf-files bucket MISSING'
  END as storage_bucket_status;

-- Check existing policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('form_submissions', 'pdf_files', 'objects');

-- Check storage policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'objects' AND schemaname = 'storage';
