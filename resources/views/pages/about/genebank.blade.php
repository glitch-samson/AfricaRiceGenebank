@extends('layouts.webtemp') 

@section('titre')
About the genebank
@endsection



@section('contenu')
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/about/genebank/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">GENEBANK</h2>
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
          <h2>About</h2>
          <p>The genebank</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>Africa is one of the most vulnerable continents to climate change, which would have a severe consequence on lives and sustainable 
                    development prospects in the continent. The impacts of climate change are multifold, including a rapid decline in genetic diversity, 
                    an increase in abiotic and biotic stresses, and changing climatic and environmental conditions. Genetic variation is rapidly declining, 
                    necessitating its conservation before it is lost forever, which is especially true in various parts of Africa that are at most risk 
                    to <a href="https://robertscribbler.com/tag/climate-change-middle-east/" target="_blank" rel="noopener noreferrer">climate change</a>. 
                    The development of improved varieties that can cope with emerging abiotic and biotic stresses is a critical component to adapt to climate 
                    change and improve food and nutrition security. Hence, breeders need access to broad genetic base germplasm of diverse geographical origin 
                    collected beyond their borders. For such purpose, all countries and all regions have become highly interdependent on germplasm exchange, 
                    which is expected to increase to cope with the effect of climate change. No country is self-sufficient in germplasm for breeding, research, 
                    and training.</p>
                <p>
                    Rice is the second-largest crop in total global production and feeds more people than any other crop. In Africa, rice is a staple food for millions
                    of people and constitutes a major part of the diet in the continent. The Rice Biodiversity Center for Africa (RBCA) is mandated in the 
                    collection/acquisition of a wide range of rice germplasm (wild accessions, landraces, traditional/farmer varieties, new and old improved varieties) 
                    in Africa as well as their <em>ex situ</em> conservation, safety duplication (safety backup), monitoring, regeneration, characterization, data 
                    management, and distribution to the global rice community for use in breeding, research, and education. Currently, RBCA holds the third-largest 
                    rice collection globally and the largest collection in Africa. The International Rice Research Institute (<a href="https://www.irri.org/" 
                    target="_blank" rel="noopener noreferrer">IRRI</a>) in the Philippines and the Dale Bumpers National Rice Research Center in the USA conserve the 
                    largest and second-largest global collection of <a href="https://www.genesys-pgr.org/" target="_blank" rel="noopener noreferrer">rice germplasm</a>. 
                    Furthermore, RBC is actively working in developing subsets of accessions that capture most of the genetic variation of each species/sub-species to 
                    promote their use in breeding and research as well as evaluating them for diverse phenotypic traits under field conditions and grain characteristics 
                    under laboratories.
                </p>
              
            </div>
          </div>
        </div>
      </section><!-- /About Section -->


@endsection
    