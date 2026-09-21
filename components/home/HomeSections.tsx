'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

export default function HomeSections() {
    const [active, setActive] = useState(0);
    const activities = [['Preserve', 'Traditional African rice varieties carry the traits that tomorrow\'s climates will demand.'], ['Manage', 'From acquisition to storage, every accession is cared for with purpose and precision.'], ['Discover', 'Genomics and open data turn a vast collection into practical possibilities for breeders.'], ['Share', 'Resources move into the hands of researchers, institutions, and farmers across Africa.']];
    return <section className="activity-section"><div className="activity-image" style={{ backgroundImage: `url(/files/img/home/${['cons.jpg', 'work.jpg', 'oppp.jpg', 'germplasm.jpg'][active]})` }} /><div className="activity-content"><SectionLabel>02 / Our mandate</SectionLabel><h2>A collection is only<br /><em>alive when it is used.</em></h2><p className="activity-lead">The work behind every seed is a continuous loop of care, knowledge, and collaboration.</p><div className="activity-list">{activities.map(([title, text], index) => <button className={active === index ? 'active' : ''} onClick={() => setActive(index)} key={title}><span>0{index + 1}</span><b>{title}</b><i>↗</i>{active === index && <small>{text}</small>}</button>)}</div></div><div className="home-pathways"><Link href="/collection">Explore species and relatives ↗</Link><Link href="/research">Explore research and genomics ↗</Link><Link href="/request-germplasm">Request germplasm ↗</Link></div></section>;
}
