import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

interface FormSubmission {
  id: string
  business_name: string
  name: string
  email: string
  phone: string
  comments: string
  confirmation_number: string
  created_at: string
  pdf_files?: Array<{
    file_name: string
    file_size: number
  }>
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { formSubmission } = await req.json()

    if (!formSubmission) {
      throw new Error('No form submission data provided')
    }

    // Send email notification
    await sendFormNotificationEmail(formSubmission)

    return new Response(
      JSON.stringify({ success: true, message: 'Email notification sent' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error in Edge Function:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email notification' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})

async function sendFormNotificationEmail(formSubmission: FormSubmission) {
  const client = new SmtpClient()

  try {
    // Connect to Zoho Pro SMTP
    await client.connectTLS({
      hostname: "smtppro.zoho.com",
      port: 465,
      username: Deno.env.get("ZOHO_EMAIL") || "info@ferozenergy.com",
      password: Deno.env.get("ZOHO_PASSWORD") || "",
    })

    // Create email content
    const emailContent = createEmailContent(formSubmission)

    // Send email
    await client.send({
      from: "info@ferozenergy.com",
      to: "info@ferozenergy.com",
      subject: `New Form Submission - ${formSubmission.confirmation_number}`,
      content: emailContent,
      html: emailContent,
    })

    console.log(`Email notification sent for submission ${formSubmission.confirmation_number}`)

  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error(`Email sending failed: ${error.message}`)
  } finally {
    await client.close()
  }
}

function createEmailContent(formSubmission: FormSubmission): string {
  const pdfFilesList = formSubmission.pdf_files && formSubmission.pdf_files.length > 0
    ? formSubmission.pdf_files.map(file => 
        `• ${file.file_name} (${(file.file_size / 1024 / 1024).toFixed(2)} MB)`
      ).join('\n')
    : 'No files uploaded'

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #10b981; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { color: #6b7280; }
        .confirmation { background: #dbeafe; padding: 15px; border-radius: 6px; margin: 20px 0; }
        .files { background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0; }
        .timestamp { font-size: 12px; color: #9ca3af; text-align: center; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 New Form Submission</h1>
            <p>Someone has submitted a free rate review request!</p>
        </div>
        
        <div class="content">
            <div class="confirmation">
                <h2>Confirmation Number: ${formSubmission.confirmation_number}</h2>
                <p><strong>Submission Time:</strong> ${new Date(formSubmission.created_at).toLocaleString()}</p>
            </div>

            <h3>📋 Contact Information</h3>
            <div class="field">
                <span class="label">Business Name:</span>
                <span class="value">${formSubmission.business_name || 'Not provided'}</span>
            </div>
            <div class="field">
                <span class="label">Contact Name:</span>
                <span class="value">${formSubmission.name}</span>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">${formSubmission.email}</span>
            </div>
                         <div class="field">
               <span class="label">Phone:</span>
               <span class="value">${formSubmission.phone}</span>
             </div>
             
             ${formSubmission.comments ? `
             <div class="field">
               <span class="label">Comments:</span>
               <span class="value">${formSubmission.comments}</span>
             </div>
             ` : ''}

            <div class="files">
                <h3>📎 Uploaded Files</h3>
                <pre style="margin: 0; white-space: pre-wrap;">${pdfFilesList}</pre>
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <p><strong>Next Steps:</strong></p>
                <p>Review the submission and contact the client within 24 hours as promised.</p>
                <p>You can view the full submission details in your Supabase dashboard.</p>
            </div>
        </div>

        <div class="timestamp">
            This email was automatically generated by your Feroz Energy website
        </div>
    </div>
</body>
</html>
  `
}
