-- Add confirmation_number column to form_submissions table
ALTER TABLE form_submissions 
ADD COLUMN confirmation_number VARCHAR(50) UNIQUE NOT NULL;

-- Add index for faster lookups
CREATE INDEX idx_form_submissions_confirmation_number ON form_submissions(confirmation_number);

-- Update existing records with generated confirmation numbers (if any exist)
-- This is optional and only needed if you have existing data
-- UPDATE form_submissions 
-- SET confirmation_number = 'FE-' || EXTRACT(EPOCH FROM NOW())::TEXT || '-' || SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6)
-- WHERE confirmation_number IS NULL;
