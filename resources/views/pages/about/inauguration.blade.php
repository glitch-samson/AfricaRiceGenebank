@extends('layouts.webtemp') 

@section('titre')
Inauguration
@endsection



@section('contenu')

    <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <div class="carousel-inner" role="listbox">

            <div class="carousel-item active" style="background-image: url({{asset('files/img/about/inauguration/slide1.jpg')}});">
            </div>

            <div class="carousel-item" style="background-image: url({{asset('files/img/about/inauguration/slide2.jpg')}});">
            </div>


        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        </div>
    </section>

    <section id="hero" class="hero section dark-background">

        <div id="hero-carousel" data-bs-interval="5000" class="container-fluid carousel carousel-fade" data-bs-ride="carousel">

          <!-- Slide 1 -->
          <div class="carousel-item active" style="background-image: url({{asset('files/img/about/inauguration/slide1.jpg')}}); background-size: cover;">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">INAUGURATION</h2>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item" style="background-image: url({{asset('files/img/about/inauguration/slide2.jpg')}}); background-size: cover;">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">INAUGURATION</h2>
            </div>
          </div>

          <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

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

      </section><!-- /Hero Section -->


    <section id="about" class="about section pb-0">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>Inauguration</p>
        </div><!-- End Section Title -->
        <div class="container" data-aos="fade-up">
          <div class="row content g-4 align-items-center">
            <div class="col-lg-10" data-aos="fade-right" style="text-align: justify">
              <p>The Rice Biodiversity Center for Africa (RBCA) was officially inaugurated by the Minister of Higher Education and Scientific Research in Côte d’Ivoire, Dr Abdallah Toikeusse Mabri, in the presence of the Minister for the Promotion of Rice, Mr Gaoussou Touré, on 21 February 2020, at the AfricaRice Research Station in M’bé near Bouaké, Côte d’Ivoire.</p>
              <p>Describing the RBCA as a vital tool for African countries to boost their rice sector, Dr Mabri thanked the donors – the African Development Bank, the CGIAR Genebank Platform, the Global Crop Diversity Trust and AfricaRice member countries – for their strong support to AfricaRice in the establishment of the center in Côte d’Ivoire.</p>
              <p>Representatives from AfricaRice Board and international and national partners attended the ceremony. The occasion was also graced by the presence of local government representatives and traditional chiefs from villages around the AfricaRice station in M’bé.</p>
              <p>A major component of the RBCA is its new state-of-the-art genebank, which holds the largest collection of African rice in the world and the largest rice collection in Africa, with almost 21,035 accessions under long-term storage in trust for humanity and in accordance with the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA).</p>
              <p>The genebank of the RBCA is one of the 11 international genebanks of the CGIAR System Organization. The genebank manages the rice genetic resources, including modern rice cultivars, traditional varieties and related wild species in Africa, entrusted to it by African countries.</p>
              <p>These genetic resources are used to develop improved rice varieties adapted to African agro-ecologies. They contribute significantly to feeding the growing African population in the face of fast-changing environmental conditions and emerging challenges, especially climate change.</p>
              <p>The RBCA will serve as a center for education to raise awareness on the need for safeguarding rice diversity, the role of rice in food security and the importance of farmers as saviors of traditional rice varieties and rice customs and traditions in Africa. Its doors will be open to visitors including research scientists, farmers, youths and all categories of rice stakeholders.</p>
              <p>The RBCA is a valuable research, educational and cultural asset for the entire world and for Africa in particular. It constitutes a pillar in the realization of the global objectives of food and nutrition security and poverty reduction.</p>
              
            </div>
            </div>

        </div>
    </section>

        


@endsection
    