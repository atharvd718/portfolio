export interface ResumeHighlight {
  label: string;
  value: string;
}

export interface ResumeData {
  title: string;
  subtitle: string;
  description: string;
  lastUpdated: string;
  pdfUrl: string;
  downloadFileName: string;
  documentType: string;
  highlights: ResumeHighlight[];
}

/**
 * Resume Content Configuration
 * 
 * To update your resume in the future:
 * 1. Replace the PDF file at `public/resume.pdf` (keep the same filename).
 * 2. Update the `lastUpdated` date below.
 * That's it! All buttons, viewer links, and badges update automatically.
 */
export const resumeData: ResumeData = {
  title: "My Resume",
  subtitle: "Curriculum Vitae & Verified Credentials",
  description:
    "Detailed overview of my engineering background, full-stack & applied AI projects, hackathon leadership, and technical problem-solving. Review the complete document directly in the viewer below or download a copy for ATS screening.",
  lastUpdated: "7 November 2026",
  pdfUrl: "/resume.pdf",
  downloadFileName: "Atharv_Deshmukh_Resume.pdf",
  documentType: "Verified PDF • 1 Page",
  highlights: [
    { label: "Current Role", value: "Full Stack & Applied AI Developer" },
    { label: "Education", value: "B.Tech CSE, PVGCOET Pune (2025–2029)" },
    { label: "Specialization", value: "Full Stack Web Apps, RAG Systems, RESTful APIs" },
    { label: "Status", value: "Open for Full Stack & AI Internship Opportunities" },
  ],
};

