import React from 'react';
import { Experience } from '../../domain/entities';

interface ExperienceListProps {
  experiences: Experience[];
}

export const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="stagger-item relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-400/30 md:left-1/2 md:-ml-px"></div>
          
          <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="hidden md:block w-5/12"></div>
            
            {/* Dot with glow */}
            <div className="absolute left-[-4px] top-6 h-3 w-3 rounded-full bg-blue-400 ring-4 ring-blue-400/20 md:left-1/2 md:-ml-1.5 glow-effect"></div>
            
            <div className="w-full md:w-5/12 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700/50 hover-lift shine-effect card-glow-hover">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-blue-300 bg-blue-500/20 rounded-full">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <h4 className="text-lg text-blue-200 mb-3">{exp.company}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
