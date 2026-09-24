import type { Metadata } from 'next';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';
import MotionObserver from '@/components/layout/MotionObserver';

export const metadata: Metadata = {
    title: 'RBCA | Rice Biodiversity Center for Africa',
    description: 'Rice Biodiversity Center for Africa genebank.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="en" data-scroll-behavior="smooth"><body><MotionObserver /><SiteChrome>{children}</SiteChrome></body></html>;
}
