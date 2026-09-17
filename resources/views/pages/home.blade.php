@extends('layouts.webtemp')

@section('titre')
Home
@endsection

@section('contenu')

    <main id="main">

      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">

        <div id="hero-carousel" data-bs-interval="5000" class="container-fluid carousel carousel-fade" data-bs-ride="carousel">

          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">Welcome to the Dr. Monty P. Jones Rice Biodiversity Center for Africa</h2>
              <p  class="animate__animated animate__fadeInUp">Nestled at the forefront of agricultural innovation, the Rice Biodiversity Center for Africa (RBCA) is a beacon of excellence, housing the most extensive collection of African rice in the world and the largest rice genetic repository on the continent. With a remarkable inventory of nearly 22,000 accessions, our state-of-the-art facility is equipped to preserve and safeguard up to 60,000 rice varieties under optimal conditions. This invaluable genetic treasure is a cornerstone for developing the next generation of resilient and high-yielding rice varieties, uniquely adapted to the diverse agro-ecological zones of Africa.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Get start</a>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">New publication: <span>Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources</span></h2>
              <p class="animate__animated animate__fadeInUp">In this chapter, authors review the actual and potential applications of genomics in advancing seed bank-based ex situ conservation and utilization of plant genetic resources.
              These Genomic tools are supporting germplasm acquisition efforts through conservation gap analysis and enabling the identification of rare, threatened, and novel genetic resources that need to be prioritized for conservation…</p>
              <a href="{{route('book')}}" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
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
      <!-- About Section -->
      <section id="call-to-action" class="call-to-action section dark-background">
        <div class="container">
          <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-12">
              <img src="{{asset('files/img/pub/pub1.jpeg')}}" alt="" class="w-100 rounded-2">
            </div>
          </div>
        </div>
      </section><!-- /Call To Action Section -->
      <section id="about" class="about section pb-0">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>Who we are</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <p>
              The Rice Biodiversity Center for Africa (RBCA) is one of the 11 international CGIAR genebanks, which operates within the framework of the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA).
              </p>
              <ul>
                <li><i class="bi bi-check2-circle"></i> <span>AfricaRice is unique in representing an association of 28 African countries, on whose behalf it conserves its collection of rice genetic resources in trust for humanity and makes it available to all.</span></li>
                <li><i class="bi bi-check2-circle"></i> <span>AfricaRice carries out this mission in partnership with national programs and international organizations.</span></li>

              </ul>

            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <p>It holds the largest collection of African rice in the world and the largest rice collection in Africa with almost 21,035 accessions in an ultra-modern infrastructure. The facility has the capacity to conserve under optimal conditions, up to 60,000 rice accessions. Eighty-five percent of its collection have originated in Africa. In addition to the two cultivated rice species, its collection includes related wild species in Africa. The rice genetic resources housed in RBCA are key to developing new varieties adapted to African agro-ecologies.</p>
              <a href="{{route('genebank')}}" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>

            </div>
          </div>
        </div>
      </section><!-- /About Section -->

      <!-- Features Section -->
      <section id="features" class="features section">
        <div class="container">
          <p class="pb-3">RBCA’s mandates go beyond simple conservation—we are stewards of Africa’s rich rice biodiversity and champions of sustainable agricultural practices. Our core activities include:</p>
          <ul class="nav nav-tabs row row-cols-5 d-flex g-2" data-aos="fade-up" data-aos-delay="100">
            <li class="nav-item col">
                <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-5">
                  <svg width="150" height="150" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M135.3 373h753.1v493H135.3z" fill="#FFFFFF" /><path d="M880.5 365h16v16h-16zM864.8 381h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0H755v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16H708v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0H504v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16H457v16z m-31.4 0H410v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0H159v-16h15.7v16zM127.3 365h16v16h-16zM143.3 841.5h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.8h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16V710z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16V562h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4zM127.3 858h16v16h-16zM864.8 874h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0H755v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16H708v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0H504v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16H457v16z m-31.4 0H410v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.4 0h-15.7v-16h15.7v16z m-31.3 0h-15.7v-16h15.7v16z m-31.4 0H159v-16h15.7v16zM880.5 858h16v16h-16zM896.5 841.5h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.8h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16V710z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16V562h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z m0-32.9h-16v-16.4h16v16.4z" fill="#0A0408" /><path d="M192.7 440.7h645.2v454.9H192.7z" fill="#EBB866" /><path d="M71.9 864.5H952v83.9H71.9z" fill="#FFFFFF" /><path d="M959.9 956.4h-896v-99.9H960v99.9z m-880-16H944v-67.9H79.9v67.9z" fill="#0A0408" /><path d="M314.5 334.1h84.4v319.7h-84.4z" fill="#55B7A8" /><path d="M406.9 661.8H306.5V326.1h100.4v335.7z m-84.4-16h68.4V342.1h-68.4v303.7z" fill="#0A0408" /><path d="M475.3 145.7h84.4v508.1h-84.4z" fill="#DC444A" /><path d="M567.6 661.8H467.3V137.7h100.4v524.1z m-84.3-16h68.4V153.7h-68.4v492.1z" fill="#0A0408" /><path d="M636 241.8h84.4v412H636z" fill="#68A4D9" /><path d="M728.4 661.8H628v-428h100.4v428z m-84.4-16h68.4v-396H644v396z" fill="#0A0408" /><path d="M314.5 308.7h84.4v110.8h-84.4z" fill="#FFFFFF" /><path d="M406.9 427.5H306.5V300.7h100.4v126.8z m-84.4-16h68.4v-94.8h-68.4v94.8z" fill="#0A0408" /><path d="M475.3 104h84.4v110.8h-84.4z" fill="#FFFFFF" /><path d="M567.6 222.8H467.3V96h100.4v126.8z m-84.3-16h68.4V112h-68.4v94.8z" fill="#0A0408" /><path d="M636 223.3h84.4v110.8H636z" fill="#FFFFFF" /><path d="M728.4 342.1H628V215.3h100.4v126.8z m-84.4-16h68.4v-94.8H644v94.8z" fill="#0A0408" /><path d="M314.5 742.2h8v16h-8zM696.8 758.2h-15.6v-16h15.6v16z m-31.2 0H650v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16H572v16z m-31.2 0h-15.6v-16h15.6v16z m-31.1 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16zM712.4 742.2h8v16h-8z" fill="#0A0408" /><path d="M109.9 347.6h50.9v50.9h-50.9z" fill="#DC444A" /><path d="M168.8 406.5h-66.9v-66.9h66.9v66.9z m-50.9-16h34.9v-34.9h-34.9v34.9z" fill="#0A0408" /><path d="M863.7 346.9h50.9v50.9h-50.9z" fill="#DC444A" /><path d="M922.6 405.7h-66.9v-66.9h66.9v66.9z m-50.9-16h34.9v-34.9h-34.9v34.9z" fill="#0A0408" /></svg>
                  <h4 class="d-none d-lg-block">Promoting the Conservation of African Rice</h4>
                </a>
              </li>
            <li class="nav-item col">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-1">
              <svg width="150" height="150" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M928 480c-17.7 0-32 14.3-32 32 0 211.7-172.3 384-384 384-8 0-16-0.3-23.9-0.7-32.2 19.6-67.2 35.2-104.1 46.2 41.4 12.3 84.4 18.6 128 18.6 60.5 0 119.1-11.8 174.4-35.2 53.4-22.6 101.3-54.9 142.4-96 41.1-41.1 73.4-89 96-142.4 23.4-55.4 35.2-114 35.2-174.5 0-17.7-14.3-32-32-32z" fill="#3D5AFE" /><path d="M512 128c17.7 0 32-14.3 32-32s-14.3-32-32-32c-43.8 0-86.7 6.2-128 18.5 36.9 11 71.9 26.6 104.1 46.2 7.9-0.4 15.9-0.7 23.9-0.7zM617.8 247.8l61.5-61.5-79.1-79.3-59.2 59.2c28.8 23.9 54.7 51.3 76.8 81.6zM692.5 613.2l26.3 8.8L917 423.8l-79.2-79.2-118.7 118.7-18.4-6.2c2.2 18 3.3 36.3 3.3 54.8 0 34.9-4 68.8-11.5 101.3zM393.5 877.4c-16.8-5.4-34.9 3.8-40.3 20.6s3.8 34.9 20.6 40.3c3.4 1.1 6.8 2.1 10.2 3.2 36.9-11 71.8-26.6 104.1-46.2-32.3-2-64-8-94.6-17.9z" fill="#FFEA00" /><path d="M195.2 195.2c-41.1 41.1-73.4 89-96 142.4C75.8 392.9 64 451.5 64 512c0 47.2 7.3 93.8 21.8 138.3 4.4 13.5 16.9 22.1 30.4 22.1 3.3 0 6.6-0.5 9.9-1.6 16.8-5.5 26-23.5 20.6-40.3-12.4-38.1-18.6-78-18.6-118.5 0-203.7 159.5-370.9 360.1-383.3a446.34 446.34 0 0 0-104.1-46.2c-15.7 4.7-31.2 10.2-46.4 16.7-53.4 22.6-101.4 54.9-142.5 96zM441.6 423.8l-237.8 238c-43.7 43.7-43.7 114.7 0 158.4s114.7 43.7 158.4 0l237.9-237.9 92.4 30.9C700 580.7 704 546.8 704 512c0-18.6-1.1-36.9-3.3-54.8l-100.3-33.6-39.7-118.7 57.1-57.1c-22.1-30.3-48-57.7-76.9-81.5L402 305.2l39.6 118.6zM283 701.4c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6L283 780.6c-10.9 10.9-28.7 10.9-39.6 0-10.9-10.9-10.9-28.7 0-39.6" fill="#3D5AFE" /></svg>
                <h4 class="d-none d-lg-block">Managing Genebank Operations</h4>
              </a>
            </li>
            <li class="nav-item col">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                <svg width="150" height="150" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M280 691.2c-3.2 11.2-6.4 22.4-11.2 33.6-30.4 75.2-20.8 129.6 1.6 147.2 24 17.6 76.8 9.6 137.6-40-25.6-51.2-25.6-118.4-43.2-140.8 25.6 6.4 46.4 35.2 59.2 88 3.2 11.2 6.4 22.4 9.6 32 30.4-20.8 56-27.2 76.8-19.2-16 4.8-36.8 27.2-62.4 49.6 19.2 36.8 44.8 54.4 64 54.4 20.8 0 44.8-17.6 64-54.4-25.6-22.4-46.4-43.2-62.4-49.6 20.8-8 44.8-1.6 76.8 19.2 3.2-9.6 6.4-20.8 9.6-32 12.8-52.8 32-81.6 59.2-88-17.6 22.4-17.6 89.6-43.2 140.8 60.8 49.6 113.6 57.6 137.6 40s32-72 1.6-147.2c-4.8-12.8-8-24-11.2-33.6-35.2-3.2-65.6-9.6-81.6-3.2 11.2-19.2 38.4-28.8 76.8-28.8 0-16 3.2-28.8 11.2-40 0 9.6 4.8 24 11.2 40 80 4.8 129.6-19.2 139.2-48 6.4-19.2-3.2-48-32-78.4-41.6 38.4-102.4 59.2-118.4 81.6-1.6-27.2 20.8-54.4 65.6-83.2 11.2-6.4 20.8-12.8 28.8-20.8-8-6.4-17.6-14.4-28.8-20.8-46.4-28.8-67.2-56-65.6-83.2 16 22.4 76.8 43.2 118.4 81.6 28.8-30.4 38.4-59.2 32-78.4-9.6-27.2-59.2-52.8-139.2-48-6.4 16-11.2 30.4-11.2 40-8-9.6-12.8-22.4-11.2-40-40 0-65.6-9.6-76.8-28.8 17.6 6.4 48 0 81.6-3.2 3.2-11.2 6.4-22.4 11.2-33.6 30.4-75.2 20.8-129.6-1.6-147.2-24-17.6-76.8-9.6-137.6 40 25.6 51.2 25.6 118.4 43.2 140.8-25.6-6.4-46.4-35.2-59.2-88-3.2-11.2-6.4-22.4-9.6-32-30.4 20.8-56 27.2-76.8 19.2 16-4.8 36.8-27.2 62.4-49.6C556.8 145.6 532.8 128 512 128c-20.8 0-44.8 17.6-64 54.4 25.6 22.4 46.4 43.2 62.4 49.6-20.8 8-44.8 1.6-76.8-19.2-3.2 9.6-6.4 20.8-9.6 32-12.8 52.8-32 81.6-59.2 88 17.6-22.4 17.6-89.6 43.2-140.8-60.8-49.6-113.6-57.6-137.6-40s-32 72-1.6 147.2c4.8 12.8 8 24 11.2 33.6 35.2 3.2 65.6 9.6 81.6 3.2-11.2 19.2-38.4 28.8-76.8 28.8 0 16-3.2 28.8-11.2 40 0-9.6-4.8-24-11.2-40-80-4.8-129.6 19.2-139.2 48-6.4 19.2 3.2 48 32 78.4 41.6-38.4 102.4-59.2 118.4-81.6 1.6 27.2-20.8 54.4-65.6 83.2-11.2 6.4-20.8 12.8-28.8 20.8 8 6.4 17.6 14.4 28.8 20.8 46.4 28.8 67.2 56 65.6 83.2-16-22.4-76.8-43.2-118.4-81.6-28.8 30.4-38.4 59.2-32 78.4 9.6 27.2 59.2 52.8 139.2 48 6.4-16 11.2-30.4 11.2-40 8 9.6 12.8 22.4 11.2 40 40 0 65.6 9.6 76.8 28.8-16-9.6-48-3.2-81.6 0z m-35.2 1.6c-51.2 0-102.4-12.8-124.8-81.6-14.4-43.2-6.4-75.2 12.8-99.2-17.6-25.6-25.6-57.6-12.8-99.2 22.4-67.2 73.6-81.6 124.8-81.6-24-56-48-126.4 24-179.2 60.8-44.8 113.6-20.8 155.2 12.8C443.2 142.4 470.4 128 512 128s68.8 14.4 86.4 36.8c41.6-33.6 94.4-57.6 155.2-12.8 72 52.8 49.6 123.2 24 179.2 51.2 0 102.4 12.8 124.8 81.6 14.4 43.2 6.4 75.2-12.8 99.2 17.6 25.6 25.6 57.6 12.8 99.2-22.4 67.2-73.6 81.6-124.8 81.6 24 56 48 126.4-24 179.2-60.8 44.8-113.6 20.8-155.2-12.8-19.2 22.4-44.8 36.8-86.4 36.8s-68.8-14.4-86.4-36.8c-41.6 33.6-94.4 57.6-155.2 12.8-72-52.8-49.6-123.2-25.6-179.2z" fill="#050D42" />
                  <path d="M472 374.4c-83.2 16-134.4 84.8-99.2 164.8 36.8 81.6 100.8 116.8 169.6 104 86.4-17.6 137.6-73.6 99.2-158.4-40-92.8-96-126.4-169.6-110.4z m3.2 14.4c65.6-12.8 113.6 14.4 152 99.2 33.6 73.6-9.6 120-88 137.6-60.8 12.8-118.4-19.2-152-94.4-30.4-68.8 14.4-126.4 88-142.4z" fill="#2F4BFF" />
                  <path d="M240 683.2l-16-1.6 12.8-100.8 16 1.6-12.8 100.8z m-35.2-11.2h-16l-1.6-129.6h16l1.6 129.6z m-33.6-14.4l-16 1.6L137.6 528l16-1.6 17.6 131.2zM240 340.8l12.8 100.8-16 1.6-12.8-100.8 16-1.6z m-35.2 11.2l-1.6 129.6h-16l1.6-129.6h16z m-33.6 14.4l-17.6 131.2-16-1.6 17.6-131.2 16 1.6z m67.2 454.4l-9.6-12.8 142.4-110.4 9.6 12.8-142.4 110.4z m113.6 65.6l-12.8-9.6 62.4-89.6 12.8 9.6-62.4 89.6z m-102.4-142.4l-9.6-14.4 94.4-59.2 8 12.8-92.8 60.8z m20.8 128l-4.8-4.8 1.6-1.6 120-120 11.2 11.2-120 120c-3.2-1.6-6.4-3.2-8-4.8z m-32-668.8l142.4 110.4-9.6 12.8-142.4-110.4 9.6-12.8zM352 137.6l62.4 89.6-12.8 9.6-62.4-89.6 12.8-9.6z m-102.4 142.4l94.4 59.2-8 12.8-96-57.6 9.6-14.4z m20.8-128c1.6-1.6 4.8-3.2 8-4.8l120 120-11.2 11.2-120-120-1.6-1.6 4.8-4.8zM784 683.2l-12.8-100.8 16-1.6 12.8 100.8-16 1.6z m35.2-11.2l1.6-129.6h16l-1.6 129.6h-16z m33.6-14.4l17.6-131.2 16 1.6-17.6 131.2-16-1.6zM784 340.8l16 1.6-12.8 100.8-16-1.6 12.8-100.8z m35.2 11.2h16l1.6 129.6h-16l-1.6-129.6z m33.6 14.4l16-1.6 17.6 131.2-16 1.6-17.6-131.2z m-67.2 454.4l-142.4-110.4 9.6-12.8 142.4 110.4-9.6 12.8zM672 886.4l-62.4-89.6 12.8-9.6 62.4 89.6-12.8 9.6z m102.4-142.4l-94.4-59.2 8-12.8 94.4 59.2-8 12.8z m-20.8 128c-1.6 1.6-4.8 3.2-8 4.8l-120-120 11.2-11.2 120 120 1.6 1.6-4.8 4.8z m32-668.8l9.6 12.8-142.4 110.4-9.6-12.8 142.4-110.4zM672 137.6l12.8 9.6-62.4 89.6-12.8-9.6L672 137.6z m102.4 142.4l8 12.8L688 352l-8-12.8 94.4-59.2z m-20.8-128l4.8 4.8-1.6 1.6-120 120-11.2-11.2 120-120c3.2 1.6 6.4 3.2 8 4.8zM457.6 812.8l16-1.6 8 72-16 1.6-8-72z m65.6-16l14.4-8 41.6 73.6-14.4 8-41.6-73.6z m-38.4 3.2l14.4-6.4 40 94.4-14.4 6.4-40-94.4z m-27.2-588.8l8-72 16 1.6-8 72-16-1.6z m65.6 16l41.6-73.6 14.4 8-41.6 73.6-14.4-8z m-38.4-3.2l40-94.4 14.4 6.4-40 94.4-14.4-6.4z" fill="#050D42" />
                  <path d="M537.6 393.6c-56-11.2-102.4 11.2-139.2 94.4s28.8 120 80 131.2 107.2-19.2 140.8-94.4c33.6-76.8-25.6-120-81.6-131.2z" fill="#2F4BFF" />
                </svg>
                <h4 class="d-none d-lg-block">Driving Scientific Research and Innovation</h4>
              </a>
            </li>
            <li class="nav-item col">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                <svg width="150" height="150" viewBox="0 -27.5 1079 1079" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M161.102552 256.441195L327.729968 26.072988H704.575356l112.011962 126.153131-41.753074 160.221057-228.096183-12.775472 33.136768-50.145901-58.389742-96.44302-180.569938 238.649295-179.812597-135.290883z" fill="#178E3B" /><path d="M204.737804 225.613695l167.061955 102.576239-23.933214 38.978226-167.061956-102.576239z" fill="#2FA65B" /><path d="M350.537103 423.788705a25.960653 25.960653 0 0 1-13.656967-3.898443L136.445518 295.872584a26.072392 26.072392 0 0 1-8.305919-36.128886l115.401373-182.047374A166.366692 166.366692 0 0 1 384.754014 0.000596h259.023007a166.565339 166.565339 0 0 1 140.4557 76.479017l25.029496 38.760956 40.610855-22.571243a26.072392 26.072392 0 0 1 36.488933 33.397493l-95.598771 214.786849a26.072392 26.072392 0 0 1-25.699929 15.395126l-239.183158-17.207778A26.072392 26.072392 0 0 1 512.757043 291.763078l43.602972-30.678515-36.439272-60.177563-147.991863 211.732654a26.072392 26.072392 0 0 1-21.391777 11.149051zM186.305864 265.392716L343.311326 362.530999l156.794399-224.371556a26.072392 26.072392 0 0 1 43.68988 1.427774l69.774687 115.252388a26.072392 26.072392 0 0 1-7.30027 34.825266l-3.724627 2.619655L750.512427 302.93696l56.949554-127.878875a26.072392 26.072392 0 0 1-28.76654-11.012482l-38.264339-59.271237A114.619201 114.619201 0 0 0 643.777021 52.14538H384.754014a114.495047 114.495047 0 0 0-97.17553 53.460819z" fill="#203529" /><path d="M454.975656 144.466479a13.036196 13.036196 0 0 1-12.018131-7.970703c-6.207712-14.62537-18.759707-23.812785-37.407675-27.313935a96.207127 96.207127 0 0 0-29.36248-0.744925 13.036196 13.036196 0 0 1-4.246075-25.72476 121.509762 121.509762 0 0 1 37.606322 0.670433c27.835382 4.96617 47.700062 19.86468 57.458586 42.969785a13.048611 13.048611 0 0 1-12.005716 18.114105zM519.312387 995.469354h-1.080142l-215.357958-8.90186a166.366692 166.366692 0 0 1-137.898123-83.456485L35.470869 678.776699a166.565339 166.565339 0 0 1-3.985352-159.873425l21.106222-41.05781-39.853513-23.887277a26.072392 26.072392 0 0 1 10.677265-48.296002l233.869356-24.570126a26.072392 26.072392 0 0 1 26.184131 14.550878l104.624785 215.718005a26.072392 26.072392 0 0 1-34.427973 35.036329l-48.420157-22.422257-33.894109 61.642584 257.409001 22.260857a26.072392 26.072392 0 0 1 23.812785 26.767655l-7.200946 235.545439a26.072392 26.072392 0 0 1-26.072392 25.277805zM105.220725 449.438973a26.072392 26.072392 0 0 1 4.842016 30.41779l-32.180781 62.834465a114.619201 114.619201 0 0 0 2.743808 110.013079l129.517712 224.309479a114.495047 114.495047 0 0 0 94.891091 57.433755l189.024842 7.809302 5.636603-184.555289-272.742051-23.589307a26.072392 26.072392 0 0 1-20.59719-38.487817l64.920256-118.058274a26.072392 26.072392 0 0 1 33.807202-11.086974l4.134336 1.911975-64.74644-133.527893z" fill="#203529" /><path d="M253.113265 877.609727a13.011365 13.011365 0 0 1-10.06891-4.755108 121.509762 121.509762 0 0 1-18.225843-32.900876c-9.584708-26.606255-6.642252-51.238458 8.479735-71.239707a13.036196 13.036196 0 0 1 20.795836 15.730343c-23.701046 31.336532 8.690797 71.45077 9.075676 71.848063a13.036196 13.036196 0 0 1-10.056494 21.317285zM718.095753 1024a26.072392 26.072392 0 0 1-21.106222-10.751758L558.781023 822.994273a26.072392 26.072392 0 0 1-0.484202-29.946005L692.780702 594.575288a26.072392 26.072392 0 0 1 47.551077 12.291271l4.767523 53.100771 70.333381-1.46502-109.404723-234.055587a26.072392 26.072392 0 0 1 11.273206-34.005849L924.949145 278.900698a26.072392 26.072392 0 0 1 35.433623 10.875912L1060.277275 480.738258A166.366692 166.366692 0 0 1 1056.962357 641.878056L927.43223 866.199951a166.565339 166.565339 0 0 1-136.457933 83.394408L744.925486 951.891213l-0.757341 46.458519a26.072392 26.072392 0 0 1-26.072392 25.650268z m-106.375359-216.847809L694.022245 920.430527a26.072392 26.072392 0 0 1 23.924523-19.405309L788.379473 897.511652a114.619201 114.619201 0 0 0 93.897857-57.384093L1011.857119 615.805664a114.495047 114.495047 0 0 0 2.296853-110.894574l-87.739807-167.608234-162.642064 87.392175 115.947652 247.99811a26.072392 26.072392 0 0 1-23.080275 37.109704L721.870042 712.645978a26.072392 26.072392 0 0 1-26.506932-23.738293l-0.409709-4.544045z" fill="#203529" /><path d="M915.376853 650.46953a72.195695 72.195695 0 0 1-8.939106-0.558694 13.036196 13.036196 0 1 1 3.22801-25.873745c38.984434 4.866847 57.495832-43.305002 57.682064-43.789203a13.036196 13.036196 0 1 1 24.42114 9.150168 121.509762 121.509762 0 0 1-19.380478 32.280104c-16.06556 18.958354-35.619854 28.79137-57.01163 28.79137z" fill="#203529" /></svg>
                <h4 class="d-none d-lg-block">Showcasing Biodiversity and Raising Awareness</h4>
              </a>
            </li>
            <li class="nav-item col">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4">
                <svg width="150" height="150" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M464.8 409.7C431.9 365 378.9 336 319.2 336c-99.8 0-180.7 80.9-180.7 180.7s80.9 180.7 180.7 180.7h297.3c149.3 0 270.3-121 270.3-270.3s-121-270.3-270.3-270.3c-118.7 0-219.6 76.5-255.9 183" fill="#FFFFFF" /><path d="M823.5 766.5c0-3.2 0.5-6.3 1.5-9.2H631V417.4c0-5.5-4.5-10-10-10s-10 4.5-10 10v359.9h214.6c-1.3-3.3-2.1-7-2.1-10.8z" fill="#06F3FF" /><path d="M230.2 791.7c-3.5-8.7-12-14.9-22-14.9-13.1 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7c9.5 0 17.7-5.6 21.5-13.7 1.4-3 2.2-6.4 2.2-10 0-3.1-0.6-6.1-1.7-8.8z" fill="#E6E6E6" /><path d="M852.2 737.9c-12.6 0-23.3 8.1-27.1 19.4-1 2.9-1.5 6-1.5 9.2 0 3.8 0.7 7.4 2.1 10.8 4.3 10.5 14.5 17.9 26.6 17.9 15.8 0 28.7-12.8 28.7-28.7-0.1-15.8-13-28.6-28.8-28.6zM700 257.7c2.1-5.1-0.3-11-5.4-13.1-78-32.3-135.3-15.6-169.6 4.1-37.2 21.3-55.7 50.2-56.4 51.5-2.9 4.7-1.5 10.8 3.1 13.8 1.7 1 3.5 1.5 5.3 1.5 3.3 0 6.6-1.6 8.5-4.6 0.2-0.3 17.1-26.4 50.2-45.2 44.1-24.9 94.9-25.8 151.2-2.5 5.1 2 11-0.4 13.1-5.5z" fill="#005BFF" /><path d="M852.2 819.8c-12.4 0-22.9 7.8-26.9 18.8H534.5V717.3H611v-40h-76.5V537.9c0-5.5-4.5-10-10-10s-10 4.5-10 10v139.4h-66.9V537.9c0-5.5-4.5-10-10-10s-10 4.5-10 10v139.4H319.2c-88.6 0-160.7-72.1-160.7-160.7s72.1-160.7 160.7-160.7c50.9 0 99.3 24.5 129.5 65.6 6.5 8.9 19.1 10.8 28 4.3 8.9-6.5 10.8-19.1 4.3-28-18.3-24.8-42.4-45.4-69.7-59.5-7.9-4.1-16.1-7.7-24.5-10.7 39.3-91 129.3-150.8 229.8-150.8 138 0 250.3 112.3 250.3 250.3 0 133.1-104.4 242.2-235.7 249.8V717c72.1-3.5 139.3-33.3 190.7-84.7 54.8-54.8 85-127.7 85-205.2s-30.2-150.4-85-205.2c-54.8-54.8-127.7-85-205.2-85-118.8 0-224.9 72.1-269.1 181.2-9.3-1.3-18.8-2-28.2-2-110.7 0-200.7 90-200.7 200.7s90 200.7 200.7 200.7h108.4v73.9H250.9c-4.3-19.6-21.8-34.4-42.7-34.4-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7c20.4 0 37.6-14.1 42.4-33h197v-93.9h66.9v141.3h310.9c4.1 10.8 14.6 18.5 26.8 18.5 15.8 0 28.7-12.8 28.7-28.7 0-16-12.9-28.8-28.7-28.8z m-622.5-9.3c-3.8 8.1-12 13.7-21.5 13.7-13.1 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7c9.9 0 18.5 6.2 22 14.9 1.1 2.7 1.7 5.7 1.7 8.8 0 3.6-0.8 7-2.2 10z" fill="#005BFF" /></svg>
                <h4 class="d-none d-lg-block">Fostering Collaboration and Knowledge Sharing</h4>
              </a>
            </li>

          </ul><!-- End Tab Nav -->
          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div class="tab-pane fade active show" id="features-tab-5">
                <div class="row">
                  <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-lg-0">
                    <p>
                    Our efforts extend to the collection and conservation of wild and cultivated rice species across Africa. We aim to ensure that this rich genetic diversity is preserved for future generations and utilized to its fullest potential. Our Conservation Efforts:
                    </p>
                    <ul>
                      <li><span><strong>🌾 Preserving Genetic Diversity:</strong> Maintaining live collections of traditional African rice varieties, ensuring their survival for future generations.</span></li>
                      <li><span><strong>🔬 Research & Breeding Support:</strong> Providing traits for drought tolerance, disease resistance, and improved yields to bolster climate-smart agriculture.</span></li>
                      <li><span><strong>🤝 Community Engagement:</strong> Partnering with farmers and indigenous communities to document and conserve locally adapted landraces.</span></li>
                      <li><span><strong>🌍 Global Collaboration:</strong> Contributing to international seed treaties and research networks to protect Africa’s agricultural legacy.</span></li>
                    </ul>
                    <p class="fst-italic">
                      By conserving African rice, we protect not just a crop, but centuries of cultural heritage and a key resource for adapting to tomorrow’s challenges.
                    </p>
                  </div>

                  <div class="col-lg-4 order-1 order-lg-2 text-center">
                    <img src="{{asset('files/img/home/cons.jpg')}}" alt="" class="img-fluid">
                  </div>
                </div>
              </div><!-- End Tab Content Item -->
            <div class="tab-pane fade " id="features-tab-1">
              <div class="row">
                <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-lg-0">
                  <p>
                  We meticulously maintain our germplasm collections, adhering to the highest standards set by the CGIAR genebank’s performance targets. This includes ensuring the availability of germplasm, distributing samples for research, maintaining safety backups, and continuously improving data quality and management systems.
                  </p>
                  <p>Efficient genebank operations ensure the long-term preservation and accessibility of genetic resources. Our management system covers:</p>
                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Acquisition & Documentation :</strong> Collecting, verifying, and cataloging genetic material with detailed metadata</span></li>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Storage & Preservation :</strong> Utilizing state-of-the-art cold storage (seed banks, cryopreservation, in vitro) to maintain viability</span></li>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Quality Control :</strong> Regular viability testing, monitoring, and regeneration to safeguard genetic integrity</span></li>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Distribution & Access :</strong> Facilitating research and breeding by providing well-documented, high-quality samples</span></li>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Data Management :</strong></span> Maintaining a secure, searchable database for tracking inventory and usage</li>
                  </ul>
                  <p class="fst-italic">By integrating best practices in conservation and technology, we ensure these vital resources remain available for future generations.</p>
                </div>
                <div class="col-lg-4 order-1 order-lg-2 text-center">
                    <img src="{{asset('files/img/home/cons2.jpg')}}" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End Tab Content Item -->
            <div class="tab-pane fade" id="features-tab-2">
              <div class="row">
                <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-lg-0">
                  <p>We harness the genetic potential of our collections through cutting-edge research. Our scientific endeavors focus on gene discovery and donor identification, bridging the gap between genetic resources and their practical applications in breeding programs.</p>
                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Advanced Technologies:</strong> We employ state-of-the-art technologies such as genomics, bioinformatics, and high-throughput sequencing to analyze and understand the genetic makeup of our collections. These tools enable us to uncover valuable traits and enhance our conservation strategies.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Innovative Approaches:</strong> Our research initiatives focus on developing new methods for genetic preservation, regeneration, and characterization. By exploring novel techniques, we strive to improve the efficiency and effectiveness of our conservation efforts.</span></li>
                  </ul>
                  <p class="fst-italic">
                    At our gene bank, we are dedicated to advancing scientific research and fostering innovation in the field of genetic conservation and utilization.
                  </p>
                </div>
                <div class="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="{{asset('files/img/home/oppp.jpg')}}" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End Tab Content Item -->

            <div class="tab-pane fade " id="features-tab-3">
              <div class="row">
                <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-lg-0">
                  <p> As custodians of Africa’s rice heritage, we serve as a vibrant hub for promoting rice biodiversity. We raise awareness on the importance of conserving this precious resource and its critical role in food security. Highlights of Our Work</p>
                  <ul>
                      <li><span><strong>🌱 Exploring Genetic Diversity:</strong> Discover rare and resilient crop varieties, wild relatives, and endangered species preserved in our collection.</span></li>
                      <li><span><strong>📚 Educational Outreach:</strong> We engage with schools, researchers, and the public through workshops, exhibitions, and digital resources.</span></li>
                      <li><span><strong>🌍 Global Collaboration:</strong> Partnering with institutions worldwide to promote biodiversity conservation and sustainable use.</span></li>
                      <li><span><strong>🔬 Science for the Future:</strong> Supporting cutting-edge research in climate resilience, food security, and ecosystem restoration.</span></li>
                  </ul>
                  <p class="fst-italic">By sharing the stories behind these genetic treasures, we inspire action to protect our planet’s irreplaceable biodiversity. Join us in safeguarding the future of life on Earth!</p>
                </div>
                <div class="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="{{asset('files/img/home/work.jpg')}}" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End Tab Content Item -->
            <div class="tab-pane fade" id="features-tab-4">
              <div class="row">
                <div class="col-lg-8 order-2 order-lg-1 mt-3 mt-lg-0">
                  <p>
                  We collaborate closely with national genebanks across Africa, sharing our resources, knowledge, and expertise. By nurturing these partnerships, we advance scientific research and strengthen the continent’s capacity to manage and utilize rice genetic resources.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Workshops and Training:</strong> We organize workshops, training programs, and seminars to disseminate the latest research findings and best practices in genetic conservation. These events aim to build the capacity of researchers, students, and practitioners worldwide.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span><strong>Global Partnerships:</strong> We collaborate with leading research institutions, universities, and international organizations to share knowledge, resources, and expertise. These partnerships enhance our research capabilities and contribute to global efforts in biodiversity conservation.</span></li>
                  </ul>
                  <!--p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p-->
                </div>
                <div class="col-lg-4 order-1 order-lg-2 text-center">
                    <a href="{{route('req')}}"><img src="{{asset('files/img/home/germplasm.jpg')}}" alt="" class="img-fluid"></a>
                </div>
              </div>
            </div><!-- End Tab Content Item -->

          </div>
        </div>
      </section><!-- /Features Section -->

      <!-- Call To Action Section -->
      <section id="call-to-action" class="call-to-action section dark-background">
        <div class="container">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-xl-9 text-center text-xl-start">
              <h3>Request for germplasm</h3>
              <p>Need genetic material for your research or projects? Fill out our form to access our germplasm collection. Please ensure you comply with the usage terms and relevant regulations.</p>
            </div>
            <div class="col-xl-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" href="{{route('req')}}">Go to</a>
            </div>
          </div>
        </div>
      </section><!-- /Call To Action Section -->

      <section id="mission" class="about section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <p>Our Mission</p>
          <h2>RBCA</h2>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4 justify-content-between">
            <div class="col-lg-5 content" data-aos="fade-up" data-aos-delay="100">
              <p>
              Our mission is clear: to catalyze the growth and prosperity of the rice sector in Africa. We achieve this by conserving and securing a wealth of rice genetic diversity, making these resources accessible for breeding programs across the continent. By harnessing the genetic potential of African rice, we support the development of high-performing, climate-resilient varieties that meet the region’s unique agricultural needs and consumer preferences.
              </p>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <img src="{{asset('files/img/home/miss.jpg')}}" alt="" class="rounded-2 img-fluid">
            </div>

          </div>
        </div>
      </section><!-- /About Section -->

      <!-- Call To Action Section -->
      <section id="call-to-action" class="call-to-action section dark-background">
        <div class="container">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-xl-9 text-center text-xl-start">
              <h3>Genebank Survey</h3>
              <p>Help us improve by sharing your feedback! Please take a moment to complete our user survey. Your responses are valuable and will remain confidential.</p>
            </div>
            <div class="col-xl-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="{{route('qst')}}">Submit</a>
            </div>
          </div>
        </div>
      </section><!-- /Call To Action Section -->

      <section id="vision" class="about section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>RBCA</h2>
          <p>Our Vision</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4 justify-content-between">
            <div class="col-lg-5 content" data-aos="fade-up" data-aos-delay="100">
              <p>
              We envision a future where the RBCA stands as a global leader in the collection, conservation, management, and sustainable utilization of rice genetic resources. Through our dedication to research, breeding, and education, we aim to empower Africa's agricultural sector, fostering innovations that enhance food security and bolster the resilience of farming communities.
              </p>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <img src="{{asset('files/img/home/vis.jpg')}}" alt="" class="img-fluid rounded-2">
            </div>
          </div>
        </div>
      </section><!-- /About Section -->

      <!-- Call To Action Section -->
      <section id="call-to-action" class="call-to-action section dark-background">
        <div class="container">
          <div class="row justify-content-between" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-xl-7 text-center text-xl-start">
              <h3></h3>
              <p>
              🌾 African rice (Oryza glaberrima) has been cultivated for more than 3,000 years in parts of Africa but it remains much less widely used than Asian rice (Oryza sativa). Marie-Noelle Ndjiondjop, head of the <a href="https://www.linkedin.com/company/africa-rice-center/">Africa Rice Center</a> genebank, shares her passion for this resilient crop and explains how it can help farmers in a changing climate.
              </p>
              <p>🌱 The genebank – known as the Rice Biodiversity Center for Africa - holds the world’s largest collection of African rice. It is one of 11 CGIAR genebanks that share samples with farmers and scientists around the world.</p>
              <p>🌍 As governments discuss how to put <a href="https://www.linkedin.com/feed/hashtag/?keywords=biodiversity&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7255267003551088640">biodiversity</a> at the heart of sustainable food systems at <a href="https://www.linkedin.com/feed/hashtag/?keywords=cop16colombia&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7255267003551088640">COP16Colombia</a>, let’s celebrate the scientists working on this and other underused crops.</p>
              <p>(copied from <a href="https://www.linkedin.com/posts/cgiar_biodiversity-cop16colombia-ugcPost-7255239447103848449-NKfg?utm_source=share&utm_medium=member_desktop">CGIAR</a>)</p>
            </div>
            <div class="col-xl-4 cta-btn-container text-center">
              <video height="400" controls autoplay>
                <source src="{{asset('files/vdo/v1.mp4')}}" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </section><!-- /Call To Action Section -->
      <!-- Services Section -->
      <section id="services" class="services section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>What we do</p>
        </div><!-- End Section Title -->




        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-collection" style="color: gold;"></i>
                </div>
                <a href="{{route('acquisition')}}" class="stretched-link">
                  <h3>Acquisition / Collection</h3>
                </a>
                <p>Collecting new genetic samples from various sources. The collection is done through fieldwork, collaborations with other institutions, and donations from researchers</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-archive" style="color: #111ecad5;"></i>
                </div>
                <a href="{{route('conservation')}}" class="stretched-link">
                  <h3>Conservation</h3>
                </a>
                <p>Genetic samples are stored in controlled environments to ensure long-term preservation. This includes maintaining specific temperature and humidity levels.</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-copy" style="color: #f3268c;"></i>
                </div>
                <a href="{{route('duplication')}}" class="stretched-link">
                  <h3>Safety duplication</h3>
                </a>
                <p>To safeguard against loss or damage, genetic samples are duplicated and stored at secondary locations. This ensures the genetic diversity is not lost in case of a disaster at the primary storage site</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-repeat" style="color: #df1529;"></i>
                </div>
                <a href="{{route('regeneration')}}" class="stretched-link">
                  <h3>Regeneration</h3>
                </a>
                <p>When genetic samples start to lose viability or quantity, they are regenerated. This can involve growing new plants from seeds to maintain healthy and viable genetic stocks</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-dash-square-dotted" style="color: #6610f2;"></i>
                </div>
                <a href="{{route('characterization')}}" class="stretched-link">
                  <h3>Characterization</h3>
                </a>
                <p>This involves identifying and recording the genetic, morphological, and physiological characteristics of the samples.</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-box" style="color: #20c997;"></i>
                </div>
                <a href="{{route('distribution')}}" class="stretched-link">
                  <h3>Distribution</h3>
                </a>
                <p>Genetic samples are distributed to researchers, breeders, and institutions for scientific study, breeding programs, and conservation efforts. Proper documentation and agreements ensure the samples are used responsibly.</p>
              </div>
            </div><!-- End Service Item -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-database-gear" style="color: #f3268c;"></i>
                </div>
                <a href="{{route('data')}}" class="stretched-link">
                  <h3>Data management</h3>
                </a>
                <p>All information related to the genetic samples, including their origins, characteristics, and storage conditions, is meticulously recorded and managed. This data is stored in secure databases that allow for easy retrieval and analysis.</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="service-item  position-relative">
                <div class="icon">
                  <i class="bi bi-exclude" style="color: #0dcaf0;"></i>
                </div>
                <a href="{{route('genomicsgbk')}}" class="stretched-link">
                  <h3>Genomics for Genebanks</h3>
                </a>
                <p>Studying the genetic makeup of samples to understand their diversity and resilience to environmental challenges.</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-eyeglasses" style="color: #fd7e14;"></i>
                </div>
                <a href="{{route('qca')}}" class="stretched-link">
                  <h3>Quality Controle Analysis</h3>
                </a>
                <p>Regularly assessing the viability and integrity of genetic samples to ensure they remain usable and uncontaminated.</p>
              </div>
            </div><!-- End Service Item -->

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-filter-circle" style="color: #20c997;"></i>
                </div>
                <a href="{{route('subsetting')}}" class="stretched-link">
                  <h3>Sub-setting</h3>
                </a>
                <p>Selecting representative subsets of the larger collections to simplify management and enhance research accessibility.</p>
              </div>
            </div><!-- End Service Item -->



          </div>

        </div>

      </section><!-- /Services Section -->

      <!-- Call To Action Section -->
      <section id="call-to-action" class="call-to-action section dark-background">
        <div class="container">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-xl-9 text-center text-xl-start">
              <h3>Request for germplasm</h3>
              <p>Need genetic material for your research or projects? Fill out our form to access our germplasm collection. Please ensure you comply with the usage terms and relevant regulations.</p>
            </div>
            <div class="col-xl-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="{{route('req')}}">Go to</a>
            </div>
          </div>
        </div>
      </section><!-- /Call To Action Section -->
      <!-- Team Section -->
      <section id="team" class="team section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <p>Our Hardworking Team</p>
          <h2>Team</h2>
        </div><!-- End Section Title -->

        <div class="container">

          <div class="row gy-4">

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div class="team-member">
                <div class="member-img">
                  <img src="{{asset('files/img/home/pers.png')}}" class="img-fluid" alt="">
                  <div class="social">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Dr. Marie Noelle NDJIONDJOP</h4>
                  <span>Head of the Africa Rice Center genebank</span>
                </div>
              </div>
            </div><!-- End Team Member -->

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div class="team-member">
                <div class="member-img">
                  <img src="{{asset('files/img/home/pers.png')}}" class="img-fluid" alt="">
                  <div class="social">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Dr. Arnaud Comlan GOUDA</h4>
                  <span>Consultant on Genomics</span>
                </div>
              </div>
            </div><!-- End Team Member -->

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div class="team-member">
                <div class="member-img">
                  <img src="{{asset('files/img/home/pers.png')}}" class="img-fluid" alt="">
                  <div class="social">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Karlin GNIKOUA</h4>
                  <span>Conservation an Cold room Manager</span>
                </div>
              </div>
            </div><!-- End Team Member -->

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div class="team-member">
                <div class="member-img">
                  <img src="{{asset('files/img/home/pers.png')}}" class="img-fluid" alt="">
                  <div class="social">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Sèdjro Bienvenu KPEKI</h4>
                  <span>Seed Regenation, Characterization and Phenotype Manager</span>
                </div>
              </div>
            </div><!-- End Team Member -->
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div class="team-member">
                <div class="member-img">
                  <img src="{{asset('files/img/home/pers.png')}}" class="img-fluid" alt="">
                  <div class="social">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Dro Daniel TIA</h4>
                  <span>Seed Viability and Safety Duplication Manager</span>
                </div>
              </div>
            </div><!-- End Team Member -->
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div class="team-member">
                <div class="member-img">
                  <img src="{{asset('files/img/home/pers.png')}}" class="img-fluid" alt="">
                  <div class="social">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Clinton Obinna OGWUIKE</h4>
                  <span>Information and Database Manager</span>
                </div>
              </div>
            </div><!-- End Team Member -->

          </div>

        </div>

      </section><!-- /Team Section -->




  </main>



@endsection
