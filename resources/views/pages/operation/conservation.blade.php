@extends('layouts.webtemp') 

@section('titre')
Conservation
@endsection



@section('contenu')

    

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/operation/conservation/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Conservation</h2>
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
          <p>Conservation</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>For self-pollinating and seed propagated crops, such as rice, seed banks are the simplest and most cost-effective conservation methods. Seed banks refer to <em>ex situ </em>conservation of seeds in cold rooms under controlled conditions that maintain seed viability over prolonged periods. The longevity of seeds depends not only on the initial seed quality and seed moisture content but also on temperature and relative humidity of the cold rooms used for storage. Depending on the type of collection (working collection, active collection, or base collection), the Biodiversity Center for Africa conserves rice seeds under short-term storage (STS), medium-term storage (MTS), and long-term storage (LTS) conditions. Working collections are maintained in a drying room at a temperature of 15-19 ºC and relative humidity (RH) of 14-18%. The short-term storage is used to temporarily hold seeds while they are dried and prepared for medium- and long-term storage. Seeds of active collections (i.e., germplasm maintained for ready distribution) are dried to a moisture content of about 6% and conserved in medium-term storage at 2-5 °C temperature and 35% RH. However, RH can be as high as 60-80% depending on the manufacturer. For long-term storage in freezer rooms (from -21 to -16 ºC temperature), seeds of the base collections are dried to a seed moisture content of 6% and hermetically sealed in aluminum foil packets (containers). Our medium-term and long-term storage rooms are equipped with a proper monitoring system (to warn of changes in temperature and relative humidity) and firefighting equipment and backup power supply (generator).</p>
                <p>The rice collection has been conserved in trust for humanity through an agreement with the International Treaty on Plant Genetic Resources for Food and Agriculture (<a href="http://www.fao.org/plant-treaty/en/" target="_blank" rel="noopener noreferrer">ITPGRFA</a>), under the auspices of the Food and Agriculture Organization of the United Nations (FAO).</p>
                <p>To ensure the quality of the germplasm in the genebank, every accession should be tested and monitored both at the start and during conservation. Germplasm testing is, therefore, one of the critical components of genebank operations, which comprised of the following: (a) testing the health status of seeds for a range of common seed-borne or systemic pathogens (fungi, bacteria, viruses, and insects) that may not be easily recognized during seed acquisition or regeneration; (b) seed germination rate testing (fresh and old seeds); and (c) regular seed viability monitoring during storage in cold rooms.</p>
                <p>The viability of seeds stored in a genebank is expected to gradually decrease during storage. The Biodiversity Center for Africa monitor seed viability every 5 years for active collections in medium-term storage and every 10 years for base collection in long-term storage conditions. Seed quantity of active and base collections are also monitored at regular intervals and regenerated when necessary following standard operating procedures to ensure the genetic integrity of the original accessions.</p>

            </div>
            <div class="col-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src="{{asset('files/img/operation/conservation/1.jpg')}}" alt="" class="rounded-2 img-fluid">
              <img src="{{asset('files/img/operation/conservation/2.jpg')}}" alt="" class="rounded-2 img-fluid my-3">
              <img src="{{asset('files/img/operation/conservation/3.jpg')}}" alt="" class="rounded-2 img-fluid">
            </div>
          </div>
        </div>
    </section>

@endsection
    