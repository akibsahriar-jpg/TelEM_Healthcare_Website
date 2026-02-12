# Deployment & Hosting SOP

This directive outlines the standard operating procedure for hosting the TelEM Healthcare Website and connecting it to a custom domain.

## Overview
- **Hosting Provider**: Vercel (Recommended for Next.js) or Netlify.
- **Source Control**: GitHub.
- **Domain Management**: DNS provider (e.g., GoDaddy, Namecheap, Cloudflare).

---

## Phase 1: Repository Management
To host efficiently and manage changes, the codebase must live in a Git repository.

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TelEM website"
   ```
2. **Push to GitHub**:
   - Create a new repository on GitHub (e.g., `telem-healthcare-website`).
   - Link the local repo and push:
     ```bash
     git remote add origin https://github.com/yourusername/telem-healthcare-website.git
     git branch -M main
     git push -u origin main
     ```

## Phase 2: Professional Hosting
Since you've used Netlify before, either Netlify or Vercel will work great. For Next.js projects, Vercel is highly recommended for performance and stability.

### Option A: Vercel (Recommended)
1. Sign in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **Add New** > **Project**.
3. Import your `telem-healthcare-website` repository.
4. Keep the default settings (Next.js preset).
5. Click **Deploy**.

### Option B: Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and authorize.
4. Select your repository.
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next` (Netlify handles this automatically for Next.js).
6. Click **Deploy site**.

## Phase 3: Custom Domain Connection
Once the site is built, you can connect your client's domain.

1. **In the Hosting Dashboard** (Vercel/Netlify):
   - Go to **Domain Settings** or **Project Settings > Domains**.
   - Enter the domain name (e.g., `telemhealthcare.com`).
2. **Update DNS Records**:
   - Log in to the client's domain registrar (GoDaddy, etc.).
   - **For Subdomains** (e.g., `www.telemhealthcare.com`):
     - Create a **CNAME** record:
       - Host: `www`
       - Value: `cname.vercel-dns.com` (Vercel) or `your-site-name.netlify.app` (Netlify).
   - **For Apex Domain** (e.g., `telemhealthcare.com`):
     - Vercel: Set an **A Record** to `76.76.21.21`.
     - Netlify: Recommended to use their DNS or set an **A Record** to `75.2.60.5`.

## Phase 4: Environment Variables
If your website uses features like Google Maps, OpenAI, or Contact Forms, you likely have keys in a `.env` file. These **should not** be committed to GitHub.

1. **In the Hosting Dashboard**:
   - Go to **Project Settings > Environment Variables**.
   - Add each variable name and value from your local `.env` file (e.g., `GOOGLE_API_KEY`).
2. **Redeploy**: After adding variables, you may need to trigger a new deployment for them to take effect.

## Phase 5: Managing Changes
- **Development**: Create a new branch for changes: `git checkout -b feature/update-content`.
- **Preview**: When you push a branch to GitHub, both Vercel and Netlify will generate a "Preview Deployment" (a temporary link) to review changes.
- **Production**: Merging changes into the `main` branch will automatically update the live website.

> [!TIP]
> Always test your local build with `npm run build` before pushing to ensure no deployment errors occur.
