import { Project, Experience, Education, License } from './entities';

export interface PortfolioRepository {
  getProjects(): Promise<Project[]>;
  getExperience(): Promise<Experience[]>;
  getEducation(): Promise<Education[]>;
  getLicenses(): Promise<License[]>;
}
