@extends('layouts.webtemp') 

@section('titre')
Genomics data
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/data/genslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Genomics data</h2>
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
          <h2>Data</h2>
          <p>Genomics data</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>The Rice Biodiversity Center for Africa genotyped nearly 4,000 accessions with single nucleotide polymorphisms (SNPs) using DArT-based genotyping by sequencing technology (DArTseq). We used the pilot genotype data of 3,319 accessions to for different purposes and published five papers:</p>
                <p><strong>Paper-1 (</strong><a href="https://doi.org/10.3389/fpls.2017.01748" target="_blank" rel="noopener noreferrer">Ndjiondjop et al. 2017</a><strong>):</strong> To understand the extent of genetic variation and population structure of 2,179 Oryza glaberrima collections as well as for developing a mini-core set that captured most of the genetic diversity of this species.</p>
                <p><strong>Paper-2 (</strong><a href="https://doi.org/10.3389/fpls.2018.00446" target="_blank" rel="noopener noreferrer">Ndjiondjop et al. 2018</a><strong>):</strong> To assess the genetic variation and population structure of 330 O. sativa genotypes adapted to lowland and upland ecologies in Africa and widely used in breeding programs in the region.</p>
                <p><strong>Paper-3 (</strong><a href="https://link.springer.com/article/10.1007/s11032-018-0885-z" target="_blank" rel="noopener noreferrer">Ndjiondjop et al. 2018</a><strong>): </strong>To determine the proportion of misclassified and mislabeled accessions across 3,134 samples representing O. glaberrima, O. barthii, O. longistaminata, and O. sativa, and develop species- and sub-species (ecotype)-specific diagnostic SNP markers for rapid and low-cost quality control (QC) analysis.</p>
                <p><strong>Paper-4</strong> (<a href="https://link.springer.com/article/10.1007/s00122-018-3268-2" target="_blank" rel="noopener noreferrer">Ndjiondjo</a><a href="https://link.springer.com/article/10.1007/s00122-018-3268-2" target="_blank" rel="noopener noreferrer">p</a><a href="https://link.springer.com/article/10.1007/s00122-018-3268-2" target="_blank" rel="noopener noreferrer"> et</a><a href="https://link.springer.com/article/10.1007/s00122-018-3268-2" target="_blank" rel="noopener noreferrer"> al.</a><a href="https://link.springer.com/article/10.1007/s00122-018-3268-2" target="_blank" rel="noopener noreferrer"> 2019</a><strong>):</strong>To compare molecular diversity indices, selective sweeps and population structure of 3,245 accessions representing O. glaberrima, O. sativa and O. barthii.</p>
                <p><strong>Paper-5 (</strong><a href="https://www.nature.com/articles/s41598-020-70842-0" target="_blank" rel="noopener noreferrer">Gouda et al. 2020</a><strong>): </strong>&nbsp;To comparing six sampling methods (1, 5, 10, and 15 individuals per accession plus bulks of 5 plants and 10 plants) and eleven datasets for assessing intra- and inter-accession genetic diversity in O. glaberrima, O. sativa and O. barthii.</p>
                <p><strong>Genomic data not yet publicly available</strong></p>
                <p>Currently, we have genotyped a total of 9,121 accessions (8,381 accessions with DOI plus 740 accessions without DOI) with 49,685 DArTseq-based SNPs, which accounts for 39.3% of our entire collection. However, the number of polymorphic SNPs differed greatly depending on the species, with O. glaberrima and O. sativa showing the lest and greatest polymorphism, respectively. Since we are still working on additional papers based on the recent genomic data, we plan to make the genotype data publicly available as soon as the papers are accepted for publication.</p>
                <p><strong>To request the&nbsp; genomic data for a subset of our collection with DOI, please select the accessions with DOI from <a href="http://rice-biodiversity-center.890m.com/wp-content/plugins/download-attachments/includes/download.php?id=1732" title="this link " class="da-download-link da-download-attachment-1732">this link </a> and send your request through <a href="http://rice-biodiversity-center.890m.com/contact-staff/" target="_blank" rel="noopener noreferrer">email</a>.&nbsp; </strong></p>
                
            </div>
          </div>
        </div>
    </section>

@endsection
    