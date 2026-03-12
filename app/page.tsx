import type { Metadata } from 'next';
import { HeroSection } from '@/components/landing/HeroSection';
import { ColourFamiliesSection } from '@/components/landing/ColourFamiliesSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { RoomVisualiser } from '@/components/room-visualiser/RoomVisualiser';
import { BeforeAfterSection } from '@/components/landing/BeforeAfterSection';
import { ProcessSection } from '@/components/landing/ProcessSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { CoverageSection } from '@/components/landing/CoverageSection';
import { BookingSection } from '@/components/landing/BookingSection';

export const metadata: Metadata = {
  title: 'Chalk & Line Decorating | Professional Painting & Colour Consultancy, Nottingham',
  description:
    'Premium painting, decorating, and colour consultancy across Nottingham. Interior, exterior, wallpapering, period restoration. Colour done properly.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ColourFamiliesSection />
      <ServicesSection />
      <RoomVisualiser />
      <BeforeAfterSection />
      <ProcessSection />
      <TestimonialsSection />
      <CoverageSection />
      <BookingSection />
    </>
  );
}
