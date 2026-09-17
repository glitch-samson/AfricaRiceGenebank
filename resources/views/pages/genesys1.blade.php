@extends('layouts.webtemp') 

@section('titre')
Request
@endsection



@section('contenu')

<main id="main">
  <section id="about-us" class="about-us mt-5">
  <html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.css" />
      <script src="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-deps.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@genesys-pgr/ui-embedded@1.6.0/dist/genesys-ui.js"></script>
      <title>Genesys</title>
      <body>
        <div class="container">
          <a href="#/">Home</a>
          <a href="#/overview">Overview</a>
          <a href="#/map">Map</a>
          <a href="#/map">Bibliography</a>
          <a href="#/cart">Cart</a>
          <a href="#/subsets">Subsets</a>
          <a href="#/datasets">Datasets</a>
          <a href="#/traits">Trait data</a>
        </div>
      </body>
    </head>
  </html>
  
  
  

  <div class="container-fluid mb-5" id="genesys-container"></div>

  <script type="text/javascript">
    // Embedded Genesys configuration
    const genesysConfig = {
      apiUrl: "https://api.genesys-pgr.org",
      clientId: "4dfau.rc5uoeisx4nzyxomsjc9@api.genesys-pgr.org",
      clientKey: "l9b8b9icnxXRSjbrOscGD5N9KrEiwCkj",
      captchaSiteKey: 'ed7191db-5e56-4d70-bfd0-e050d1e93e9d', // Public ReCaptcha site key
      filter: { institute: { code: [ "CIV033" ] } },
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

  

  </section>
</main>

@endsection
    