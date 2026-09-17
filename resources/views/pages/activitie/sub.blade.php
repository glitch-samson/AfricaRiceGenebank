@extends('layouts.webtemp') 

@section('titre')
Sub-setting
@endsection



@section('contenu')
    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/activitie/qcaslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Sub-setting</h2>
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
          <p>Sub-setting</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>Plant breeders are the major users of germplasm collections, but they are only interested in a small fraction of the entire collection that is reported to have desirable traits for its immediate use in crop improvement. Thus, the use of genebank collections in crop improvement can better be promoted when accessions have as complete passport data as possible and have been characterized using phenotypic traits and high-density molecular markers (genomics of genebanks). For each species, subsets of the most genetically diverse accessions are then created based on passport data, phenotypic characterization, and/or molecular characterization data. A systematic and detailed evaluation of large germplasm collections is extremely time-consuming, costly, requires a team of multidisciplinary expertise, availability of specific evaluation conditions, etc. Evaluation of germplasm collection is feasible only on a smaller subset of superior accessions (genotypes). For those reasons, we developed multiple subsets of <a href="https://www.genesys-pgr.org/subsets/v2r8GGVmq7k" target="_blank" rel="noopener noreferrer">accessions</a> &nbsp;based on (1) our germplasm distribution database across 24 years (three subsets); (2) phenotype characterization (one set), (3) high-density molecular characterization (two subsets), and (4) phenotype evaluation data from publications or literature search (four subsets). The multiple subsets of accessions that we created would serve as a panel for detailed phenotypic evaluation under abiotic and biotic stresses for trait donor identification and for mapping genes and quantitative trait loci (QTLs) that control a wide range of traits of interest in breeding. The use of molecular markers in breeding depends on reliable identification of a subset of markers associated with one or more genes and major effect QTLs that regulate the expression of traits of economic importance.</p>
                <p>Both trait donor selection and mapping require reliable phenotype data collected under field and controlled conditions (e.g., greenhouses) and also under laboratories for grain quality traits. Rice grain quality characteristics are major determinants of market price and include milling, physical appearance, cooking, sensory, palatability, and nutritional value<a href="https://pubmed.ncbi.nlm.nih.gov/31787805/" target="_blank" rel="noopener noreferrer"><sup>41</sup></a>. A better understanding of the factors that control these quality characteristics will be useful for developing new breeding strategies. We are currently evaluating the subset under laboratory conditions for multiple grain quality characters and under field conditions for agronomics traits, grain yield potential and resistance to leaf blast.</p>
                    
            </div>
          </div>
        </div>
    </section>

@endsection
    