export interface LeadFormData {
  name: string;
  phone: string;
  city: string;
  projectStage: string;
  file?: File;
}

export interface KitchenType {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  beforeImage: string;
  afterImage: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TrustMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Language {
  code: 'en' | 'hi';
  name: string;
  flag: string;
}