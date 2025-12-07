
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Stored as string, rendered dynamically
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  date: string;
  technologies: string[]; // Nouveau champ pour les technos
  client?: string; // Nouveau champ pour le nom du client
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
}

export interface QuoteRequest {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  serviceType: string;
  budgetRange: string;
  details: string;
  date: string;
  status: 'pending' | 'processed';
}

export type Language = 'fr' | 'en';
