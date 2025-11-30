import React from 'react';
import { Project } from '../../domain/entities';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      {projects.map((project, index) => (
        <div key={project.id} className="stagger-item">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};
