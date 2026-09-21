import Link from 'next/link';

export default function Button({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
    return <Link className={`button ${light ? 'button-light' : ''}`} href={href}>{children}<span>↗</span></Link>;
}
