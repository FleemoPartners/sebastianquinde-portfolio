import { PortfolioRepository } from '../domain/repository';
import { Project, Experience, Education, License } from '../domain/entities';

export class StaticPortfolioRepository implements PortfolioRepository {
  async getProjects(): Promise<Project[]> {
    return [
      {
        id: '1',
        title: 'FleemoPartners Landing Page',
        description: 'Landing page para la empresa de asesoria en redes sociales FleemoPartners.',
        technologies: ['Vue.js', 'Tailwind CSS', 'Vite'],
        imageUrl: 'https://i.postimg.cc/BvsRqfZQ/Captura-de-pantalla-2025-11-27-010805.png',
        link: 'https://github.com/FleemoPartners/fleemo-webapp'
      }
      /*{
        id: '2',
        title: 'Task Management App',
        description: 'A collaborative task management tool with real-time updates.',
        technologies: ['React', 'Firebase', 'Redux'],
        imageUrl: 'https://placehold.co/600x400/1e40af/ffffff?text=Task+App',
        link: '#'
      },
      {
        id: '3',
        title: 'Financial Dashboard',
        description: 'Data visualization dashboard for financial analytics.',
        technologies: ['Vue.js', 'D3.js', 'Node.js'],
        imageUrl: 'https://placehold.co/600x400/1d4ed8/ffffff?text=Dashboard',
        link: '#'
      },
      {
        id: '4',
        title: 'AI Image Generator',
        description: 'Interface for generating images using Stable Diffusion API.',
        technologies: ['Python', 'FastAPI', 'React'],
        imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=AI+Gen',
        link: '#'
      }*/
    ];
  }

  async getExperience(): Promise<Experience[]> {
    return [
      {
        id: '1',
        role: 'Frontend Developer',
        company: 'FleemoPartners',
        period: '2025',
        description: 'Desarrollo de paginas web con Vue.js, React y Next.js para clientes'
      },
      {
        id: '2',
        role: 'Coordinador de Proyectos',
        company: 'Zeit Peru',
        period: '2025',
        description: 'Coordinador TI que gestiona documentación, clientes y entregables en proyectos Microsoft 365.'
      }
    ];
  }

  async getEducation(): Promise<Education[]> {
    return [
      {
        id: '1',
        degree: 'Grado en Ingeniería, Computer Software and Media Applications',
        institution: 'ISIL',
        period: '2023 - 2026'
      }
    ];
  }

  async getLicenses(): Promise<License[]> {
    return [
      {
        id: '1',
        name: 'Tecnologias en desarrollo de software',
        issuer: 'ISIL',
        date: '2025',
        url: '#'
      },
      {
        id: '2',
        name: 'EF SET English Certificate ',
        issuer: 'EF SET',
        date: '2025',
        url: 'https://cert.efset.org/en/1gbyoU'
      }
    ];
  }
}
