-- Add comments column to form_submissions table
ALTER TABLE form_submissions 
ADD COLUMN comments TEXT;

-- Add an index for better query performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_comments 
ON form_submissions(comments);

-- Update existing records to have a default value (optional)
UPDATE form_submissions 
SET comments = '' 
WHERE comments IS NULL;
