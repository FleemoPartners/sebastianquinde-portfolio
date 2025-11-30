import React from 'react';
import { Education } from '../../domain/entities';

interface EducationListProps {
  education: Education[];
}

export const EducationList: React.FC<EducationListProps> = ({ education }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {education.map((edu) => (
        <div key={edu.id} className="stagger-item bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group hover-lift">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
              <p className="text-slate-600">{edu.institution}</p>
              <p className="text-sm text-slate-400 mt-1">{edu.period}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
