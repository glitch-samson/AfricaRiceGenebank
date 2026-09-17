@extends('layouts.webtemp') 

@section('titre')
Characterization
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/operation/charslide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Characterization</h2>
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
          <h2>Routine Operations</h2>
          <p>Characterization</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>The use of genebank collections in crop improvement can better be promoted when accessions have been characterized and/evaluated. RBCA characterize thousands of accessions annually during regeneration to assess the genetic variation in morpho-agronomic traits, such as color, tillering, days to flowering and maturity, plant height, leaf characters, floral characters, panicle characters, and seed characters that are described in <a href="https://cropgenebank.sgrp.cgiar.org/index.php/crops-mainmenu-367/rice-mainmenu-304" target="_blank" rel="noopener noreferrer">this link</a>. Morpho-agronomic characterization requires growing representative numbers of plants in the field during a full growing cycle, recording traits that are generally easy to score (measure), highly heritable, usually need only to be scored once in unreplicated environments and expressed across multiple environments. Care should be taken to select sites where the species is adapted, and traits will be expressed. Measurements can be made at the plant level to capture variability among multiple plants of the same accession. However, most accessions (collections) are made up of population or landraces that are genetically variable (heterogeneous). In most cases, therefore, data from at least 10 plants per accession per replication are recorded.</p>
                <p>In some cases, characterization traits, along with the passport data (i) provide an overall idea of phenotypic diversity among accessions in the collections and serves as a prerequisite for promoting germplasm use in crop improvement programs, and (ii) are useful for identifying a subset of accessions with specific traits of interest in crop improvement for further evaluation. However, the current methodology in phenotypic characterization is not only low throughput, very time consuming and costly, but also there are only very limited phenotypic traits, which are not enough to reliably discriminate a large number of accessions available at our genebank. Besides, most traits of interest in breeding are quantitative and highly polygenic, which requires evaluation in multi-location trials.</p>
                    
            </div>
          </div>
        </div>
    </section>

@endsection
    