import { fetcher } from './fetcher';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Servisler için API fonksiyonları
export const getServices = async (): Promise<Service[]> => {
  return fetcher('/api/services');
};

export const getService = async (id: string): Promise<Service> => {
  return fetcher(`/api/services/${id}`);
};

// Testimonials için API fonksiyonları
export const getTestimonials = async (): Promise<Testimonial[]> => {
  return fetcher('/api/testimonials');
};

// Features için API fonksiyonları
export const getFeatures = async (): Promise<Feature[]> => {
  return fetcher('/api/features');
}; 