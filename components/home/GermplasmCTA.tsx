import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';

export default function GermplasmCTA() {
    return <section className="publication-callout"><div><SectionLabel>04 / From the genebank</SectionLabel><h2>Application of genomics in supporting efficient conservation and utilization.</h2><p>How molecular tools help identify rare, threatened, and novel resources for conservation and use.</p><Button href="/publications" light>Read the publication</Button></div><img src="/files/img/pub/pub1.jpeg" alt="Rice research publication" /></section>;
}
