'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import NewsletterPrompt from './NewsletterPrompt';
import ChatAssistant from './ChatAssistant';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    if (pathname.startsWith('/admin')) return <>{children}</>;
    return <><Header /><main>{children}</main><Footer /><NewsletterPrompt /><ChatAssistant /></>;
}
