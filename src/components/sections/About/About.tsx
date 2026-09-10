import React from 'react';
import { siteConfig } from '@/content/site';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';

export default function About() {
  return (
    <FadeInSection>
      <section id="about" className="pt-12 md:pt-16 pb-16 md:pb-24 bg-background">
        <PageContainer className="flex flex-col gap-6">
          <SectionHeading title="About" />
          <div className="flex flex-col gap-8 max-w-[65ch]">
            <p className="font-sans text-body text-text-secondary leading-relaxed">
              {siteConfig.bio}
            </p>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-[1.25rem] font-semibold text-text-primary">How My Projects Evolved</h3>
              <p className="font-sans text-body text-text-secondary leading-relaxed">
                My development journey follows a clear progression of increasing system depth. It started with Guardian's full-stack integration, moved through MockMate and MediSense's specialized AI capabilities, advanced into custom retrieval architectures with DocuMind, and is now focused on agentic pipelines in SynapseSync and predictive machine learning in my SIH project.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
