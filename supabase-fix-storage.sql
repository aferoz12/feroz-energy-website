-- Fix storage policies to allow public access for form submissions
-- Run this in your Supabase SQL Editor

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated users to upload PDFs" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read their own PDFs" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete their own PDFs" ON storage.objects;

-- Create new policies for public access
CREATE POLICY "Allow public to upload PDFs" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'pdf-files');

CREATE POLICY "Allow public to read PDFs" ON storage.objects
FOR SELECT USING (bucket_id = 'pdf-files');

CREATE POLICY "Allow public to delete PDFs" ON storage.objects
FOR DELETE USING (bucket_id = 'pdf-files');
