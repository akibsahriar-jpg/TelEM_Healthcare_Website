# Walkthrough: "Book a Demo" Form (SMTP Integration)

I have updated the "Book a Demo" form to use **SMTP**, which allows you to send
emails using your existing **Gmail** or **Bluehost** account without needing a
new service like Resend.

## Changes Made

### 1. Updated Server Action

Modified
[contact.ts](file:///Users/sahriarakib/Antigravity_Projects/TelEM_Healthcare_Website/src/app/actions/contact.ts)
to use **Nodemailer**.

- Connects directly to any SMTP server.
- Sends a clean HTML email to `info@telemhealth.com`.
- Uses your own email credentials to send the messages.

### 2. Dependency Swapped

- **Removed:** `resend` (to keep the stack clean).
- **Added:** `nodemailer` (standard library for SMTP).

---

## How to Set Up Your Email Account

You need to add your SMTP credentials to your `.env` file. Here are the settings
for the two most likely scenarios:

### Option A: Gmail

1. **Enable 2FA:** Ensure 2-Step Verification is on for your Google account.
2. **App Password:** Go to
   [App Passwords](https://myaccount.google.com/apppasswords) and generate a new
   password for "Mail".
3. **Add to `.env`:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password-here
   ```

### Option B: Bluehost (Professional Email)

1. **Find Settings:** Look in your Bluehost cPanel under "Email Accounts" >
   "Check Email" > "Configure Mail Client".
2. **Add to `.env`:**
   ```env
   SMTP_HOST=mail.yourdomain.com
   SMTP_PORT=465
   SMTP_USER=info@telemhealth.com
   SMTP_PASSWORD=your-email-password
   ```

## How to Deploy (GitHub & Vercel)

To make these changes live on your production website, follow these steps:

### 1. Push to GitHub

If you haven't already, push your local changes to your GitHub repository:

```bash
git add .
git commit -m "Add SMTP email notifications"
git push origin main
```

### 2. Link to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. If the project isn't there, click **"Add New..."** > **"Project"** and import
   your GitHub repository.
3. If it IS there, Vercel will automatically detect the new commit and start a
   "Preview" or "Production" build.

### 3. Configure Production Environment Variables (CRITICAL)

Your local `.env` file is NOT uploaded to GitHub/Vercel for security. You must
manually add your SMTP settings to Vercel:

1. In Vercel, go to your **Project Settings** > **Environment Variables**.
2. Add the following keys with their respective values:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
3. Click **Save** and then go to the **Deployments** tab to **Redeploy** the
   latest version so it picks up these new variables.

## Verification Results

- [x] Swapped `resend` for `nodemailer`.
- [x] Updated server action with SMTP logic.
- [x] Verified that error messages will guide you if `.env` is missing
      credentials.
