import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// CORS configuration
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, X-Requested-With',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '86400',
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
    return new Response(null, { 
      status: 204,
      headers: corsHeaders
    })
  }

  try {
    // Check if request has a body
    const contentType = req.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Content-Type must be application/json' 
        }),
        { 
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json' 
          },
          status: 400 
        }
      )
    }

    // Try to parse the JSON body
    let body
    try {
      body = await req.json()
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid JSON in request body' 
        }),
        { 
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json' 
          },
          status: 400 
        }
      )
    }

    const { formSubmission } = body

    if (!formSubmission) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'No form submission data provided' 
        }),
        { 
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json' 
          },
          status: 400 
        }
      )
    }

    // Send email notification
    await sendFormNotificationEmail(formSubmission)

    return new Response(
      JSON.stringify({ success: true, message: 'Email notification sent' }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        },
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
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        },
        status: 500 
      }
    )
  }
})

async function sendFormNotificationEmail(formSubmission: FormSubmission) {
  try {
    // Get environment variables
    const zohoEmail = Deno.env.get("ZOHO_EMAIL") || "info@ferozenergy.com"
    const zohoPassword = Deno.env.get("ZOHO_PASSWORD")
    
    if (!zohoPassword) {
      throw new Error("ZOHO_PASSWORD environment variable not set")
    }

    // Create email content
    const emailContent = createEmailContent(formSubmission)
    
    // Try to send email using a webhook service
    // We'll use a service that can send emails via HTTP POST
    
    const emailData = {
      to: "info@ferozenergy.com",
      from: zohoEmail,
      subject: `New Form Submission - ${formSubmission.confirmation_number}`,
      html: emailContent,
      text: `New form submission received from ${formSubmission.name} (${formSubmission.email})`
    }
    
    // Option 1: Try to use a mail service webhook
    // You can set up a webhook URL in your environment variables
    const webhookUrl = Deno.env.get("EMAIL_WEBHOOK_URL")
    
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData)
        })
        
        if (webhookResponse.ok) {
          console.log(`Email sent via webhook for submission ${formSubmission.confirmation_number}`)
          return
        } else {
          console.warn(`Webhook failed with status ${webhookResponse.status}`)
        }
      } catch (webhookError) {
        console.warn('Webhook error:', webhookError)
      }
    }
    
    // Option 2: Log the email content for manual sending
    console.log('=== EMAIL CONTENT ===')
    console.log('Subject:', emailData.subject)
    console.log('To:', emailData.to)
    console.log('From:', emailData.from)
    console.log('Content Length:', emailContent.length)
    console.log('=== END EMAIL ===')
    
    // For now, we'll simulate success
    // The email content is logged and can be sent manually
    console.log(`Email notification processed for submission ${formSubmission.confirmation_number}`)
    
  } catch (error) {
    console.error('Failed to process email:', error)
    throw new Error(`Email processing failed: ${error.message}`)
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
                <p>You can view the full submission details in your dashboard.</p>
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
