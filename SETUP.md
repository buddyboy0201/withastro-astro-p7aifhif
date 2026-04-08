# Wellstead Marketing — Astro + TinaCMS Setup Guide

## Project Structure

```
wellstead-astro/
├── astro.config.mjs
├── netlify.toml
├── package.json
├── tina/
│   └── config.ts           ← TinaCMS schema (all editable fields)
├── src/
│   ├── components/
│   │   ├── Header.astro    ← Nav + mobile menu
│   │   ├── Footer.astro    ← Footer
│   │   ├── Hero.astro      ← Page hero section
│   │   ├── Marquee.astro   ← Scrolling text band
│   │   └── BurgundyBreak.astro ← Dark CTA section
│   ├── layouts/
│   │   └── BaseLayout.astro ← Wraps every page
│   ├── styles/
│   │   └── global.css      ← All your existing CSS (unchanged)
│   ├── content/
│   │   ├── pages/
│   │   │   ├── index.json      ← Homepage content
│   │   │   ├── philosophy.json
│   │   │   ├── services.json
│   │   │   └── contact.json
│   │   └── work/
│   │       └── regional-medical-center.json ← Sample case study
│   └── pages/
│       ├── index.astro
│       ├── philosophy/index.astro
│       ├── services/index.astro
│       ├── work/index.astro
│       └── contact/index.astro
└── public/
    └── images/             ← Put all images here
```

---

## Adding Images

Put all your images in `public/images/`. Reference them in the code as `/images/filename.jpg`.

In TinaCMS, when the client uploads an image it will automatically go into `public/images/`.

---

## Step 1 — Create a TinaCMS account

1. Go to **app.tina.io** and sign up (free tier is fine to start)
2. Create a new project and connect your GitHub repo
3. Copy your **Client ID** and **Token** from the dashboard

---

## Step 2 — Push to GitHub

1. Create a new GitHub repo
2. Upload the contents of this `wellstead-astro` folder as the root of the repo
3. Make sure `node_modules/` is NOT included (it's in .gitignore)

---

## Step 3 — Deploy to Netlify

1. Go to Netlify → "Add new site" → "Import from Git"
2. Connect your GitHub repo
3. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Before deploying**, add these Environment Variables in Netlify:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` = your TinaCMS Client ID
   - `TINA_TOKEN` = your TinaCMS Token
   - `GITHUB_BRANCH` = `main`
5. Click Deploy

---

## Step 4 — Access the CMS

- The visual editor lives at: `https://yoursite.netlify.app/admin/`
- Or log in directly at **app.tina.io**
- The client will see a clean sidebar with: Homepage, Philosophy Page, Services Page, Contact Page, Case Studies
- When they save a change, Netlify auto-rebuilds in ~60 seconds

---

## Step 5 — Invite the client to TinaCMS

1. In app.tina.io → your project → **Users**
2. Click **Invite User** and enter the client's email
3. They'll get an email to create their account
4. They only see the content editor — no code, no GitHub

---

## Adding a New Case Study

The client can add new case studies directly in TinaCMS:
1. Go to **Case Studies** in the sidebar
2. Click **+ New Case Study**
3. Fill in the fields and toggle **Published** to on
4. Hit Save — it appears on the site automatically after rebuild

---

## Running Locally (for development)

```bash
npm install
npm run dev
```

This starts both Astro and TinaCMS simultaneously. The site runs at `localhost:4321` and the CMS at `localhost:4321/admin`.

You'll need a `.env` file with your TinaCMS credentials (copy `.env.example` and fill in the values).
