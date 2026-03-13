import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Chalk & Line Decorating, Nottingham',
  description:
    'Interior, exterior, wallpapering, and period restoration projects across Nottingham. West Bridgford, Beeston, Sherwood, Mapperley and beyond.',
  openGraph: {
    title: 'Projects | Chalk & Line Decorating, Nottingham',
    description: 'Our work across Nottingham — from Victorian terraces to contemporary new-builds.',
  },
  alternates: { canonical: 'https://chalkandline.co.uk/projects' },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
