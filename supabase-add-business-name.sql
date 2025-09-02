-- Add business_name column to form_submissions table
ALTER TABLE form_submissions 
ADD COLUMN business_name TEXT;

-- Add an index for better query performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_business_name 
ON form_submissions(business_name);

-- Update existing records to have a default value (optional)
UPDATE form_submissions 
SET business_name = 'N/A' 
WHERE business_name IS NULL;
