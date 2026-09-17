@extends('layouts.webtemp') 

@section('titre')
Database management
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/operation/dataslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Database management</h2>
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
          <p>Database management</p>
        </div><!-- End Section Title -->
        <div class="container" data-aos="fade-up">
            <div class="row content g-5 align-items-center">
            <div class="col-lg-8" data-aos="fade-right" style="text-align: justify">
                    <p>The complex processes of managing genebank collections are supported by the Genebank Information Management System (or database management or databases and access to information). It refers to the documentation, capture, custodianship protection, and accessibility of all genebank related activities and knowledge, including databases, web sites, metadata, software, information technology configuration, images, video, assets, infrastructure, reports, policies, and procedures (protocols) associated with the genebank and its accessions. The availability of well-organized and functional information management increases genebank’s operational efficiency, improve services, facilitates information sharing, and identifying appropriate germplasm for breeding.</p>
                    <p>Such a database should be easy to use, interactive and searchable to assist germplasm users in requesting plant material Online, downloading characterization and/or evaluation data, providing feedback, etc. If the information on every conserved accession is made easily available and accessible, it will not only enhance germplasm use but also help the genebank curators to better plan multiplication and regeneration to keep adequate stocks of their accessions.</p>
                    <p><a href="https://www.genesys-pgr.org/welcome">Genesys</a> <strong>&nbsp;is </strong>a global portal to information about Plant Genetic Resources for Food and Agriculture (PGRFA) and serves no as a gateway for searching germplasm collection around the world. <a href="https://www.grin-global.org/" target="_blank" rel="noopener noreferrer">GRIN-Global</a> &nbsp;has been available without cost to all genebanks but it lacks flexibility and requires major investment to adapt the software to individual genebank’s. Nevertheless, a consensus has been reached across all CGIAR genebanks to adopt GRIN-Global as the primary database not only for documenting all information of every collection for internal use but also for users to search and request germplasm online.</p>

            </div>
            <div class="col-lg-3 pt-4 pt-lg-0" data-aos="fade-left">
                <img src="{{asset('files/img/operation/data1.jpg')}}" alt="" class="rounded-2 img-fluid">
                <img src="{{asset('files/img/operation/data2.jpg')}}" alt="" class="rounded-2 img-fluid mt-3">
            </div>
            </div>
        </div>

    </section>

@endsection
    