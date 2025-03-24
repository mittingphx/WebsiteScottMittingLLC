# 🚀 Project Prompt: React Static Site for Scott Mitting LLC

**Title:** AI-Powered Freelance Portfolio Website for Scott Mitting LLC

---

## Stack & Overview

- **Framework:** React (using Vite or Create React App)
- **Styling:** Tailwind CSS (dark & light mode toggle)
- **Type:** Static Single Page Application (SPA) – fully client-side (ideal for GitHub Pages hosting)
- **Data:** Use `.yaml`, `.json`, or `.md` files for content (projects, ideas, resume, media, etc.)

---

## Brand & Vision

- **Business Name:** Scott Mitting LLC
- **Founder:** Scott Mitting
- **Tagline:** “AI Tools for the Little Guy”
- **Mission:** Empower small businesses with AI-powered solutions and automation

---

## Pages & Features

### 1. Home / Landing Page
- Hero section with a bold tagline and call-to-action (CTA)
- Brief introduction about Scott and his mission
- Quick links: [GitHub](https://github.com/mittingphx) | [LinkedIn](https://www.linkedin.com/in/scottmitting)
- Smooth transitions between dark and light mode

### 2. Portfolio / Projects
- Grid of project screenshots (data loaded from `projects.yaml`)
- Each project card includes:
  - Title
  - Short description
  - Tech stack used
  - Screenshot or demo video
  - Optional link or GitHub repository

### 3. Product Ideas
- Display in-progress ideas (data loaded from `ideas.yaml`)
- Tagging for categories (e.g., SaaS, LLM, automation)
- “Coming Soon” tags or a subscribe CTA for future updates

### 4. Resume / CV
- Auto-generated, clean, and responsive HTML-based resume using:
  - Data from your LinkedIn profile
  - A dedicated resume file (upload the file with your resume data)
- Sections include:
  - Contact Info
  - Summary
  - Skills
  - Work Experience
  - Education
  - Certifications (if available)
- (Optional) Downloadable PDF option

### 5. Media Hub
- Embedded video & audio player
- Media metadata loaded from `media.json` (song previews, demo videos, etc.)

### 6. Admin / Data Tools
- **Private Route:** `/admin` (hidden from main navigation)
- **Authentication:** Simple password-based login (client-side hash comparison)
- **Functionality:**
  - View and edit content from local `.yaml`, `.json`, and `.md` files
  - “Copy to Clipboard” buttons and GitHub edit link (iframe integration)
  - Designed for easy future upgrade to a backend or a third-party CMS

---

## Additional Requirements

- **Responsive Design:** Mobile-friendly layout with smooth animations and elegant transitions.
- **Data Handling:** Store all structured data in the `/data/` folder.
- **External Assets:** Ensure to include the following with your Replit upload:
  - A file containing your resume/CV details (upload separately).
  - A screenshot of your admin website.
  - The URL for the admin portal.
- **Deployment:** Project should be static and ready for deployment on GitHub Pages.

---

## Final Delivery

- Clean project structure:
  - `/pages`, `/components`, `/data`, `/admin`, `/assets`
- Fully responsive, client-side application using React and Tailwind CSS.
- Auto-generated resume from the provided LinkedIn data.
- Admin interface for manual content editing and potential GitHub integration.

---

**Good luck – build something incredible!**