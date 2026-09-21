import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import CollectionStats from './CollectionStats';

export default function CollectionIntro() {
    return <section className="collection-intro" id="collection"><SectionLabel>01 / The collection</SectionLabel><div className="intro-copy"><p className="display-copy">One of the world’s most important collections of rice diversity, rooted in Africa and open to discovery.</p><div className="intro-detail"><p>RBCA is one of 11 CGIAR genebanks. We safeguard cultivated African and Asian rice, interspecific genotypes, and wild relatives in trust for humanity.</p><Button href="/about">Meet the genebank</Button></div></div><CollectionStats /></section>;
}
