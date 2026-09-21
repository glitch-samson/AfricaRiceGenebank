import HeroArchive from './HeroArchive';
import TreatyBanner from './TreatyBanner';
import CollectionAtlas from './CollectionAtlas';
import VideoShowcase from './VideoShowcase';
import OperationsLoop from './OperationsLoop';
import GlobalImpact from './GlobalImpact';
import GenomicsHighlight from './GenomicsHighlight';
import PublicationsSpotlight from './PublicationsSpotlight';
import PartnersRail from './PartnersRail';

export default function HomePage() {
    return (
        <div className="home-page-transformed">
            {/* The user explicitly asked to preserve the hero section on the landing page */}
            <HeroArchive />

            {/* Transformed world-organisation standard sections */}
            <TreatyBanner />
            <CollectionAtlas />
            <VideoShowcase />
            <OperationsLoop />
            <GlobalImpact />
            <GenomicsHighlight />
            <PublicationsSpotlight />
            <PartnersRail />
        </div>
    );
}
