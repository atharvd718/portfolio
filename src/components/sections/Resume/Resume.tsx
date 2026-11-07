"use client";

import React, { useState } from "react";
import { resumeData } from "@/content/resume";
import FadeInSection from "@/components/motion/FadeInSection";
import SectionHeading from "@/components/ui/SectionHeading";
import PageContainer from "@/components/layout/PageContainer";
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Maximize2,
  Sparkles,
} from "lucide-react";

export default function Resume() {
  const [hasError, setHasError] = useState(false);

  return (
    <FadeInSection>
      <section
        id="resume"
        className="py-12 md:py-16 lg:py-24 bg-background border-t border-border/45"
      >
        <PageContainer className="flex flex-col gap-8 md:gap-10">
          {/* Header & Meta Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <SectionHeading
                title={resumeData.title}
                subtitle={resumeData.subtitle}
              />
            </div>

            {/* Last Updated Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text-secondary self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>Last Updated: {resumeData.lastUpdated}</span>
            </div>
          </div>

          {/* Description & Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Description & Highlights */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="font-sans text-body text-text-secondary leading-relaxed">
                {resumeData.description}
              </p>

              {/* Quick Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {resumeData.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-surface/40 border border-border/70 flex flex-col gap-1 transition-colors hover:border-accent/40"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
                      {item.label}
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-medium text-text-primary">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Prominent Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              {/* Primary View Resume Button */}
              <a
                href={resumeData.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-sans text-sm font-semibold shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="View Resume in new tab"
              >
                <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View Fullscreen Resume</span>
              </a>

              {/* Download PDF Button */}
              <a
                href={resumeData.pdfUrl}
                download={resumeData.downloadFileName}
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-accent/70 bg-surface/70 text-text-primary font-sans text-sm font-semibold hover:bg-accent-tint hover:border-accent hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="Download Resume PDF"
              >
                <Download className="w-4 h-4 text-accent transition-transform group-hover:translate-y-0.5" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Document metadata line */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 text-xs text-text-secondary font-mono text-center">
                <span className="inline-flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-accent" />
                  {resumeData.documentType}
                </span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Publicly Accessible
                </span>
              </div>
            </div>
          </div>

          {/* Embedded PDF Viewer Window Container */}
          <div className="w-full rounded-2xl border border-border bg-surface/30 shadow-hover overflow-hidden transition-all duration-300">
            {/* Viewer Chrome Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface/80 border-b border-border backdrop-blur-sm">
              <div className="flex items-center gap-3">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                </div>
                {/* Document Name Pill */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-background/70 border border-border/60 text-xs font-mono text-text-secondary">
                  <FileText className="w-3.5 h-3.5 text-accent" />
                  <span>{resumeData.downloadFileName}</span>
                </div>
              </div>

              {/* Viewer Controls */}
              <div className="flex items-center gap-2">
                <a
                  href={resumeData.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:text-accent hover:bg-surface transition-colors"
                  title="Open in new window"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </a>
                <a
                  href={resumeData.pdfUrl}
                  download={resumeData.downloadFileName}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent-tint text-accent hover:bg-accent hover:text-white transition-colors"
                  title="Download copy"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            </div>

            {/* Embedded PDF Display Area */}
            <div className="relative w-full h-[580px] sm:h-[700px] md:h-[820px] lg:h-[920px] bg-background">
              {!hasError ? (
                <object
                  data={`${resumeData.pdfUrl}#view=FitH`}
                  type="application/pdf"
                  className="w-full h-full block"
                  onError={() => setHasError(true)}
                  aria-label="Atharv Deshmukh Resume PDF Viewer"
                >
                  {/* Nested Iframe Fallback */}
                  <iframe
                    src={`${resumeData.pdfUrl}#view=FitH`}
                    className="w-full h-full border-0 block"
                    title="Atharv Deshmukh Resume Preview"
                    onError={() => setHasError(true)}
                  >
                    {/* Inner Fallback if browser forbids embedded objects */}
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-surface/30">
                      <FileText className="w-12 h-12 text-accent mb-3" />
                      <h4 className="font-serif text-lg font-semibold text-text-primary mb-2">
                        Resume Preview Ready
                      </h4>
                      <p className="font-sans text-sm text-text-secondary max-w-md mb-6">
                        Your browser may restrict embedded PDF rendering. You can view or download the full document directly.
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <a
                          href={resumeData.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent/90"
                        >
                          Open Resume in New Tab
                        </a>
                        <a
                          href={resumeData.pdfUrl}
                          download={resumeData.downloadFileName}
                          className="px-4 py-2 rounded-lg border border-border bg-surface text-text-primary text-xs font-semibold hover:bg-surface/80"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </iframe>
                </object>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-surface/30">
                  <FileText className="w-12 h-12 text-accent mb-3" />
                  <h4 className="font-serif text-lg font-semibold text-text-primary mb-2">
                    Resume Document Available
                  </h4>
                  <p className="font-sans text-sm text-text-secondary max-w-md mb-6">
                    Click below to open the complete PDF resume directly in your browser.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href={resumeData.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent/90 shadow-sm"
                    >
                      Open Resume in New Tab
                    </a>
                    <a
                      href={resumeData.pdfUrl}
                      download={resumeData.downloadFileName}
                      className="px-5 py-2.5 rounded-lg border border-border bg-surface text-text-primary text-sm font-semibold hover:bg-surface/80"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile-Friendly Helper Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 bg-surface/50 border-t border-border text-xs text-text-secondary font-sans">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <Sparkles className="w-4 h-4 text-accent shrink-0 hidden sm:inline" />
                <span>
                  Tip: On touch screens, tap <strong>Fullscreen</strong> above or open directly for natural pinch-to-zoom.
                </span>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <a
                  href={resumeData.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline inline-flex items-center gap-1"
                >
                  Open in New Tab
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
