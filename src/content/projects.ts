import { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "medisense-ai",
    title: "MediSense AI",
    status: "live",
    role: "Team Lead — 4-member team",
    stack: [
      "Next.js 16",
      "FastAPI",
      "TypeScript",
      "SQLite",
      "Google Gemini AI (Gemini Flash)",
      "ReportLab",
      "RESTful APIs",
    ],
    description:
      "MediSense AI is an AI-powered healthcare web application built with Next.js, FastAPI, TypeScript, SQLite and ReportLab for medical report analysis and automated PDF report generation. The project integrates Google Gemini AI (Gemini Flash), with RESTful APIs connecting the application layers. During Ignition HackVerse, Atharv led a four-member development team, coordinating architecture, task assignment and module integration before deploying the application through Vercel and Render — now live and publicly accessible.",
    links: {
      repo: "https://github.com/atharvd718/Al-Medical-Report-Analyzer",
      demo: "https://ai-medical-report-analyzer-nine.vercel.app",
    },
  },
  {
    id: "guardian",
    title: "Guardian",
    status: "live",
    role: "Solo Developer",
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Clerk",
      "Firebase Firestore",
      "Google Gemini AI",
      "Vercel",
      "vite-plugin-pwa",
    ],
    description:
      "Guardian is a live, installable Progressive Web App focused on personal safety. It features an AI safety chatbot (\"ARIA\") powered by Gemini, an SOS panic trigger with live location sharing to trusted contacts, automated emergency email alerts, and free WhatsApp/SMS fallback messaging. The app uses Firebase Firestore for real-time data sync — a deliberate choice given the safety-critical, live-updating nature of the data — and includes a Stripe-powered \"Guardian Pro\" subscription tier.",
    links: {
      repo: "https://github.com/atharvd718/guardian-safety-app",
      demo: "https://guardian-the-safety-app.vercel.app/",
    },
  },
  {
    id: "documind-ai",
    title: "DocuMind AI",
    status: "live",
    role: "Solo Developer",
    stack: [
      "FastAPI",
      "React",
      "Vite",
      "Groq (Llama 3.3)",
      "SQLite",
      "NumPy",
    ],
    description:
      "DocuMind AI is a self-hosted retrieval-augmented generation (RAG) application that lets users chat with their documents. Built with FastAPI and React/Vite, it uses Groq's Llama 3.3 for fast inference and a custom NumPy-based similarity search instead of a managed vector database — demonstrating retrieval-system fundamentals rather than relying on an out-of-the-box vector DB service.",
    links: {
      repo: "https://github.com/atharvd718/rag-based-documind-main",
      demo: "https://rag-based-documind.vercel.app",
    },
  },
  {
    id: "smartcart",
    title: "SmartCart",
    role: "Solo Developer",
    stack: ["React.js", "Next.js", "Node.js", "MongoDB", "RESTful APIs"],
    description:
      "SmartCart is a responsive full-stack e-commerce application built with React.js, Next.js, Node.js and MongoDB. The application includes user authentication, a product catalog, shopping cart functionality and order management, with reusable React components and RESTful API integration across the frontend and backend.",
    links: {},
  },
  {
    id: "connectify",
    title: "Connectify",
    role: "Solo Developer",
    stack: ["React.js", "Express.js", "Node.js", "MongoDB", "RESTful APIs"],
    description:
      "Connectify is a responsive social media web application built with React.js, Express.js, Node.js and MongoDB. It supports authentication, posts, comments, likes and user profiles, with frontend and backend modules connected through RESTful APIs and organized around a clean application architecture.",
    links: {},
  },
  {
    id: "mockmate",
    title: "MockMate",
    status: "built",
    repoPrivate: true,
    role: "Solo Developer",
    stack: [
      "Next.js App Router",
      "Clerk",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "Google Gemini",
      "Vercel AI SDK",
      "Vercel",
      "Render",
    ],
    description:
      "MockMate is a RAG-based AI mock-interview platform: it reads a resume or topic, generates contextual interview questions, and evaluates answers with real-time AI feedback and scoring. Session history is stored in Neon PostgreSQL via Drizzle ORM, results are emailed as a post-interview report via Resend, and a premium tier is available via Stripe. This repository is currently private — it can be featured with a live link once made public.",
    links: {},
  },
  {
    id: "synapsesync",
    title: "SynapseSync",
    status: "in-progress",
    role: "Solo Developer",
    capability: "Agentic AI + Guardrails",
    stack: ["LLM Agents", "Notion API", "Python"],
    description:
      "SynapseSync is an agentic pipeline that converts practice notes into Notion entries via an LLM agent with an understand→plan→validate→guardrail flow before any write action.",
    links: {},
  },
  {
    id: "sih-drdo",
    title: "SIH PS 26153 — AI-Based Network Attack Forecasting",
    timeframe: "Aug 2026 – Present",
    status: "in-progress",
    role: "Team — not specified",
    capability: "ML + Networking + Cybersecurity",
    stack: [
      "PyTorch (CUDA)",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Jupyter",
      "CIC-IDS-2018",
    ],
    description:
      "Currently developing a machine learning solution for Smart India Hackathon problem statement PS 26153, sourced from DRDO. The project uses a GPU-accelerated PyTorch environment and the CIC-IDS-2018 benchmark dataset, consistent with a network-security task. A key highlight is the focus on forecasting (predictive) capabilities rather than just detection (reactive). Model development is in progress.",
    links: {},
  },
];
