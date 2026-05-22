import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naidu Andaman Travels | Luxury Andaman Tour Packages',
  description: 'Premium Andaman packages, ferry booking, hotel booking, cab services and custom itineraries.',
  openGraph: {
    title: 'Naidu Andaman Travels',
    description: 'Cinematic Andaman vacation planning with local experts.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
