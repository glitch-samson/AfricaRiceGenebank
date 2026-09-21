import Link from 'next/link';

export default function Footer() {
    return <footer><div className="footer-top"><Link className="brand" href="/"><img className="brand-logo" src="/files/img/africarice.png" alt="AfricaRice" /><span><b>RBCA</b><small>Rice Biodiversity Center for Africa</small></span></Link><p>Conserving rice diversity.<br />Growing Africa's future.</p><Link className="footer-request" href="/request-germplasm">Request germplasm <span>↗</span></Link></div><div className="footer-bottom"><span>© AfricaRice Genebank</span><span>01 BP 2551, Bouaké, Côte d'Ivoire</span><span><Link href="/contact">Contact</Link> &nbsp; <Link href="/publications">Publications</Link></span></div></footer>;
}
