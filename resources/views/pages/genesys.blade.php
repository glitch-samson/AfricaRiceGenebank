@extends('layouts.webtemp')

@section('titre')
Request
@endsection



@section('contenu')


    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/home/contact.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Request for Germplasm (RBCA)</h2>
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

    </section><!-- /Hero Section -->

    <main id="main">
      <!--link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.css" />
      <script src="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-ui.js"></script-->

      <div class="container-fluid bg-light py-4">
        <div class="container ">
          <div class="row g-3 justify-content-center fw-bold text-center">
            <div class="col"><a class="w-100" href="#/">Home</a></div>
            <div class="col"><a class="w-100" href="#/overview">Overview</a></div>
            <div class="col"><a class="w-100" href="#/map">Map</a></div>
            <div class="col"><a class="w-100" href="#/map">Bibliography</a></div>
            <div class="col"><a class="w-100" href="#/cart">Cart</a></div>
            <div class="col"><a class="w-100" href="#/subsets">Subsets</a></div>
            <div class="col"><a class="w-100" href="#/datasets">Datasets</a></div>
            <div class="col"><a class="w-100" href="#/traits">Trait data</a></div>
          </div>

        </div>
      </div>


      <div class="container my-3" id="genesys-container"></div>

      <script type="text/javascript">
        // Embedded Genesys configuration
        const genesysConfig = {
          apiUrl: "{{env('API_GEN_URL')}}",
          clientId: "{{env('API_GEN_CLIENTID')}}",
          clientKey: "{{env('API_GEN_CLIENTKEY')}}",
          shoppingCart: { enabled: true, },
          captchaSiteKey: "{{env('API_GEN_CAPTCHA')}}", // Public ReCaptcha site key
          filter: { institute: { code: ["{{ env('API_GEN_INSCODE')}}" ] } },
        };

        // Show Embedded Genesys
        if (genesys !== undefined && typeof genesys.showGenesysUI === "function") {
          genesys.showGenesysUI(document.getElementById("genesys-container"), genesysConfig);

          // Or, to display ONLY the "Map of accessions" use:
          // genesys.showGenesysMap(document.getElementById("genesys-container"), genesysConfig);

          // Or, to display ONLY "Collection Overview" use:
          // genesys.showOverview(document.getElementById("genesys-container"), genesysConfig);

        } else {
          document.getElementById("genesys-container").innerHTML="<div class='error alert alert-danger'><strong>Embedded UI</strong> is not loaded.</div>";
        }

      </script>


    </main>

@endsection
