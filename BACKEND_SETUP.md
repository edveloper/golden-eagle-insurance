# Backend Setup Guide

## Email Functionality

Your Golden Eagle Insurance website now has fully functional email capabilities using Resend.

### What's Already Configured

1. **Resend Package**: Already installed in package.json
2. **API Key**: Added to `.env.local` file
3. **Server Actions**: Created in `lib/actions.ts`
4. **Forms**: Contact and Quote forms are connected and ready to use

### Testing Locally

1. Make sure your dev server is running:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Visit the contact page: http://localhost:3000/contact
3. Fill out and submit the form
4. Check your Resend dashboard at https://resend.com/emails to see the sent email

### Email Recipients

Currently, all form submissions are sent to:
- **info@goldeneagle.co.ke**

To change this, edit `lib/actions.ts` and update the `to:` field in both functions.

### Deploying to Vercel

When you deploy to Vercel, you'll need to add the environment variable:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_SEGgJznV_tiv8U3L7i7tQUgUToJW3XT65`
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your site

### Adding Your Custom Domain to Resend

For professional emails from your own domain (e.g., noreply@goldeneagleinsurance.co.ke):

1. Go to https://resend.com/domains
2. Click **Add Domain**
3. Enter your domain: `goldeneagle.co.ke`
4. Add the provided DNS records to your domain registrar:
   - **SPF Record** (TXT)
   - **DKIM Record** (TXT)
   - **DMARC Record** (TXT)
5. Wait for verification (usually 5-30 minutes)
6. Once verified, update `lib/actions.ts`:
   \`\`\`ts
   from: 'Golden Eagle Insurance <noreply@goldeneagleinsurance.co.ke>'
   \`\`\`

### Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- 1 verified domain

This should be sufficient for your initial launch!

### Troubleshooting

**Emails not sending?**
- Check Resend dashboard logs
- Verify API key is correct in `.env.local`
- Make sure dev server was restarted after adding `.env.local`

**Emails going to spam?**
- Add and verify your custom domain in Resend
- Set up proper DNS records (SPF, DKIM, DMARC)

### Support

For Resend support: https://resend.com/docs
For website issues: Contact your developer
