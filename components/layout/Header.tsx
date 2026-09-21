'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation } from '@/data/navigation';

export default function Header() {
    const [open, setOpen] = useState(false);
    return <header className="site-header"><div className="nav-shell">
        <Link className="brand" href="/"><img className="brand-logo" src="/files/img/africarice.png" alt="AfricaRice" /><span className="brand-copy"><b>RBCA</b><small>Rice Biodiversity Center for Africa</small></span></Link>
        <div className="nav-context">International CGIAR Genebank</div>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? 'Close' : 'Menu'}<span /></button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation"><Link className="nav-home" href="/">Home</Link>{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link className="nav-cta" href="/request-germplasm"><span className="nav-cta-label">Access the collection</span><span>↗</span></Link></nav>
    </div></header>;
}
