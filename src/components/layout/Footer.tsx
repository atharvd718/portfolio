import React from 'react';
import PageContainer from './PageContainer';
import { siteConfig } from '@/content/site';
import { resumeData } from '@/content/resume';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-8 bg-background">
      <PageContainer className="flex items-center justify-center text-center">
        <p className="font-sans font-normal text-meta text-text-secondary">
          © 2026 {siteConfig.name}. Last updated {resumeData.lastUpdated}.
        </p>
      </PageContainer>
    </footer>
  );
}
