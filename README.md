# Modern React Developer Portfolio

A responsive, and customizable developer portfolio web application built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- ⚡ **Blazing Fast**: Powered by Vite and React 18
- 🎨 **Modern Aesthetics**: Glassmorphism, ambient particle animations, neon gradients, and dark/light mode toggle
- 💻 **Interactive Developer Terminal**: Interactive CLI embedded in the About section with quick command buttons (`bio`, `skills`, `projects`, `contact`)
- 🛠️ **Categorized Skills**: Filterable technical skills with animated proficiency progress bars and methodology pills
- 🚀 **Projects Showcase & Modal**: Dynamic project gallery with filter tabs, tags, and rich deep-dive modal dialogs
- ⏳ **Experience & Education Timeline**: Interactive vertical milestones timeline
- 💬 **Testimonials & Socials**: Quotes from leaders/collaborators and social connect buttons
- 📬 **Interactive Contact Form**: Client-side validation, copy-to-clipboard email pill, and celebratory confetti burst
- ⚙️ **Centralized Configuration**: Edit everything from `src/data/portfolioData.js` without touching UI code

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📝 Customizing Your Information

All personal data, links, projects, and work history live in:
👉 `src/data/portfolioData.js`

You can customize:
1. **Personal Information**: Name, headline, location, bio, avatar, typing roles, and social URLs.
2. **Resume**: Place your PDF inside the `public/` folder and link to it in `resumeUrl`.
3. **Skills**: Add or modify categories, skill names, proficiency percentages, and icons.
4. **Projects**: Add your live demo links, repository URLs, screenshots, and feature highlights.
5. **Experience & Education**: Update your work history, companies, dates, and achievements.
6. **Testimonials**: Add recommendations or endorsements from peers and clients.

---

## 🌐 Free One-Click Deployment

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import your repository into [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Click **Deploy**!

### Deploying to Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**!
