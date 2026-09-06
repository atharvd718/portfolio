import React from 'react';
import { projects } from '@/content/projects';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';
import ProjectEntry from './ProjectEntry';

export default function Projects() {
  const shippedProjects = projects.filter((p) => p.status !== 'in-progress');
  const inProgressProjects = projects.filter((p) => p.status === 'in-progress');

  return (
    <FadeInSection>
      <section id="projects" className="py-12 md:py-16 bg-background">
        <PageContainer className="flex flex-col gap-8">
          <SectionHeading
            title="Projects"
            subtitle="A selection of things I've built and am building."
          />
          <div className="flex flex-col gap-6">
            {shippedProjects.map((project) => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>

          {inProgressProjects.length > 0 && (
            <div className="flex flex-col gap-6 mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <h3 className="font-serif text-h3 font-semibold text-text-primary">
                  In Progress / Currently Building
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                {inProgressProjects.map((project) => (
                  <ProjectEntry key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
