# Developer Portfolio Website

A modern, recruiter-focused developer portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a futuristic black + electric blue design theme with smooth animations and a professional, polished look.

## 🎨 Design Features

- **Color Palette**: Black background (#05060a) with electric blue accents (#3b82f6, #38bdf8)
- **Animations**: Subtle Framer Motion animations for smooth interactions
- **Responsive**: Fully responsive design optimized for desktop and mobile
- **Accessible**: High contrast ratios and proper semantic HTML
- **SEO Optimized**: Metadata, proper headings, and sitemap

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
portfoliio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── robots.txt           # SEO robots file
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero/landing section
│   │   ├── About.tsx        # About section with skills
│   │   ├── Projects.tsx     # Projects showcase
│   │   └── Contact.tsx      # Contact section
│   ├── Button.tsx           # Reusable button component
│   ├── Footer.tsx           # Footer component
│   ├── Navbar.tsx           # Navigation bar
│   ├── ProjectCard.tsx      # Project card component
│   └── Section.tsx          # Section wrapper component
├── data/
│   ├── personal.json        # Personal information
│   ├── projects.json        # Project data
│   └── skills.json          # Skills data
├── types/
│   └── index.ts             # TypeScript type definitions
└── public/                  # Static assets (add your resume.pdf here)
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Customize your information**:
   - Edit `data/personal.json` with your name, title, bio, email, social links, etc.
   - Update `data/projects.json` with your actual projects
   - Modify `data/skills.json` with your skills
   - Add your resume PDF to the `public/` folder as `resume.pdf`

3. **Update metadata**:
   - Edit `app/layout.tsx` to update SEO metadata (title, description, etc.)
   - Update `app/sitemap.ts` with your domain URL

4. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Changing Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  background: '#05060a',              // Main background
  'electric-blue': '#3b82f6',        // Primary accent
  'electric-blue-light': '#38bdf8',  // Light accent
  // ... more colors
}
```

### Adding Projects

Edit `data/projects.json`:

```json
{
  "id": "unique-id",
  "name": "Project Name",
  "description": "Short description",
  "techStack": ["Next.js", "TypeScript", "Tailwind"],
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://your-demo.com"  // Optional
}
```

### Modifying Sections

- **Hero Section**: Edit `components/sections/Hero.tsx`
- **About Section**: Edit `components/sections/About.tsx`
- **Projects Section**: Edit `components/sections/Projects.tsx`
- **Contact Section**: Edit `components/sections/Contact.tsx`

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

## 🏗️ Building for Production

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Deploy**:
   - **Vercel** (recommended): Connect your GitHub repo to Vercel for automatic deployments
   - **Netlify**: Connect your repo and configure build settings
   - **Other platforms**: Follow Next.js deployment guides

## 🎯 Features

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Hover effects with glow
- ✅ Mobile-friendly navigation
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)
- ✅ Type-safe with TypeScript
- ✅ Clean, maintainable code structure

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📧 Contact

For questions or suggestions, feel free to reach out through the contact section on the website.

---

**Note**: Remember to replace placeholder content (like "Your Name", email addresses, GitHub links) with your actual information before deploying!

