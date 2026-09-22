import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <ol>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={item.label}>
                            <span className="crumb-separator" aria-hidden="true">/</span>
                            {isLast || !item.href ? (
                                <span className="crumb-current" aria-current="page">{item.label}</span>
                            ) : (
                                <Link href={item.href}>{item.label}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
