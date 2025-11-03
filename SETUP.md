# Backend Setup Instructions

Your Golden Eagle Insurance website now has backend functionality for handling contact and quote form submissions.

## Email Setup with Resend (Free Tier)

### Step 1: Create a Resend Account

1. Go to https://resend.com/
2. Sign up for a free account (3,000 emails/month, 100 emails/day)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Golden Eagle Insurance")
5. Copy the API key (starts with `re_`)

### Step 3: Add Environment Variable Locally

1. In your project folder, create a file named `.env.local`
2. Add this line (replace with your actual API key):
   \`\`\`
   RESEND_API_KEY=re_your_actual_api_key_here
   \`\`\`
3. Save the file
4. Restart your development server (`npm run dev`)

### Step 4: Test the Forms

1. Go to http://localhost:3000/contact
2. Fill out and submit the contact form
3. Check your terminal/console for logs
4. Check your email inbox (info@goldeneagleinsurance.co.ke)

## How It Works

- **Contact Form**: Sends an email to your business email with the inquiry details
- **Quote Form**: Sends an email with the quote request information
- **Server Actions**: Forms use Next.js Server Actions for secure backend processing
- **Error Handling**: Users see success/error messages after submission

## Testing Without Resend

If you haven't set up Resend yet, the forms will still work:
- Form submissions are logged to the console
- You can see the data in your terminal
- Users still see success messages

## When You Deploy to Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your API key
4. Redeploy your site

## Customizing Email Templates

Edit the email templates in `lib/actions.ts`:
- Change the "from" address (requires domain verification in Resend)
- Modify the HTML email templates
- Add CC/BCC recipients
- Customize subject lines

## Need Help?

- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
