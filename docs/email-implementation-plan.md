# Implement Email Notifications for "Book a Demo" Form (SMTP)

The goal is to connect the "Book a Demo" form to an existing email account
(Gmail or Bluehost) using SMTP, avoiding any new third-party services like
Resend.

## User Review Required

> [!IMPORTANT]
> This implementation uses **Nodemailer** with SMTP. You will need to provide
> your SMTP credentials (Host, Port, User, Password) in the `.env` file.
>
> - **For Gmail:** You will need to generate an **App Password** (2FA must be
>   enabled).
> - **For Bluehost:** Use the SMTP settings provided in your Bluehost cPanel.

## Proposed Changes

### [Backend]

#### [MODIFY] [contact.ts](file:///Users/sahriarakib/Antigravity_Projects/TelEM_Healthcare_Website/src/app/actions/contact.ts)

Update the Server Action to use `nodemailer` for SMTP delivery.

- Configure transport with `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and
  `SMTP_PASSWORD`.
- Send an email to `info@telemhealth.com`.

### [Frontend]

#### [MODIFY] [ContactForm.tsx](file:///Users/sahriarakib/Antigravity_Projects/TelEM_Healthcare_Website/src/app/contact/ContactForm.tsx)

(Already updated, no further changes needed except to ensure it works with the
new action response).

### [Infrastructure]

#### [MODIFY] [.env](file:///Users/sahriarakib/Antigravity_Projects/TelEM_Healthcare_Website/.env)

Add environment variables for SMTP:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`

---

## Verification Plan

### Automated Tests

- I will create a temporary test script in
  `src/app/actions/__tests__/contact.test.ts` (if possible) or use a manual
  verification step.
- Since I cannot easily run interactive browser tests without valid API keys, I
  will focus on unit testing the logic.

### Manual Verification

1. Fill out the form on the local development server.
2. Verify that the form shows a loading state.
3. Verify that a success message appears after submission.
4. (Requires API Key) Verify that an email is actually received at the
   designated address.
