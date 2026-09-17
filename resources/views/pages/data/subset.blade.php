@extends('layouts.webtemp') 

@section('titre')
Subsets
@endsection



@section('contenu')
    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/data/subslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Subsets</h2>
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
          <p>Subsets</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>The RBCA has created <strong>8&nbsp;subsets</strong> of accessions.</p>
                    <ol>
                    <li><strong>Three subsets</strong> were created based on our germplasm distribution database between 1995 and 2019, which includes a subset of <strong>the most widely distributed Oryza glaberrima</strong> landraces (20 accessions), a second subset of <strong>the most widely distributed </strong><em><strong> sativa</strong></em>(23 japonica and 61 indica accessions), and the third subset of <strong>the most widely distributed interspecific genotypes</strong> derived from crosses involving both <em>O. glaberrima</em> and O. sativa (<em>26 accessions</em>).</li>
                    <li>A <strong>mini-core of 350 accessions</strong> <strong> glaberrima</strong> was developed out of 3,130 accessions using combinations of 9,990 SNPs that were polymorphic within this species and four trait information from the literature and/or our databases. Accessions in this mini-core set originated from 19 countries and represent different maturity groups (early, intermediate, late) and eight rice growing ecologies in Africa. A second <strong>mini-core of 600 out of 5,718 O. sativa accessions</strong> (400 indica and 200 japonica) was also created using combinations of phenotype traits from literature and 25,884 SNPs that were polymorphic within this subspecies. The availability of such genetically diverse mini-core collections would be highly desirable for genetic and breeding studies, including serving as a panel for trait donor identification and for mapping genes and quantitative trait loci (QTLs) that control traits of interest in breeding.</li>
                    <li>Early morning flowering (EMF) and peak spikelet opening time (PSOT) traits could be mechanisms to escape heat stress-induced spikelet sterility at anthesis by shedding viable pollen on to a receptive stigma during the cooler hours in the morning<a href="https://agris.fao.org/agris-search/search.do?recordID=JP1998001881" target="_blank" rel="noopener noreferrer"><sup>1</sup></a>. Using unpublished evaluation data collected by Dr. R. Venuprasad, the former Lowland Rice Breeder at AfricaRice who currently work at the International Rice Research Institute (IRRI), we have identified a <strong>subset of 15 O. glaberrima accessions for both EMF PSOT traits</strong>.</li>
                    <li>The remaining <strong>four subsets</strong> were compiled based on their reaction to different abiotic and biotic stresses from publications, which includes the following.</li>
                    <li>Abiotic stress tolerance subsets: Drought, iron toxicity, and flooding are important abiotic stresses that affect rice production in Africa. Using publicly available data from different publications, we have compiled a list of the best 23 O. glaberrima accessions that were reported to be tolerant to upland drought<a href="https://www.pnas.org/content/99/25/16360" target="_blank" rel="noopener noreferrer"><sup>2</sup></a>, lowland drought<a href="https://doi.org/10.1017/S147926210777661X" target="_blank" rel="noopener noreferrer"><sup>3</sup></a>, iron toxicity<a href="https://doi.org/10.2135/cropsci2011.05.0287" target="_blank" rel="noopener noreferrer"><sup>4</sup></a>, and flooding (submergence, stagnant flooding, and anaerobic germination ability)<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0085953" target="_blank" rel="noopener noreferrer"><sup>5</sup></a>.</li>
                    <li>Rice yellow mottle virus (RYMV) is an endemic pathogen in Africa and affect rice production in the continent. Based on publicly available data, we compiled a list of the most promising 17 RYMV resistant O. glaberrima accessions<sup><a href="https://link.springer.com/article/10.1007/s10745-012-9528-x" target="_blank" rel="noopener noreferrer">6</a>,<a href="https://www.researchgate.net/publication/230464641_Seed_Size_Variation_and_its_Effects_on_Germination_and_Seedling_Vigour_in_Rice" target="_blank" rel="noopener noreferrer">7</a></sup>, which could be used as donors in developing RYMV resistant rice germplasm using marker-assisted selection.</li>
                    <li>African rice gall midge (AfRGM), Orseolia oryzivora Harris and Gagné, is one of the most destructive pests of irrigated and lowland ecologies across 19 African countries. Host-plant resistance is the most effective, durable, and farmer-friendly control measure against this pest. Using publicly available data, we have identified 20 African gall midge resistant O. glaberrima accessions<sup><a href="https://scialert.net/fulltext/?doi=ajps.2013.79.86" target="_blank" rel="noopener noreferrer">8</a>,<a href="https://pubmed.ncbi.nlm.nih.gov/15545652/" target="_blank" rel="noopener noreferrer">9</a></sup> that could be used as trait donors in rice breeding programs.</li>
                    <li>Bacterial blight is caused by different <em>Xanthomonas oryzae</em> <em>oryzae</em> (Xoo) pathogen and it is one of the most devastating diseases in most rice-growing regions in west Africa. Using publicly available information, we compiled a list of the 11 O. glaberrima accessions that were resistant to strains originated both from Mali and the Philippines<a href="https://link.springer.com/article/10.1007%2Fs00122-014-2374-z" target="_blank" rel="noopener noreferrer"><sup>10</sup></a>, which could be used as donors in developing bacterial blight resistant rice germplasm in Africa. However, users should be aware that none of the accessions in this subset were resistant to the most highly virulent strains from Burkina Faso.</li>
                    </ol>
                </p>
                <p><strong><a href="https://www.genesys-pgr.org/subsets/v2r8GGVmq7k:" target="_blank" rel="noopener noreferrer">Summary of all 8 subsets can be download here</a></strong></p>
                <p><strong>To download detailed passport information of each subset, please visit <a href="https://www.genesys-pgr.org/subsets/v2r8GGVmq7k" target="_blank" rel="noopener noreferrer">Genesys</a></strong><strong> or <a href="https://www.genesys-pgr.org/" target="_blank" rel="noopener noreferrer">here</a></strong>, select “Subsets”, select “Africa Rice Center” under “Data provider” on the left side of the screen, followed by “Apply Filter”.</p>
                    
            </div>
          </div>
        </div>
    </section>

@endsection
    