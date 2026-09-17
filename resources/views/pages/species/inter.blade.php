@extends('layouts.webtemp') 

@section('titre')
Interspecifics
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/species/inter/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Interspecific genotypes</h2>
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
            <p>Interspecific genotypes</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>To combine traits of economic importance from both the Asian and the African rice, interspecific breeding programs were initiated by the AfricaRice breeders in the early 1990s. Using African rice as donor parents and Asian rice as recurrent parents, AfricaRice and NARS breeders developed various improved interspecific rice varieties via backcrossing, which have been nominated and/or released as New Rice for Africa (NERICAs). NERICAs are adapted to upland, irrigated lowland or rainfed lowland ecologies, and combined the high yield potential from the Asian rice and resistance to abiotic and biotic stresses from the African rice<a href="https://link.springer.com/article/10.1023%2FA%3A1002969932224" target="_blank" rel="noopener noreferrer"><sup>26</sup></a>. Currently, interspecific genotypes and varieties account for ~3% of the AfricaRice genebank collection.</p>
                <p>Due to shared parentage among multiple NERICAs, there has been a concern about the extent of genetic differences among the released NERICA varieties<a href="https://journals.sagepub.com/doi/abs/10.5367/000000008785915449" target="_blank" rel="noopener noreferrer"><sup>29</sup></a>. Through an effort named the Africa-wide Rice Breeding Task Force (ARBTF), several ARICA (Advanced RICe for Africa) varieties were recently released, including 18 ARICA varieties developed from intraspecific crosses between Asian rice parents (16 ARICAs) and two interspecific ARICA varieties (ARICA 4 and ARICA 18; http://www.africarice.org/warda/ARICA.asp). Recently, our group compared the genetic variation and relatedness of 11 ARICA and 85 NERICA genotypes developed by AfricaRice breeders with those widely used <em>O. sativa</em> spp. japonica (62) and <em>O. sativa</em> spp. indica (172) genotypes using 15,020 polymorphic DArTseq-based SNPs. The proportions of pairs of genotypes with a large genetic difference (&gt;0.400) were the largest within NERICAs (35% of the pairs), followed by ARICAs (18%), japonica (17%), and indica (6%). However, about 9% of the NERICA were highly similar as compared with just 1% within pairs of indica, 3% within pairs of japonica, and none within pairs of ARICA. Groups of closely related parents tend to bring redundant genetic value to a breeding program, which was evident in multiple NERICAs due to the repeated use of a few parents<a href="https://www.frontiersin.org/articles/10.3389/fpls.2018.00446/full" target="_blank" rel="noopener noreferrer"><sup>27</sup></a>, which was not the case in ARICAs. <strong>For more results, please read our open-access research paper from Frontiers in <a href="https://www.frontiersin.org/articles/10.3389/fpls.2018.00446/full" target="_blank" rel="noopener noreferrer">Plant Science&nbsp;</a></strong>.</p>

            </div>
          </div>
        </div>
    </section>

@endsection
    