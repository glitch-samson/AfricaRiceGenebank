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
                <h2>Welcome to the Rice Biodiversity Center for Africa (RBCA)</h2>
                <p>
                  Nestled at the forefront of agricultural innovation, the Rice Biodiversity Center for Africa (RBCA) is a beacon of excellence, housing the most extensive collection of African rice in the world and the largest rice genetic repository on the continent. With a remarkable inventory of nearly 22,000 accessions, our state-of-the-art facility is equipped to preserve and safeguard up to 60,000 rice varieties under optimal conditions. This invaluable genetic treasure is a cornerstone for developing the next generation of resilient and high-yielding rice varieties, uniquely adapted to the diverse agro-ecological zones of Africa.
                </p>
                <h3>Our Vision</h3>
                <p>
                  We envision a future where the RBCA stands as a global leader in the collection, conservation, management, and sustainable utilization of rice genetic resources. Through our dedication to research, breeding, and education, we aim to empower Africa's agricultural sector, fostering innovations that enhance food security and bolster the resilience of farming communities.
                </p>
                <h3>Our Mission</h3>
                <p>
                  Our mission is clear: to catalyze the growth and prosperity of the rice sector in Africa. We achieve this by conserving and securing a wealth of rice genetic diversity, making these resources accessible for breeding programs across the continent. By harnessing the genetic potential of African rice, we support the development of high-performing, climate-resilient varieties that meet the region’s unique agricultural needs and consumer preferences.
                </p>
                <h3>What We Do</h3>
                <p>
                  RBCA’s mandates go beyond simple conservation—we are stewards of Africa’s rich rice biodiversity and champions of sustainable agricultural practices. Our core activities include:
                  <ol>
                    <li><b>Managing Genebank Operations: </b>We meticulously maintain our germplasm collections, adhering to the highest standards set by the CGIAR genebank’s performance targets. This includes ensuring the availability of germplasm, distributing samples for research, maintaining safety backups, and continuously improving data quality and management systems.</li>
                    <li><b>Driving Scientific Research and Innovation: </b>We harness the genetic potential of our collections through cutting-edge research. Our scientific endeavors focus on gene discovery and donor identification, bridging the gap between genetic resources and their practical applications in breeding programs.</li>
                    <li><b>Showcasing Biodiversity and Raising Awareness: </b>As custodians of Africa’s rice heritage, we serve as a vibrant hub for promoting rice biodiversity. We raise awareness on the importance of conserving this precious resource and its critical role in food security.</li>
                    <li><b>Fostering Collaboration and Knowledge Sharing: </b>We collaborate closely with national genebanks across Africa, sharing our resources, knowledge, and expertise. By nurturing these partnerships, we advance scientific research and strengthen the continent’s capacity to manage and utilize rice genetic resources.</li>
                    <li><b>Promoting the Conservation of African Rice: </b>Our efforts extend to the collection and conservation of wild and cultivated rice species across Africa. We aim to ensure that this rich genetic diversity is preserved for future generations and utilized to its fullest potential.</li>
                  </ol>  
                  At the RBCA, we are not just preserving the past; we are unlocking the future of rice cultivation in Africa. Join us in our mission to harness the potential of African rice for a prosperous, food-secure continent.
                  
                </p>
            </div>
            <div class="col-lg-4 pt-4 pt-lg-0" data-aos="fade-up">
              <div class="row g-4">
                <div class="col-12 mb-4">
                  <a href="{{route('req')}}"><img src="{{asset('files/img/home/germplasm.jpg')}}" alt="" class="img-fluid"></a>
                </div>
                <div class="col-12">
                    <h4 class="text-success">Oryza Sativa pictures</h4>
                    <div id="sativaslide" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active"><img src="{{asset('files/img/home/sativa1.jpg')}}" class="d-block w-100"></div>
                        <div class="carousel-item"><img src="{{asset('files/img/home/sativa2.jpg')}}" class="d-block w-100"></div>
                        <div class="carousel-item"><img src="{{asset('files/img/home/sativa3.jpg')}}" class="d-block w-100"></div>
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
                <div class="col-12">
                    <h4 class="text-success">Oryza Glaberrima pictures</h4>
                    <div id="glaberrimaslide" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000"><img src="{{asset('files/img/home/glaberrima1.jpg')}}" class="d-block w-100"></div>
                        <div class="carousel-item" data-bs-interval="3000"><img src="{{asset('files/img/home/glaberrima2.jpg')}}" class="d-block w-100"></div>
                        <div class="carousel-item" data-bs-interval="3000"><img src="{{asset('files/img/home/glaberrima3.jpg')}}" class="d-block w-100"></div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#glaberrimaslide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#glaberrimaslide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                </div>
                <div class="col-12">
                    <h4 class="text-success">Oryza Wilds pictures</h4>
                    <div id="oryzaslide" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3500"><img src="{{asset('files/img/home/oryza1.jpg')}}" class="d-block w-100"></div>
                        <div class="carousel-item" data-bs-interval="3500"><img src="{{asset('files/img/home/oryza2.jpg')}}" class="d-block w-100"></div>
                        <div class="carousel-item" data-bs-interval="3500"><img src="{{asset('files/img/home/oryza3.jpg')}}" class="d-block w-100"></div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#oryzaslide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#oryzaslide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                </div>
              </div>
                
            </div>
            </div>

        </div>
        </section>

        


    </main>

@endsection
    