@extends('layouts.webtemp') 

@section('titre')
Asian rice
@endsection



@section('contenu')


    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/species/asian/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Asian rice</h2>
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
          <h2>Species</h2>
          <p>Asian rice</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>The Asian rice&nbsp; &nbsp;(<em>Oryza sativa</em> L.) accounts for ~79% of the collection conserved at the RBCA, which includes ~ 49% of indica and ~ 30% of japonica. Most of the African sativa &nbsp;accessions originated within Africa. The Asian rice was probably introduced first into West Africa at the beginning of the 16<sup>th</sup> century and adopted by farmers living in the Upper Guinea Coast who had previous experience in growing the African rice<a href="https://www.pnas.org/content/99/25/16360" target="_blank" rel="noopener noreferrer"><sup>2</sup></a>. However, most African sativa varieties have limited resistance/tolerance to locally endemic abiotic and biotic stresses in Africa<a href="https://link.springer.com/article/10.1023%2FA%3A1002969932224" target="_blank" rel="noopener noreferrer"><sup>26</sup></a>. The African sativa has been extensively studied by various researchers and some of the publications have been cited in our recent studies<sup><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6449321/" target="_blank" rel="noopener noreferrer">25</a>,<a href="https://www.frontiersin.org/articles/10.3389/fpls.2018.00446/full" target="_blank" rel="noopener noreferrer">27</a>,<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6208651/" target="_blank" rel="noopener noreferrer">28</a></sup>.</p>

            </div>
          </div>
        </div>
    </section>

@endsection
    