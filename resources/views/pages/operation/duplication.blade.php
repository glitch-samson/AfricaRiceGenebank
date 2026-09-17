@extends('layouts.webtemp') 

@section('titre')
Safety duplication
@endsection


@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/operation/duplslide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Safety duplication</h2>
          </div>
        </div>
        <div class="carousel-item" style="background-image: url({{asset('files/img/operation/duplslide2.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Safety duplication</h2>
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
          <h2>Routine Operations</h2>
          <p>Safety duplication</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>A safety duplication (safety backup) is required to mitigate the risk of a partial or total loss of germplasm caused by natural or man-made catastrophes. The safety duplicates are genetically identical to the base collection in long-term storage, but deposited at a different location, usually&nbsp;in another&nbsp;country to minimize possible risks. Safety duplication is generally under a ‘black-box’ approach so that the repository genebank has no entitlement on the use and distribution of the germplasm. It is the depositor’s responsibility to monitor seed viability over time and to use the base collection to regenerate the collections when they begin to lose viability. The safety duplication is only returned on request when the base collection is lost or destroyed.</p>
                <p>Some general principles for safety duplications include (i) maintaining at least one duplicate of each accession as a safety backup; (ii) selecting a location with a suitable environment, good security, and low risk; (iii) minimizing costs for maintaining the safety duplication; (iv) conserving germplasm that is clean and healthy with sufficient seed quantity to conduct at least three regenerations; (v) packaging the safety duplicates in strong and cold-resistant containers/boxes (thick carton or polypropylene box sealed properly).</p>
                <p>The Rice Biodiversity Center for Africa conserved its safety duplication at two distant locations.&nbsp; The National Center for Genetic Resource Preservation (NCGRP) in Fort Collins, Colorado, USA is the primary safety duplication site.&nbsp; The secondary safety duplication is maintained at Svalbard Global Seed Vault (SGSV), which is in the remote Arctic Svalbard Archipelago, Norway. In both cases, legal agreements have been drawn between AfricaRice and the repository genebanks of the safety duplicates. The deposited materials are legally under the administration of the AfricaRice and the safety repository genebanks do not have access to the materials without permission from the depositor. It is AfricaRice’s responsibility to ensure that the deposited material is of high quality, to monitor seed viability over time, and to use the base collection to regenerate the safety duplicate collections when they begin to lose viability.</p>
                    
            </div>
          </div>
        </div>
    </section>

@endsection
    