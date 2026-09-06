# Atharv Deshmukh — Portfolio Website

Personal portfolio site for Atharv Deshmukh — Computer Science Undergraduate & Full Stack Web Developer. Built to showcase full-stack web applications, AI/RAG integrations, technical leadership, open-source work, and competitive programming achievements.

**🔗 Live site:** [portfolio-ten-ashen-2cgpf5khgp.vercel.app](https://portfolio-ten-ashen-2cgpf5khgp.vercel.app/)

---

## Overview

A single-page, section-based portfolio (`Hero → Workflow → About → Skills → Projects → Experience → Achievements → Contact`) built with Next.js 16 (App Router), React 19, and Tailwind CSS. The site features smooth scrolling, framer-motion reveal animations, dark/light theme switching, and responsive design.

## Tech Stack

| Category | Tech |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [lucide-react](https://lucide.dev) |
| Typewriter | [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) |
| Language | TypeScript |
| Deployment | [Vercel](https://vercel.com) |

### Language Composition

![TypeScript](https://img.shields.io/badge/TypeScript-96.5%25-3178C6)
![CSS](https://img.shields.io/badge/CSS-2.8%25-1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-0.7%25-F7DF1E)

## Features

- **Hero Section**: Animated role and typewriter tagline with quick navigation to Projects and Contact.
- **System Workflow**: Animated interactive pipeline visualizer highlighting end-to-end software and AI workflows.
- **About**: Background overview covering full-stack engineering and AI application development.
- **Skills**: Categorized skill grid across Languages, Frontend, Backend, Databases & ORMs, Auth & Third-Party Services, AI/ML, Developer Tools, Deployment, Automation & Agentic Tooling, Concepts, and Platforms.
- **Projects**: Cards for shipped work (MediSense AI, Guardian, DocuMind AI, MockMate, SmartCart, Connectify) with tech tags and direct repository / live demo links, plus a dedicated section for in-progress work (SIH PS 26153).
- **Experience & Education**: Timeline of internships (CodeAlpha), college leadership (Techfest IIT Bombay), open source (GSSoC 2026), and engineering education (PVGCOET).
- **Achievements & Certifications**: Competitive programming ratings (CodeChef 1717), hackathon placements (Ignition HackVerse 5th place), and ongoing learning (Microsoft AI Agents).
- **Contact**: Direct email mailto link, GitHub profile, and LinkedIn networking cards.
- **Dark Mode**: Persistent theme toggle supporting system preferences and manual override.

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (comes with Node.js)

### Installation & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/atharvd718/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build & Type Check

To check for TypeScript errors:
```bash
npx tsc --noEmit
```

To build for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run start
```

## Deployment

This portfolio is configured for zero-config deployment on [Vercel](https://vercel.com):

1. Import the repository `atharvd718/portfolio` on Vercel.
2. Vercel automatically detects Next.js build settings (`npm run build`).
3. Deploy. Any push to the `main` branch triggers an automated production deployment.

## Project Structure

```
portfolio/
├── public/              # Static assets (images, icons, profile photo)
├── src/
│   ├── app/             # App Router layout, page, and metadata
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, PageContainer
│   │   ├── motion/      # Framer Motion animation wrappers
│   │   ├── sections/    # Hero, Workflow, About, Skills, Projects, Experience, Achievements, Contact
│   │   └── ui/          # Buttons, tags, badges, dividers
│   ├── content/         # Data files (site.ts, projects.ts, experience.ts, skills.ts, achievements.ts)
│   ├── lib/             # Utilities and motion variants
│   └── types/           # TypeScript content definitions
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Contact

**Atharv Deshmukh**
- Email: [atharv.d.718@gmail.com](mailto:atharv.d.718@gmail.com)
- GitHub: [@atharvd718](https://github.com/atharvd718)
- LinkedIn: [atharvdeshmukhcs](https://www.linkedin.com/in/atharvdeshmukhcs)

---

<sub>© 2026 Atharv Deshmukh. Built with Next.js, React, and Tailwind CSS.</sub>
