@extends('layouts.webtemp') 

@section('titre')
Characterization data
@endsection



@section('contenu')
    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/data/charslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Characterization data</h2>
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
          <h2>Data</h2>
          <p>Characterization data</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>Since 2010, the Rice Biodiversity Center for Africa characterized nearly 9,000 accessions with 23 phenotypic <a href="https://cropgenebank.sgrp.cgiar.org/images/file/learning_space/descriptors_rice.pdf" target="_blank" rel="noopener noreferrer">descriptors</a> in unreplicated field experiments and 28 &nbsp;grain physical, milling, cooking, and eating quality traits in a Grain Laboratory. In addition, a smaller set of 1,728 accessions (primarily O. glaberrima) were characterization for early morning flowering (EMF) trait by Dr. R. Venuprasad. The characterization datasets, along with the passport data, provide valuable information to genebank users, notably breeders and geneticists, to select accessions with combinations of traits of interest prior to requesting seeds for their breeding and research programs. Our datasets are useful for identifying subsets of accessions with specific traits of interest for further evaluation. However, the datasets should be used as indicative of the potential performance of each accession, which may not be accurate due to our use of a single replication and a single environment for characterization.</p>
                <p><strong>The entire phenotype characterization datasets can be downloaded from <a href="https://www.genesys-pgr.org/datasets/v2OkQW9jEGA" target="_blank" rel="noopener noreferrer">Genesys</a></strong>. In case the former link does not work, please go to <a href="https://www.genesys-pgr.org/" target="_blank" rel="noopener noreferrer">Genesys</a>, select “C&amp;E Datasets”, select “Africa Rice Center” under “Data provider” on the left side of the screen, followed by “Apply Filter”, and finally select the “Dataset” tab from the top menu.</p>
                   
            </div>
          </div>
        </div>
    </section>

@endsection
    