import React, { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, id, className = '' }) => {
  const isDark = className?.includes('slate-800') || className?.includes('slate-900') || className?.includes('blue-900') || className?.includes('indigo-900');
  
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="mb-16 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 relative inline-block ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {title}
              <span className={`absolute -bottom-2 left-0 w-full h-1 rounded-full transform scale-x-50 transition-transform hover:scale-x-100 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
            </h2>
            {subtitle && <p className={`max-w-2xl mx-auto mt-6 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>}
          </div>
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
};
