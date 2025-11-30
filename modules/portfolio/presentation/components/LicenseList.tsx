import React from 'react';
import { License } from '../../domain/entities';

interface LicenseListProps {
  licenses: License[];
}

export const LicenseList: React.FC<LicenseListProps> = ({ licenses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {licenses.map((license) => (
        <div key={license.id} className="stagger-item flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-lg hover-lift shine-effect card-glow-hover">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="absolute inset-0 rounded-full bg-green-400/20 pulse-ring"></span>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm">{license.name}</h4>
            <p className="text-xs text-slate-400">{license.issuer} • {license.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
