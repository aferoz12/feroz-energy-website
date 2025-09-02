# 🚀 Edge Function Deployment Guide

## **Issue**: CORS Error Preventing Email Notifications

The error shows that the Edge Function `send-form-notification` is not accessible due to CORS issues.

## **Solution**: Deploy the Edge Function to Supabase

### **Step 1: Install Supabase CLI**
```bash
npm install -g supabase
```

### **Step 2: Login to Supabase**
```bash
supabase login
```

### **Step 3: Initialize Supabase (if not already done)**
```bash
supabase init
```

### **Step 4: Link to Your Project**
```bash
supabase link --project-ref xbmiuxttuuzhasdakdxc
```

### **Step 5: Deploy the Function**
```bash
supabase functions deploy send-form-notification
```

### **Step 6: Set Environment Variables**
In your Supabase dashboard:
1. Go to **Edge Functions** → **send-form-notification**
2. Click **Settings**
3. Add these environment variables:
   - `ZOHO_EMAIL`: `info@ferozenergy.com`
   - `ZOHO_PASSWORD`: Your Zoho password

### **Step 7: Test**
Submit a form and check if emails are sent to `info@ferozenergy.com`

## **Alternative: Manual Deployment**

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Edge Functions**
4. Click **Create a new function**
5. Name: `send-form-notification`
6. Copy code from `supabase/functions/send-form-notification/index.ts`
7. Deploy
8. Set environment variables as above

## **CORS Fix Applied**

I've updated the Edge Function to allow all origins (`*`) temporarily. Once working, you can restrict this to your specific domains.
