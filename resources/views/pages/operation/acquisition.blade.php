@extends('layouts.webtemp') 

@section('titre')
Acquisition
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/operation/acqslide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Collection / Acquisition</h2>
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
          <p>Collection / Acquisition</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>Rice belongs to the genus <em>Oryza</em> L. that consists of over <a href="https://archive.gramene.org/species/oryza/rice_taxonomy.html" target="_blank" rel="noopener noreferrer">25 species</a>, but only the African rice (<em>O. glaberrima</em> Steud.) and the Asian rice (<em>O. sativa</em> L.) are the two cultivated species in this genus. The Rice Biodiversity Center for Africa (RBC) holds 21,300 registered <a href="https://www.genesys-pgr.org/" target="_blank" rel="noopener noreferrer">rice samples</a>&nbsp;of which 85% of the collection originated from Africa. This collection represents five African indigenous wild species (<em>O. barthii, O. longistaminata, O. eichingery, O. punctate, </em>and<em> O. branchyata</em>), as well as both modern and traditional varieties of African rice and Asian rice. The African rice accounts for approximately 17% of the collection conserved at our genebank.</p>
                <p>The germplasm was either directly collected by the AfricaRice since the 1970s or received through donations. The major rice germplasm donors include various National Agricultural Research Systems (NARS) in Africa, the Office de la Recherche Scientifique et Technique d’Outre-Mer (ORSTOM), the Institut de Recherches Agronomiques Tropicales (IRAT), the International Institute for Tropical Agriculture (<a href="https://www.iita.org/" target="_blank" rel="noopener noreferrer">IITA</a>), and the International Center for Tropical Agriculture (<a href="https://ciat.cgiar.org/" target="_blank" rel="noopener noreferrer">CIAT</a>). All material introduced into the genebank was acquired in compliance with applicable national and international laws and other applicable policies.</p>

            </div>
          </div>
        </div>
    </section>

@endsection
    