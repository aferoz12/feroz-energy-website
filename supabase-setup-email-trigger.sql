-- Enable the http extension for making HTTP requests
CREATE EXTENSION IF NOT EXISTS "http" WITH SCHEMA "extensions";

-- Create a function to call the Edge Function
CREATE OR REPLACE FUNCTION public.handle_form_submission()
RETURNS TRIGGER AS $$
DECLARE
  payload JSONB;
  pdf_files JSONB;
BEGIN
  -- Get PDF files for this submission
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'file_name', pf.file_name,
        'file_size', pf.file_size
      )
    ),
    '[]'::jsonb
  ) INTO pdf_files
  FROM pdf_files pf
  WHERE pf.form_submission_id = NEW.id;

  -- Build the payload
  payload := jsonb_build_object(
    'formSubmission', jsonb_build_object(
      'id', NEW.id,
      'business_name', NEW.business_name,
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'confirmation_number', NEW.confirmation_number,
      'created_at', NEW.created_at,
      'pdf_files', pdf_files
    )
  );

  -- Call the Edge Function
  PERFORM
    net.http_post(
      url := 'https://your-project-ref.supabase.co/functions/v1/send-form-notification',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('request.header.apikey')
      ),
      body := payload::text
    );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS trigger_form_submission_email ON form_submissions;
CREATE TRIGGER trigger_form_submission_email
  AFTER INSERT ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_form_submission();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA extensions TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.handle_form_submission() TO anon, authenticated, service_role;
