export interface Place {
  id: string;
  name: string;
  type: string;
  description: string;
  address: string;
  distance: string; // em metros ou "5 min a pé"
  walkingTime: string; // "3 min a pé"
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  image: string;
  hours: string;
  phone?: string;
  website?: string;
  googleMapsUrl: string;
  acceptsCard: boolean;
  hasDelivery: boolean;
  hasWifi?: boolean;
  tips: string;
  category: "restaurant" | "cafe" | "bar" | "supermarket" | "pharmacy" | "shopping";
  rating: number; // 0-5
  reviewCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  specialties?: string[]; // Pratos/items especiais
  badges?: ("verified" | "new" | "guest-favorite" | "open-now")[];
}

export interface Tour {
  id: string;
  slug: string;
  name: string;
  title: string; // Título completo
  description: string; // Descrição longa
  shortDescription: string; // Descrição curta para cards
  price: number;
  priceDisplay?: string; // "A partir de €23"
  originalPrice?: number; // Preço original (para mostrar desconto)
  currency: string;
  discount?: number; // Porcentagem de desconto
  duration: string;
  images: string[];
  highlights: string[]; // Destaques principais (6-8 items)
  included: string[]; // O que está incluído
  notIncluded: string[]; // O que NÃO está incluído
  category: "museum" | "monument" | "theme-park" | "experience" | "tour";
  subcategory?: string; // Ex: "Skip the line", "Best seller"
  rating: number;
  reviewCount: number;
  reviews?: TourReview[]; // Avaliações de clientes
  isPopular: boolean;
  isBestSeller: boolean;
  hasSkipLine: boolean;
  hasDiscount: boolean;
  affiliateUrl: string;
  
  // Informações práticas
  location: string;
  meetingPoint?: string;
  howToGetThere: string;
  nearestMetro?: string;
  walkingTimeFromApartment?: string;
  
  // Detalhes importantes
  importantInfo: string[];
  requirements?: string[]; // O que levar, restrições, etc
  accessibility?: string;
  languages?: string[]; // Idiomas disponíveis
  groupSize?: string;
  availability?: string;
  
  // Benefícios
  freeCancellation: boolean;
  instantConfirmation: boolean;
  mobileTicket: boolean;
  
  // FAQs
  faqs?: FAQ[];
  
  tips: string;
  
  // Metadata
  keywords?: string[]; // Para busca
}

export interface TourReview {
  id: string;
  author: string;
  country: string;
  date: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ApartmentInfo {
  wifi: {
    name: string;
    password: string;
  };
  address: string;
  checkIn: string;
  checkOut: string;
  emergencyContact: {
    name: string;
    phone: string;
    whatsapp: string;
  };
  rules: string[];
  appliances: {
    name: string;
    instructions: string;
  }[];
  troubleshooting: {
    problem: string;
    solution: string;
  }[];
}

export interface TransportOption {
  id: string;
  name: string;
  type: "metro" | "bus" | "taxi" | "bike" | "airport";
  description: string;
  price?: string;
  tips: string;
  icon: string;
}

export type Language = "pt" | "en" | "es";

export interface Translation {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

