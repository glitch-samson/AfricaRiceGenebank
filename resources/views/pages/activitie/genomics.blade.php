@extends('layouts.webtemp') 

@section('titre')
Genomics of Genebanks
@endsection



@section('contenu')
    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/activitie/genslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Genomics of Genebanks</h2>
          </div>
        </div>
      </div>
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
          <h2>Research Activities</h2>
          <p>Genomics of Genebanks</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
            <p>The traditional assumption in germplasm conservation is that every accession is equally important, which is primarily due to the technical challenges and costs of determining the extent of genetic variation and uniqueness of accessions that used to be higher than the costs of cold rooms for storage. The availability of low-cost, high-density and high throughput genotyping by sequencing (GBS) and <a href="http://www.diversityarrays.com/dart-application-dartseq" target="_blank" rel="noopener noreferrer">DArTseq</a> &nbsp;technologies are providing genetic resource scientists tremendous opportunities for improving germplasm curation; allele mining and gene discovery; generation of high-density molecular passport data; understanding the genetic profiles of the entire collection; identifying genetically unique accessions (subsets or minicore set) for promoting their use in crop improvement and genetic studies; identifying gaps in the existing collection, and correcting mislabeled and taxonomically misclassified collections.</p>
                <p>Recently, RBCA implemented a pilot molecular characterization study by genotyping about 4,000 rice accessions with 31,739 DArTseq-based single nucleotide polymorphisms (<a href="http://www.diversityarrays.com/dart-application-dartseq" target="_blank" rel="noopener noreferrer">SNPs</a>) . DArTseq generated a smaller number of markers as compared with the initial GBS technology developed at the University of Cornell that produced up to a million SNPs. Nevertheless, the DArTseq genotype data were highly useful for a wide range of purposes, which includes (i) understanding the extent of genetic diversity, population structure and genetic differentiation of the African rice collections as well as for creating a subset for future use in genetics and <a href="https://www.frontiersin.org/articles/10.3389/fpls.2017.01748/full" target="_blank" rel="noopener noreferrer">breeding studies</a><a href="https://pubmed.ncbi.nlm.nih.gov/29093721/" target="_blank" rel="noopener noreferrer"><sup>19</sup></a>; (ii) developing species- and subspecies- diagnostic SNP markers to minimize misclassification, misidentification and mislabeling errors during germplasm acquisition and routine genebank <a href="https://link.springer.com/article/10.1007/s11032-018-0885-z" target="_blank" rel="noopener noreferrer">operations</a><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6208651/" target="_blank" rel="noopener noreferrer"><sup>28</sup></a>; (iii) comparing the extent of molecular diversity indices among three rice species conserved at the AfricaRice genebank and identifying candidate genes in <a href="https://link.springer.com/article/10.1007/s00122-018-3268-2" target="_blank" rel="noopener noreferrer">African rice</a>&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6449321/" target="_blank" rel="noopener noreferrer"><sup>25</sup></a>; and (iv) comparing the extent of genetic variation and&nbsp; relatedness among various improved intraspecific and interspecific rice varieties developed by AfricaRice breeders with varieties developed by other institutions and widely used in <a href="https://www.frontiersin.org/articles/10.3389/fpls.2018.00446/full" target="_blank" rel="noopener noreferrer">Africa</a> <a href="https://www.frontiersin.org/articles/10.3389/fpls.2018.00446/full" target="_blank" rel="noopener noreferrer"><sup>27</sup></a>. Overall, the DArTseq-based molecular characterization of the rice collection was much cheaper and more accurate than the phenotypic characterization.</p>
                <p>Based on the pilot DArTseq data, we have genotyped a total of 9,120 accessions of which 8,381 accessions are publicly available in Genesys. The genotype data along with the phenotype characterization and passport data would be highly useful for creating subsets of the most genetically diverse accessions for each species and subspecies for future evaluation, which ultimately promotes the use of our collection in rice improvement.</p>
                  
              
            </div>
          </div>
        </div>
    </section><!-- /About Section -->

@endsection
    