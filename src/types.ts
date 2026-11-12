export interface SiteConfig {
  company: string;
  brandName: string;
  baseline: string;
  phone: string;
  phoneDisplay: string;
  phone2: string;
  phone2Display: string;
  phonesDisplay: string;
  whatsapp: string;
  whatsappDisplay?: string;
  whatsappMessage: string;
  email: string;
  villes: string[];
  horaires: string;
  address: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
  checklist: { category: string; tasks: string[] }[];
  audience: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface ZoneItem {
  id: string;
  slug: string;
  name: string;
  region: string;
  shortDesc: string;
  description: string;
  quartiers: string[];
  specifics: string[];
  advantages: string[];
}

export interface ConseilArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Conseils pratiques' | 'Fin de chantier' | 'Bureaux' | 'Particuliers';
  readTime: string;
  date: string;
  summary: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Général' | 'Services' | 'Tarifs' | 'Interventions' | 'Zones';
}

export interface QuoteFormData {
  nom_complet: string;
  telephone: string;
  email?: string;
  service: string;
  ville: string;
  quartier?: string;
  type_local: string;
  superficie: string;
  frequence: string;
  date_souhaitee?: string;
  contact_prefere: 'WhatsApp' | 'Téléphone' | 'E-mail';
  description: string;
  optionsSupp?: string[];
}
