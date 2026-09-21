import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import SectionLabel from './SectionLabel';
import type { RoutePage } from '@/types/site';

const sources = [['RBCA official source', 'https://rbca.africarice.org/'], ['Genesys crop diversity platform', 'https://www.genesys-pgr.org/'], ['FAO Plant Treaty', 'https://www.fao.org/plant-treaty/en/']];

export default function PageTemplate({ page }: { page: RoutePage }) {
    return <><section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(40,91,75,.9), rgba(40,91,75,.25)), url(${page.image})` }}><div><p className="kicker">{page.section}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section><section className="facts-rail">{page.facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section><section className="reading-page enriched-reading"><SectionLabel>The work behind the resource</SectionLabel><div className="reading-grid"><div><h2>Protecting diversity means making it useful.</h2>{page.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Button href="/request-germplasm">Request germplasm</Button></div><Image src={page.image} alt={page.title} width={900} height={650} /></div></section><section className="process-section"><SectionLabel>How this connects</SectionLabel><div className="process-heading"><h2>From careful work<br /><em>to practical use.</em></h2><p>Every stage adds context, confidence, and a clearer path to responsible use.</p></div><div className="process-grid">{page.steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="sources-section"><div><SectionLabel>Verified context</SectionLabel><h2>Continue exploring<br /><em>the collection.</em></h2></div><div className="source-list">{sources.map(([label, href]) => <Link href={href} target="_blank" key={href}><span>{label}</span><b>↗</b></Link>)}</div></section></>;
}
