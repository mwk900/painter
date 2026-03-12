export interface Colour {
  name: string;
  hex: string;
  family: ColourFamily;
  mood: string;
  advice: string;
  complementaryAccent: string;
}

export type ColourFamily = 'Neutrals' | 'Earth' | 'Greens' | 'Blues' | 'Statement';

export interface ColourFamilyData {
  name: ColourFamily;
  description: string;
  colours: Colour[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  startingFrom: string;
  timescale: string;
  image: string;
  imageAlt: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Interior' | 'Exterior' | 'Wallpaper' | 'Period';
  rooms?: number;
  colours: string[];
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  projectType: string;
  accentColour: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface BeforeAfterCard {
  id: string;
  label: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  wipeDirection: 'tl-br' | 'tr-bl';
}

export interface RoomZone {
  id: string;
  label: string;
  defaultColour: string;
}

export interface RoomTemplate {
  id: string;
  label: string;
  zones: RoomZone[];
}
