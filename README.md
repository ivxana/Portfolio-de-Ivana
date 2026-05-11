# Ivana's Portfolio

A personal portfolio website built with HTML, CSS, and vanilla JavaScript.
Editorial design — purple & cream, Playfair Display serif, clean layout.

---

## 🚀 Getting Started

### Viewing locally
Just open `index.html` in your browser — no build step needed.

### Deploying to GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Deploying to Vercel
1. Push to GitHub
2. Import repo at vercel.com
3. Leave all settings as default — it'll detect static HTML automatically

---

## 📁 File Structure

ivana-portfolio/
├── index.html          ← Main page (all sections here)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Carousel, scroll spy, interactions
├── assets/
│   └── ivana.jpg       ← ADD YOUR PHOTO HERE
└── README.md

---

## ✏️ How to Customize

### Adding your photo
Drop a photo named `ivana.jpg` into the `assets/` folder.

### Updating your info
Open `index.html` and find:
- `.hero-title` → headline text
- `.hero-intro` → bio paragraph
- `.project-card` → each work project
- `.note-card` → each note/article
- `.beliefs-list` → things I believe items
- `.currently-list` → currently reading/listening
- Footer `.footer-contacts` → email, LinkedIn, Instagram

### Changing colors
Edit `:root` variables at the top of `css/style.css`:
  --purple: #3a0ca3
  --purple-dark: #2d0a7a
  --cream: #f5f3ee
  --yellow-accent: #e8c840

---

Built with love.
