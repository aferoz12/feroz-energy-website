# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new account or sign in
2. Click "New Project"
3. Choose your organization and enter project details:
   - Name: `feroz-save-smart` (or your preferred name)
   - Database Password: Generate a strong password
   - Region: Choose the closest region to your users
4. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## 3. Set Up Environment Variables

1. Rename `.envdelete` to `.env`
2. Update the values in `.env`:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## 4. Set Up Database Tables

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-setup.sql` and paste it into the SQL editor
3. Click "Run" to execute the SQL script

This will create:
- `form_submissions` table to store form data
- `pdf_files` table to track uploaded files
- `pdf-files` storage bucket for file uploads
- Appropriate policies for file access

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to your website
3. Fill out the form and upload a PDF file
4. Check your Supabase dashboard:
   - **Table Editor** → `form_submissions` to see form data
   - **Storage** → `pdf-files` to see uploaded files

## 6. Production Considerations

For production deployment:

1. **Security**: Consider implementing user authentication if needed
2. **File Size Limits**: Adjust the 10MB limit in `src/lib/fileUpload.ts` if needed
3. **File Cleanup**: Implement a cleanup job for old files if required
4. **Monitoring**: Set up monitoring for failed uploads and form submissions

## Troubleshooting

### Common Issues:

1. **"Missing Supabase environment variables"**
   - Make sure `.env` file exists and has correct values
   - Restart your development server after adding environment variables

2. **File upload fails**
   - Check that the `pdf-files` storage bucket exists
   - Verify storage policies are set up correctly
   - Check file size (must be under 10MB)

3. **Form submission fails**
   - Check that database tables exist
   - Verify RLS policies allow public access
   - Check browser console for detailed error messages

### Getting Help:

- Check the [Supabase Documentation](https://supabase.com/docs)
- Review the browser console for error messages
- Check the Supabase dashboard logs for server-side errors
