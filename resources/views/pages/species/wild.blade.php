@extends('layouts.webtemp') 

@section('titre')
Wild Relatives
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/species/wild/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Wild Relatives</h2>
          </div>
        </div>
        <!-- Slide 1 -->
        <div class="carousel-item" style="background-image: url({{asset('files/img/species/wild/slide2.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Species</h2>
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
            <p>Wild Relatives</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>Although the AfricaRice genebank holds five wild species (<em>O. longistaminata</em>, <em>O. barthii</em>, <em>O. punctata</em>, <em>O. brachyantha</em> and <em>O. eichingeri</em>), these wild species altogether account just 1% of the total collection. The wild rice species have been extensively reported as sources of resistance to various biotic stresses (diseases and insects pests) and tolerance to abiotic stresses (e.g., drought, heat, salinity, desiccation, waterlogging, and cold)<sup><a href="https://www.springer.com/gp/book/9783319719962" target="_blank" rel="noopener noreferrer">30</a>,<a href="https://academic.oup.com/bfg/article/17/3/198/4982565" target="_blank" rel="noopener noreferrer">31</a></sup>. However, each wild rice species is represented by a few accessions ranging between 1 and 130 accessions, which indicates the immediate need for acquiring more accessions. Delayed action may result in a high risk of losing them due to a rapid climate change in the continent. To get an insight into the possible occurrence of each wild species, we downloaded the passport data of herbaria voucher specimens from the Global Biodiversity Information Facility (<a href="https://www.gbif.org" target="_blank" rel="noopener noreferrer">GBIF</a>) and developed 3D maps. The maps clearly showed multiple African countries that can be considered for new collecting missions. For example, the Democratic Republic of the Congo, Central African Republic, Tanzania, Uganda, Zambia, South Africa, &nbsp;Chad, Côte d’Ivoire, Cameroon, Ghana, Guinea, Mali, and Niger have been represented by various herbaria voucher specimens of at least four of the wild species.</p>

            </div>
          </div>
        </div>
    </section>

@endsection
    