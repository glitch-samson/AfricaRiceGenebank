@extends('layouts.webtemp') 

@section('titre')
Home
@endsection



@section('contenu')

    <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <div class="carousel-inner" role="listbox">

            <!-- Slide 1 -->
            <div class="carousel-item active" style="background-image: url({{asset('files/img/home/slide1.jpg')}});">
            <div class="carousel-container">
                <div class="carousel-content animate__animated animate__fadeInUp text-center">
                <h2><span>RICE BIODIVERSITY CENTER FOR AFRICA</span></h2>
                </div>
            </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item" style="background-image: url({{asset('files/img/publication/bkslide2.jpg')}});">
              <div class="carousel-container">
                <div class="carousel-content animate__animated animate__fadeInUp">
                  <h2>New publication: Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources</h2>
                  <p>In this chapter, authors review the actual and potential applications of genomics in advancing seed bank-based ex situ conservation and utilization of plant genetic resources.
                    These Genomic tools are supporting germplasm acquisition efforts through conservation gap analysis and enabling the identification of rare, threatened, and novel genetic resources that need to be prioritized for conservation…</p>
                  <div class="text-center"><a href="{{route('book')}}" class="btn-get-started">Read More</a></div>
                </div>
              </div>
            </div>
            <div class="carousel-item" style="background-image: url({{asset('files/img/home/slide2.jpg')}});">
            </div>

            <!-- Slide 3 -->
            <div class="carousel-item" style="background-image: url({{asset('files/img/home/slide3.jpg')}});">
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

    <main id="main">

        <section id="about-us" class="about-us">
        <div class="container" data-aos="fade-up">

            <div class="row content g-4 align-items-center">
            <div class="col-lg-8" data-aos="fade-right" style="text-align: justify">
                <h2>Background</h2>
                <p>
                    The Rice Biodiversity Center for Africa (RBCA) holds the largest collection of African rice in the world and 
                    the largest rice collection in Africa with almost 22,000 accessions in an ultra-modern infrastructure. 
                    The facility has the capacity to conserve under optimal conditions, up to 60,000 rice accessions. 
                    The rice genetic resources housed in RBCA are key to developing new varieties adapted to African agro-ecologies.
                </p>
                <h3>Vision</h3>
                <p>
                    The vision of the RBCA is to provide leadership and scientific expertise in the collection, conservation, 
                    management, and sustainable use of the rice genetic resources in Africa for research, breeding, and education.
                </p>
                <h3>Mission</h3>
                <p>
                    The overall mission is to increase the productivity and profitability of the rice sector in Africa by conserving, 
                    securing, analyzing, and making unique rice genetic diversity available for breeding to develop higher-yielding and 
                    climate-resilient varieties with preferred end-use quality traits in sub-Saharan Africa.
                </p>
                <h3>Mandates of the RBCA include</h3>
                <p>
                    <ul>
                        <li><i class="ri-check-double-line"></i>(i)  managing routine genebank operations in accordance with the CGIAR genebank’s performance targets on germplasm availability, germplasm distribution, safety backup, passport data completeness index (PDCI), and quality management system (QMS); </li>
                        <li><i class="ri-check-double-line"></i>(ii) conducting scientific studies using rice genetic resources on gene discovery, donor identification to promote germplasm use; </li>
                        <li><i class="ri-check-double-line"></i>(iii) serving as a showcase of and raising public awareness on rice biodiversity; </li>
                        <li><i class="ri-check-double-line"></i>(iv) sharing resources, knowledge, and expertise with the national genebanks in Africa to advance scientific research in the continent; and  </li>
                        <li><i class="ri-check-double-line"></i>(v) promoting collection and conservation of rice biodiversity in Africa.</li>
                    </ul>
                </p>
            </div>
            <div class="col-lg-4 pt-4 pt-lg-0" data-aos="fade-left">
                <a href="{{route('req')}}"><img src="{{asset('files/img/home/germplasm.jpg')}}" alt="" class="img-fluid"></a>
            </div>
            </div>

        </div>
        <div class="container mt-3" data-aos="fade-up">

            <div class="row g-4">
                <div class="col-md-4">
                    <h4 class="text-success">Oryza Sativa pictures</h4>
                    <div id="sativaslide" class="carousel slide carousel-fade">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#sativaslide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#sativaslide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#sativaslide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="{{asset('files/img/home/sativa1.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/sativa2.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/sativa3.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#sativaslide" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#sativaslide" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <h4 class="text-success">Oryza Glaberrima pictures</h4>
                    <div id="glaslide" class="carousel slide carousel-fade">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#glaslide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#glaslide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#glaslide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#glaslide" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="{{asset('files/img/home/glaberrima1.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/glaberrima2.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/glaberrima3.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/glaberrima4.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#glaslide" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#glaslide" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <h4 class="text-success">Oryza Wilds pictures</h4>
                    <div id="wildslide" class="carousel slide carousel-fade">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#wildslide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#wildslide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#wildslide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#wildslide" data-bs-slide-to="3" aria-label="Slide 4"></button>
                          <button type="button" data-bs-target="#wildslide" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="{{asset('files/img/home/oryza1.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/oryza2.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/oryza3.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/oryza4.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="{{asset('files/img/home/oryza5.jpg')}}" class="d-block w-100" alt="...">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#wildslide" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#wildslide" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>

        


    </main>

@endsection
    