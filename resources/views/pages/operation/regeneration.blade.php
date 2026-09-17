@extends('layouts.webtemp') 

@section('titre')
Regeneration
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/operation/regen/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Regeneration</h2>
          </div>
        </div>
        <div class="carousel-item" style="background-image: url({{asset('files/img/operation/regen/slide2.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Regeneration</h2>
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
          <h2>Routine Operations</h2>
          <p>Regeneration</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
          <div class="col-lg-8 content" data-aos="fade-right" style="text-align: justify">
                <h2></h2>
                <p>Regeneration&nbsp;(also called multiplication or rejuvenation) is the renewal of&nbsp;germplasm&nbsp;accessions by sowing out a seed sample and then harvesting a fresh sample from the growing plants. Regeneration is done to (1) purify and/or increase the quantity of newly acquired germplasm; and (2) replenish seed stocks of accessions that have insufficient seed quantity, low viability, poor physical quality, or infection by pathogens (virus, bacteria, fungi or insects). In the case of newly acquired germplasm, (a) the accession may contain highly heterogeneous seeds due to off-types or admixtures that may require purification by creating subsamples based on grain characters, planting for observation under field conditions, and splitting the accession based on morphological, agronomic and grain characteristics; (b) seed viability may be below the minimum acceptable threshold value (75% for wild species and 85% for cultivated species), and (c) seed quantity may not be sufficient for conservation or distribution.</p>
                <p>As described in the previous section, genebank collections are regularly monitored for both viability and seed quantity to regenerate those that have low viability and small quantity. The Biodiversity Center for Africa regenerates a given accession when seed stocks are below 100 grams or when germination rates fell below a threshold value (75% for wild or 85% for cultivated species) and 95% in the medium-term and long-term storage conditions, respectively. Active collections are regenerated from the base collection (original material), while base collections are regenerated from the&nbsp;seeds of the same sample.</p>
                <p>The aim of germplasm regeneration is to obtain enough quantity of high-quality and healthy seed for conservation and/or distribution without affecting the genetic integrity of the original collection. However, multiple factors may affect the genetic integrity of accessions during regeneration. First, germplasm collections contain accessions originating from a wide range of environments and the site of regeneration may not be optimal for all accessions, so there is a possibility that some accession may be lost due to poor adaptation to the growing conditions of the site used for regeneration. Second, some accessions may be lost during regeneration through disease and pest damage. Third, the genetic composition of the collection may be altered due to mutation, genetic drift, natural selection, and several pre- and post-harvest practices. The latter includes diverse types of human errors that may happen during planting, harvesting, threshing, drying, cleaning, sub-sampling, and packing. For such reasons, it is highly recommended that regeneration should be carried out as infrequently as possible. Thus, more efforts should be made in optimizing storage conditions that greatly extend the storage life of seeds without major changes in seed germination and viability rate. The frequency of regeneration of germplasm is a function of the size of the initial collection, the frequency of user’s demands for given germplasm, and seed longevity under the storage conditions.</p>
                <p>Germplasm regeneration is mainly carried out in the post-rainy season due to low relative humidity and absence of rains, which in turn reduce incidences of diseases and pests to produce healthier and quality seeds. It is carried out under good agronomic managements, optimum plant stands, and suitable pollination control measures. Wild species and critical accessions with low viability/limited seed stocks are multiplied under greenhouses (glasshouses) with adequate protection from diseases and pests. To minimize genetic drift, an adequate number of plants should be grown and sampled equally in constituting new seed stocks.</p>
                <p>Small changes in allele frequencies may occur during seed regeneration and maintenance, and possible contamination with seeds or pollen of other samples. &nbsp;Significant changes in the genetic makeup of a given germplasm result in the distribution of wrong seeds to users. Therefore, the development and implementation of a routine genotyping quality control methods<sup><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6208651/" target="_blank" rel="noopener noreferrer">28</a>,<a href="https://pubmed.ncbi.nlm.nih.gov/22801872/" target="_blank" rel="noopener noreferrer">32</a></sup> are of paramount importance to minimize changes in the genetic integrity of given germplasm during acquisition and routine genebank operations, including regenerations.</p>
                    
            </div>
            <div class="col-lg-4 pt-4 pt-lg-0 text-center" data-aos="fade-left">
                <h3>Nursery</h3>
                <div id="nurcar" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#nurcar" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#nurcar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#nurcar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="{{asset('files/img/operation/regen/nursery1.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="{{asset('files/img/operation/regen/nursery2.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="{{asset('files/img/operation/regen/nursery3.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#nurcar" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#nurcar" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h3 class="mt-4 mb-2">Transplanting</h3>
                <div id="transcar" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#transcar" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#transcar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#transcar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="{{asset('files/img/operation/regen/trans1.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="{{asset('files/img/operation/regen/trans2.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="{{asset('files/img/operation/regen/trans3.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#transcar" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#transcar" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h3 class="mt-4 mb-2">Harvesting</h3>
                <div id="hvcar" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#hvcar" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#hvcar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#hvcar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#hvcar" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="{{asset('files/img/operation/regen/harvest1.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="{{asset('files/img/operation/regen/harvest2.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="{{asset('files/img/operation/regen/harvest3.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="{{asset('files/img/operation/regen/harvest4.jpg')}}" class="rounded-2 d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#hvcar" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#hvcar" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
          </div>
        </div>
    </section>

@endsection
    