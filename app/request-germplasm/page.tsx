import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DataBadge from '@/components/ui/DataBadge';
import StatCard from '@/components/ui/StatCard';
import GenesysEmbed, { GenesysConfig } from '@/components/request/GenesysEmbed';

function envValue(...names: string[]) {
    const value = names.map((name) => process.env[name]).find(Boolean) || '';
    return value.trim().replace(/^['"]+|['"]+$/g, '');
}

const genesysConfig: GenesysConfig = {
    enabled: envValue('GENESYS_ENABLED').toLowerCase() !== 'false',
    apiUrl: envValue('GENESYS_API_URL', 'NEXT_PUBLIC_GENESYS_API_URL', 'API_GEN_URL'),
    apiToken: envValue('GENESYS_API_TOKEN', 'NEXT_PUBLIC_GENESYS_API_TOKEN', 'API_GEN_TOKEN'),
    clientId: envValue('GENESYS_CLIENT_ID', 'NEXT_PUBLIC_GENESYS_CLIENT_ID', 'API_GEN_CLIENTID'),
    clientKey: envValue('GENESYS_CLIENT_KEY', 'NEXT_PUBLIC_GENESYS_CLIENT_KEY', 'API_GEN_CLIENTKEY'),
    captchaSiteKey: envValue('GENESYS_CAPTCHA_SITE_KEY', 'NEXT_PUBLIC_GENESYS_CAPTCHA_SITE_KEY', 'API_GEN_CAPTCHA'),
    assetsUrl: envValue('GENESYS_ASSETS_URL', 'NEXT_PUBLIC_GENESYS_ASSETS_URL') || 'https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.7.6/dist',
    instituteCode: envValue('GENESYS_INSTITUTE_CODE', 'NEXT_PUBLIC_GENESYS_INSTITUTE_CODE', 'API_GEN_INSCODE') || 'CIV033',
    shoppingCartEnabled: envValue('GENESYS_SHOPPING_CART_ENABLED', 'NEXT_PUBLIC_GENESYS_SHOPPING_CART_ENABLED', 'API_GEN_SHOP').toLowerCase() !== 'false',
};

const steps = [
    ['01', 'Browse the collection', 'Search AfricaRice accessions by species, traits, origin, subsets, and available data.'],
    ['02', 'Build your cart', 'Open accession details and add the material that matches your breeding, research, or training needs.'],
    ['03', 'Complete the request', 'Review the cart, provide delivery details, accept the SMTA, and complete the required CAPTCHA.'],
    ['04', 'Receive certified seed', 'AfricaRice reviews the request, prepares the material, and coordinates phytosanitary documentation and dispatch.'],
];

const catalogueLinks = [
    ['Home', '#/'],
    ['Overview', '#/overview'],
    ['Map', '#/map'],
    ['Bibliography', '#/map'],
    ['Cart', '#/cart'],
    ['Subsets', '#/subsets'],
    ['Datasets', '#/datasets'],
    ['Trait data', '#/traits'],
];

export default function RequestGermplasmPage() {
    return <div className="world-page-container"><div className="section-shell"><Breadcrumbs items={[{ label: 'Request Germplasm' }]} /></div><section className="world-page-hero"><div className="section-shell"><div className="page-hero-grid"><div className="page-hero-text"><div className="hero-badge-row"><DataBadge variant="gold">Global Public Good</DataBadge><DataBadge variant="emerald">Genesys Catalogue</DataBadge><DataBadge variant="slate">SMTA Distribution</DataBadge></div><h1 className="world-page-title">Find the right seed for <em>your next experiment.</em></h1><p className="world-page-lead">Browse the AfricaRice collection, build a request cart, and submit your germplasm request through the secure Genesys PGR workflow. Materials are shared for food and agriculture research, breeding, education, and conservation.</p><div className="hero-cta-group"><a href="#catalogue" className="btn-primary-dark">Browse the catalogue ↓</a><a href="https://www.genesys-pgr.org/wiews/CIV033" target="_blank" rel="noreferrer" className="btn-secondary-outline">Open Genesys directly ↗</a></div></div><div className="page-hero-media"><img src="/files/img/home/germplasm.jpg" alt="Inspecting conserved rice seeds for distribution" className="hero-rounded-image" /><div className="hero-caption-pill"><span>AfricaRice material, searchable through the Genesys global PGR catalogue</span></div></div></div></div></section><section className="facts-strip-section"><div className="section-shell"><div className="facts-strip-grid"><StatCard value="21,300+" label="Accessions" sublabel="African, Asian, interspecific, and wild rice" /><StatCard value="Free" label="Material cost" sublabel="Shared global public good under the Treaty" /><StatCard value="CIV033" label="Genesys collection" sublabel="AfricaRice institute filter" /><StatCard value="SMTA" label="Transfer framework" sublabel="Transparent terms for responsible use" /></div></div></section><section className="reading-content-section request-workflow-section"><div className="section-shell"><div className="section-header-centered"><span className="section-eyebrow">How it works</span><h2 className="section-main-heading">From accession search to <em>seed dispatch.</em></h2><p className="section-subtext">Genesys handles the catalogue, cart, request validation, and request status. AfricaRice remains responsible for material preparation and distribution.</p></div><div className="workflow-steps-quad">{steps.map(([number, title, description]) => <div className="workflow-step-card" key={number}><span className="step-badge">Step {number}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section><section className="genesys-catalogue-section" id="catalogue"><div className="section-shell"><nav className="genesys-catalogue-nav" aria-label="Genesys catalogue navigation">{catalogueLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="catalogue-heading"><div><span className="section-eyebrow">AfricaRice collection · CIV033</span><h2>Explore available <em>germplasm.</em></h2></div><span className="catalogue-status"><i /> Secure request cart enabled</span></div><GenesysEmbed config={genesysConfig} /></div></section><section className="reading-content-section request-terms-section"><div className="section-shell"><div className="two-col-grid"><div><span className="section-eyebrow">Before you submit</span><h2 className="section-main-heading">A request prepared with care moves <em>faster.</em></h2><p className="editorial-lead">Have your institutional delivery details and any import permit requirements ready. Genesys will guide you through the request and SMTA steps, while the AfricaRice distribution desk verifies availability and phytosanitary requirements.</p></div><div className="sidebar-card"><h4>SMTA essentials</h4><ul className="bullet-feature-list"><li><strong>Responsible use:</strong> Material is provided for food and agriculture research, breeding, education, and conservation.</li><li><strong>Keep the terms:</strong> Further transfers must remain under the same Standard Material Transfer Agreement.</li><li><strong>Share knowledge:</strong> Non-confidential evaluation and characterization data are welcome back into the public resource.</li></ul></div></div></div></section></div>;
}
