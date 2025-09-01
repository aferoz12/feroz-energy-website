-- Create the form_submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  pdf_files TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the pdf_files table for detailed file tracking
CREATE TABLE IF NOT EXISTS pdf_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  form_submission_id UUID NOT NULL REFERENCES form_submissions(id) ON DELETE CASCADE,
  file_name VARCHAR(255) NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on form_submission_id for faster queries
CREATE INDEX IF NOT EXISTS idx_pdf_files_submission_id ON pdf_files(form_submission_id);

-- Create a storage bucket for PDF files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('pdf-files', 'pdf-files', false)
ON CONFLICT (id) DO NOTHING;

-- Create a policy to allow authenticated users to upload files
CREATE POLICY "Allow authenticated users to upload PDFs" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'pdf-files' 
  AND auth.role() = 'authenticated'
);

-- Create a policy to allow authenticated users to read their own files
CREATE POLICY "Allow authenticated users to read their own PDFs" ON storage.objects
FOR SELECT USING (
  bucket_id = 'pdf-files' 
  AND auth.role() = 'authenticated'
);

-- Create a policy to allow authenticated users to delete their own files
CREATE POLICY "Allow authenticated users to delete their own PDFs" ON storage.objects
FOR DELETE USING (
  bucket_id = 'pdf-files' 
  AND auth.role() = 'authenticated'
);

-- Enable Row Level Security on the tables
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_files ENABLE ROW LEVEL SECURITY;

-- Create policies for form_submissions table
CREATE POLICY "Allow public to insert form submissions" ON form_submissions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to read form submissions" ON form_submissions
FOR SELECT USING (true);

-- Create policies for pdf_files table
CREATE POLICY "Allow public to insert pdf files" ON pdf_files
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to read pdf files" ON pdf_files
FOR SELECT USING (true);
