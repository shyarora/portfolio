import type { PortfolioData, HeroData, AboutData, ExperienceItem, Project, ContactInfo } from '@/types/portfolio';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.shyarora.dev';

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: 'no-store' // Always fetch fresh data
  });
  
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  
  return res.json();
}

export async function getPortfolioData(): Promise<PortfolioData> {
  return fetchAPI<PortfolioData>('/api/portfolio');
}

export async function getHeroData(): Promise<HeroData> {
  return fetchAPI<HeroData>('/api/portfolio/hero');
}

export async function getAboutData(): Promise<AboutData> {
  return fetchAPI<AboutData>('/api/portfolio/about');
}

export async function getExperiences(): Promise<ExperienceItem[]> {
  return fetchAPI<ExperienceItem[]>('/api/portfolio/experiences');
}

export async function getProjects(): Promise<Project[]> {
  return fetchAPI<Project[]>('/api/portfolio/projects');
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return fetchAPI<Project[]>('/api/portfolio/projects/featured');
}

export async function getContactInfo(): Promise<ContactInfo> {
  return fetchAPI<ContactInfo>('/api/portfolio/contact');
}

export async function submitContactForm(data: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    throw new Error('Failed to submit contact form');
  }
  
  return res.json();
}
