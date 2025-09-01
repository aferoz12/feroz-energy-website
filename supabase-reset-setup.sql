-- Complete reset and setup script for Supabase
-- Run this in your Supabase SQL Editor to start fresh

-- 1. Drop existing tables (in correct order due to foreign keys)
DROP TABLE IF EXISTS pdf_files CASCADE;
DROP TABLE IF EXISTS form_submissions CASCADE;

-- 2. Drop existing storage bucket
DELETE FROM storage.buckets WHERE id = 'pdf-files';

-- 3. Create the form_submissions table
CREATE TABLE form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  pdf_files TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create the pdf_files table for detailed file tracking
CREATE TABLE pdf_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  form_submission_id UUID NOT NULL REFERENCES form_submissions(id) ON DELETE CASCADE,
  file_name VARCHAR(255) NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Create an index on form_submission_id for faster queries
CREATE INDEX idx_pdf_files_submission_id ON pdf_files(form_submission_id);

-- 6. Create a storage bucket for PDF files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('pdf-files', 'pdf-files', false);

-- 7. Enable Row Level Security on the tables
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_files ENABLE ROW LEVEL SECURITY;

-- 8. Create policies for form_submissions table
CREATE POLICY "Allow public to insert form submissions" ON form_submissions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to read form submissions" ON form_submissions
FOR SELECT USING (true);

-- 9. Create policies for pdf_files table
CREATE POLICY "Allow public to insert pdf files" ON pdf_files
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to read pdf files" ON pdf_files
FOR SELECT USING (true);

-- 10. Create storage policies for public access
CREATE POLICY "Allow public to upload PDFs" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'pdf-files');

CREATE POLICY "Allow public to read PDFs" ON storage.objects
FOR SELECT USING (bucket_id = 'pdf-files');

CREATE POLICY "Allow public to delete PDFs" ON storage.objects
FOR DELETE USING (bucket_id = 'pdf-files');

-- 11. Verify setup
SELECT 'Tables created successfully' as status;
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('form_submissions', 'pdf_files');
SELECT name FROM storage.buckets WHERE id = 'pdf-files';
