import { StaticPortfolioRepository } from '../modules/portfolio/infrastructure/StaticPortfolioRepository';
import { Header } from '../modules/portfolio/presentation/components/Header';
import { Hero } from '../modules/portfolio/presentation/components/Hero';
import { Section } from '../modules/portfolio/presentation/components/Section';
import { ProjectList } from '../modules/portfolio/presentation/components/ProjectList';
import { ExperienceList } from '../modules/portfolio/presentation/components/ExperienceList';
import { EducationList } from '../modules/portfolio/presentation/components/EducationList';
import { LicenseList } from '../modules/portfolio/presentation/components/LicenseList';
import { Footer } from '../modules/portfolio/presentation/components/Footer';
import { ScrollToTop } from '../modules/portfolio/presentation/components/ScrollToTop';

export default async function Home() {
  const repository = new StaticPortfolioRepository();
  const projects = await repository.getProjects();
  const experience = await repository.getExperience();
  const education = await repository.getEducation();
  const licenses = await repository.getLicenses();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      <Section 
        id="projects" 
        title="Featured Projects" 
        subtitle="A selection of my recent work, featuring modern web technologies and innovative designs."
        className="bg-slate-50"
      >
        <ProjectList projects={projects} />
      </Section>

      <Section 
        id="experience" 
        title="Work Experience" 
        subtitle="My professional journey in the tech industry."
        className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white"
      >
        <ExperienceList experiences={experience} />
      </Section>

      <Section 
        id="education" 
        title="Education"
        className="bg-slate-50"
      >
        <EducationList education={education} />
      </Section>

      <Section 
        id="licenses" 
        title="Licenses & Certifications"
        className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white"
      >
        <LicenseList licenses={licenses} />
      </Section>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}
