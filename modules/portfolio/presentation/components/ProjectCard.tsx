import React from 'react';
import { Project } from '../../domain/entities';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative h-96 w-full overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shine-effect card-glow-hover">
      {/* Image Background */}
      <div 
        className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <h3 className="mb-2 text-2xl font-bold translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
          {project.title}
        </h3>
        
        <div className="mb-4 flex flex-wrap gap-2 translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>

        <p className="mb-6 text-sm text-blue-100 translate-y-8 transform opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
          {project.description}
        </p>

        <a 
          href={project.link}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-900 transition-all hover:bg-blue-50 translate-y-8 transform opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100"
        >
          View Project
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
