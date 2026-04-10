export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: 'interior' | 'exterior' | 'commercial' | 'specialty';
  propertyType: 'residential' | 'commercial';
  address: string;
  squareFootage?: number;
  timeline: 'asap' | 'within-week' | 'within-month' | 'flexible';
  description: string;
  createdAt: Date;
  status: 'pending' | 'contacted' | 'quoted' | 'completed';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'commercial' | 'specialty';
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  description?: string;
  location?: string;
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar?: string;
  approved: boolean;
  createdAt: Date;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}
