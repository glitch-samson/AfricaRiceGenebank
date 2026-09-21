import PageTemplate from '@/components/ui/PageTemplate';
import { defaultPage, sitePages } from '@/data/site';

export default function RoutePage({ route }: { route: string }) {
    return <PageTemplate page={sitePages[route] ?? defaultPage} />;
}
