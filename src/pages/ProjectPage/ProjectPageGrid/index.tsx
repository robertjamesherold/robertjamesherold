import React from 'react';
import { FeaturedCard } from '../ProjectPageFeaturedCard';

// Typdefinition – separat exportieren (nicht default!)
export type ProjectsGridProps = {
  projects: Array<{ id: string | number; [key: string]: any }>
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
          <div className='grid-lg2 paddingTopSmall '>
      {projects.map((project) => (
        <FeaturedCard key={project.id} project={project} />
      ))}
    </div>
  );
}