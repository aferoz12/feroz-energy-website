# 📧 Email Notification Setup Guide

This guide will help you set up automatic email notifications for form submissions using Zoho Mail and Supabase Edge Functions.

## 🎯 **What This System Does**

- **Automatically sends emails** to `info@ferozenergy.com` when forms are submitted
- **Includes all form data**: business name, contact info, confirmation number, uploaded files
- **Professional HTML emails** with your branding
- **Real-time notifications** - emails sent immediately upon submission

## 🚀 **Step-by-Step Setup**

### **Step 1: Deploy the Edge Function**

1. **Navigate to your Supabase dashboard**
2. **Go to Edge Functions** in the left sidebar
3. **Click "Create a new function"**
4. **Name it**: `send-form-notification`
5. **Copy the code** from `supabase/functions/send-form-notification/index.ts`
6. **Click "Deploy"**

### **Step 2: Set Environment Variables**

1. **In your Edge Function settings**, go to **Settings** tab
2. **Add these environment variables**:
   - `ZOHO_EMAIL`: `info@ferozenergy.com`
   - `ZOHO_PASSWORD`: Your Zoho Mail password

### **Step 3: Update Database Trigger**

1. **Go to SQL Editor** in your Supabase dashboard
2. **Copy and paste** the contents of `supabase-setup-email-trigger.sql`
3. **Important**: Replace `your-project-ref` with your actual Supabase project reference
4. **Run the SQL script**

### **Step 4: Test the System**

1. **Submit a test form** on your website
2. **Check your email** at `info@ferozenergy.com`
3. **Verify** you receive a notification with all form details

## 🔧 **Configuration Details**

### **Zoho Mail Pro SMTP Settings**
- **Server**: `smtppro.zoho.com`
- **Port**: `465` (SSL)
- **Username**: `info@ferozenergy.com`
- **Password**: Your Zoho Pro password

### **Email Content Includes**
- ✅ Business name
- ✅ Contact person name
- ✅ Email address
- ✅ Phone number
- ✅ Confirmation number
- ✅ Submission timestamp
- ✅ List of uploaded PDF files
- ✅ Professional HTML formatting

## 🚨 **Troubleshooting**

### **Emails Not Sending**
1. **Check Edge Function logs** in Supabase dashboard
2. **Verify Zoho credentials** are correct
3. **Ensure database trigger** is properly set up
4. **Check if http extension** is enabled

### **Common Issues**
- **"Authentication failed"**: Check Zoho password
- **"Connection refused"**: Verify SMTP settings
- **"Function not found"**: Ensure Edge Function is deployed

### **Testing Tips**
- **Use test form submissions** to verify functionality
- **Check Supabase logs** for detailed error messages
- **Verify environment variables** are set correctly

## 📱 **What You'll Receive**

Every form submission will trigger an email with:
- **Subject**: "New Form Submission - [CONFIRMATION-NUMBER]"
- **From**: `info@ferozenergy.com`
- **To**: `info@ferozenergy.com`
- **Content**: Complete form details in professional HTML format

## 🔒 **Security Notes**

- **Environment variables** are encrypted in Supabase
- **SMTP credentials** are never exposed to the frontend
- **Database trigger** only runs on authenticated requests
- **CORS protection** prevents unauthorized access

## 🎉 **You're All Set!**

Once configured, you'll receive professional email notifications for every form submission, helping you respond quickly to potential clients and never miss a lead.

## 📞 **Need Help?**

If you encounter issues:
1. **Check the Supabase logs** for error messages
2. **Verify your Zoho Mail credentials**
3. **Ensure all SQL scripts ran successfully**
4. **Test with a simple form submission first**
