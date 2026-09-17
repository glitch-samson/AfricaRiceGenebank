@extends('layouts.webtemp') 

@section('titre')
African rice
@endsection

@section('contenu')
    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/species/african/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">African rice</h2>
          </div>
        </div>
        <div class="carousel-item" style="background-image: url({{asset('files/img/species/african/slide2.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">African rice</h2>
          </div>
        </div>
      </div>
        <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
      <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g class="wave1">
          <use xlink:href="#wave-path" x="50" y="3"></use>
        </g>
        <g class="wave2">
          <use xlink:href="#wave-path" x="50" y="0"></use>
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
    <section id="about" class="about section pb-0">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Species</h2>
          <p>African rice</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>African rice (<em>Oryza glaberrima Steud.</em>) accounts for approximately 17% of the collection conserved at the RBCA. Several African rice accessions have resistance/tolerance to major abiotic and biotic stresses, including drought, iron toxicity, weed competitiveness, nematodes, African rice gall midge, and bacterial blight<sup><a href="https://agris.fao.org/agris-search/search.do?recordID=JP1998001881" target="_blank" rel="noopener noreferrer">1</a>–<a href="https://doi.org/10.2135/cropsci2011.05.0287" target="_blank" rel="noopener noreferrer">4</a></sup>. As a result, the species is still actively cultivated in some parts of Africa, including Guinea-Bissau, Guinea, Sierra Leone, and the Togo Hills in Ghana and Togo. For example, farmers on the Danyi Plateau in the Togo Hills still cultivate solely African rice landraces because of good grain quality and palatability as well as better adaptation to soil with low fertility and high acidity<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0085953" target="_blank" rel="noopener noreferrer"><sup>5</sup></a>. These landraces are usually intercropped with cassava<a href="https://link.springer.com/article/10.1007/s10745-012-9528-x" target="_blank" rel="noopener noreferrer"><sup>6</sup></a>, produce heavier and larger seeds, which germinate better and produce more vigorous seedlings with deeper initial root system than smaller seeds<a href="https://www.researchgate.net/publication/230464641_Seed_Size_Variation_and_its_Effects_on_Germination_and_Seedling_Vigour_in_Rice" target="_blank" rel="noopener noreferrer"><sup>7</sup></a>. Based on survey studies, African rice grains are also believed to have good nutritional value, and the rice is said to stay in the stomach longer that enables farmers to work longer without getting hungry<a href="https://link.springer.com/article/10.1007/s10745-012-9528-x" target="_blank" rel="noopener noreferrer"><sup>6</sup></a>. Besides, African rice is still used by some communities for rituals and some types of ceremonies. However, African rice has its weakness, including lodging, a limited number of spikelets per panicle, grain shattering, and prolonged seed dormancy<a href="https://doi.org/10.2135/cropsci2011.05.0287" target="_blank" rel="noopener noreferrer"><sup>4</sup></a>. Most farmers in Africa grow either modern varieties or old Asian rice varieties.</p>
                <h3>Genetic diversity studies</h3>
                <p>Efforts have been made to characterize the genetic variation of the African rice collection using phenotypic traits<sup><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0085953" target="_blank" rel="noopener noreferrer">5</a>,<a href="https://scialert.net/fulltext/?doi=ajps.2013.79.86" target="_blank" rel="noopener noreferrer">8</a></sup>, molecular markers <sup><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0085953" target="_blank" rel="noopener noreferrer">5</a>,<a href="https://pubmed.ncbi.nlm.nih.gov/15545652/" target="_blank" rel="noopener noreferrer">9</a>–<a href="https://link.springer.com/article/10.1007%2Fs00122-003-1252-x" target="_blank" rel="noopener noreferrer">16</a></sup>, and DNA sequencing<sup><a href="http://sourcedb.ib.cas.cn/cn/ibthesis/201108/P020110825623858269703.pdf" target="_blank" rel="noopener noreferrer">17</a>,<a href="https://pubmed.ncbi.nlm.nih.gov/25064006/" target="_blank" rel="noopener noreferrer">18</a></sup>. However, most previous genetic characterization studies were done on small numbers of accessions using few phenotypic traits and/or molecular markers. To improve the characterization of the collection, our team recently studied the genetic variation and population structure of 2,223 African rice accessions using 27,560 SNPs<a href="https://pubmed.ncbi.nlm.nih.gov/29093721/" target="_blank" rel="noopener noreferrer"><sup>19</sup></a>. Nearly 60% of the 27,560 &nbsp;SNPs were polymorphic across the 2,223 accessions, but we found out that 44 accessions were either taxonomically misclassified or mislabeled during routine genebank operations. Following the exclusion of the 44 outliers, only 14% of the 27,560 SNPs were polymorphic across 2,179 accessions, clearly suggesting a very low genetic diversity within this species. Genetic distance between pairs of the 2,179 accessions varied from 0.005 to 0.306, with 1.5% of the pairs nearly identical, 8.0% of the pairs similar, 78.1% of the pairs moderately distant, and 12.4% of the pairs very distant. Based on the DArTseq genotype data, we created a subset of 350 African rice accessions to represent a panel (mini-core set), which captured 97% of the SNP polymorphism and nearly all allele/genotype frequencies observed in the whole collection. &nbsp;<strong>For more results, please read our open-access research paper from Frontiers in <a href="https://www.frontiersin.org/articles/10.3389/fpls.2017.01748/full" target="_blank" rel="noopener noreferrer">Plant Science</a></strong>.</p>
                
                <h3>Molecular diversity indices</h3>
                <p>Multiple studies compared the extent of genetic variation of African rice using whole-genome sequencing and targeted sequencing of a few genes that have undergone selection <sup><a href="https://www.nature.com/articles/ng.3633" target="_blank" rel="noopener noreferrer">11</a>,<a href="http://sourcedb.ib.cas.cn/cn/ibthesis/201108/P020110825623858269703.pdf" target="_blank" rel="noopener noreferrer">17</a>,<a href="https://pubmed.ncbi.nlm.nih.gov/25064006/" target="_blank" rel="noopener noreferrer">18</a>,<a href="https://pubmed.ncbi.nlm.nih.gov/29983312/" target="_blank" rel="noopener noreferrer">20</a>–<a href="https://nph.onlinelibrary.wiley.com/doi/full/10.1111/nph.14290" target="_blank" rel="noopener noreferrer">23</a></sup> and reported very low genetic variation in African rice as compared to Asian rice and its wild progenitor <em>O. barthii</em>. Results of the gene-based sequencing studies suggest a strong domestication bottleneck, while those of genomewide studies suggested the role of both genetic bottleneck and selective sweeps as the main factors for the lower genetic diversity observed within the cultivated African rice compared to its wild progenitor<a href="https://www.sciencedirect.com/science/article/abs/pii/S0168945208000198" target="_blank" rel="noopener noreferrer"><sup>24</sup></a>. However, all previous studies that compared the extent of nucleotide diversity and the effect of selective sweeps in African rice and <em>O. barthii</em> were based on a small number of accessions, ranging from 9 to 163 and from 10 to 88 samples, respectively.</p>
                <p>Recently<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6449321/" target="_blank" rel="noopener noreferrer"><sup>25</sup></a>, our team characterized 3,245 accessions representing African rice (2,358), Asian rice (772), and the wild <em>O. barthii </em>(115) with 26,073 physically mapped DArTseq-based SNPs. Our analyses revealed a very narrow genetic diversity within African rice than its wild progenitor (<em>O. barthii</em>) and Asian rice. The level of marker polymorphism observed in African rice accounted for 59% and 20-32% of that <em>O. barthii</em> and Asian rice, respectively. Average genetic distance in African rice accounted for 63% and 80% of that of <em>O. barthii</em> and lowland <em>O. sativa</em>, but it was 12% greater than the upland <em>O. sativa</em>. Nucleotide diversity (π) averaged across all SNPs in African rice was 37% and 16-37% of that of <em>O. barthii</em> and Asian rice, respectively. We identified 37 candidate selective sweep regions in African rice that undergone selection during domestication. Each selective sweep harbors from 2 to 92 candidate genes, with some of the genes having known functions, including adaptation to diverse abiotic and biotic stresses. Nucleotide diversity of the African rice estimated from SNPs that fell within the selective sweeps showed a 19-fold reduction in diversity as compared with the values estimated from genomewide SNPs. Overall, our results confirmed the very narrower genetic variation in African rice than the other two species irrespective of marker density and sample size. <strong>For more results, please read our open-access research paper from Theoretical and <a href="https://link.springer.com/article/10.1007/s00122-018-3268-2" target="_blank" rel="noopener noreferrer">Applied Genetics</a></strong>.</p>
                
            </div>
          </div>
        </div>
    </section>

@endsection
    