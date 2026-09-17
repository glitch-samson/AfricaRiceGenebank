@extends('layouts.webtemp') 

@section('titre')
Quality Control Analysis
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/activitie/qcaslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Quality Control Analysis</h2>
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
          <h2>Research Activities</h2>
          <p>Quality Control Analysis</p>
        </div><!-- End Section Title -->
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-10 content" data-aos="fade-up" data-aos-delay="100" style="text-align: justify">
                <p>Of the various challenges facing genebank managers and genetic resources scientists<a href="https://www.researchgate.net/publication/221814784_Genomics_of_Gene_Banks_A_Case_Study_in_Rice" target="_blank" rel="noopener noreferrer"><sup>33</sup></a>, taxonomic misclassification (misidentification or misnaming) and mislabeling are the major sources of errors at every genebank, which accounted from 3% to 28% of the errors reported in the literature<sup><a href="https://link.springer.com/article/10.1007%2Fs00122-014-2374-z" target="_blank" rel="noopener noreferrer">10</a>,<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6208651/" target="_blank" rel="noopener noreferrer">28</a>,<a href="https://www.researchgate.net/publication/263421338_Analysis_of_random_and_specific_sequences_of_nuclear_and_cytoplasmic_DNA_in_diploid_and_tetraploid_American_wild_rice_species_Oryza_spp" target="_blank" rel="noopener noreferrer">34</a>–<a href="https://link.springer.com/article/10.1007/s10531-017-1485-7" target="_blank" rel="noopener noreferrer">38</a></sup>. Such types of errors restrict effective use of germplasm for correct purpose in various ways, including difficulty in determining&nbsp; “true-to-type” accessions and /varieties that have been used as parents in crop improvement programs, developing populations for gene discovery and molecular breeding, and other genetic studies<a href="https://pubmed.ncbi.nlm.nih.gov/22801872/" target="_blank" rel="noopener noreferrer"><sup>32</sup></a>.</p>
                <p>In one of our studies<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6208651/" target="_blank" rel="noopener noreferrer"><sup>28</sup></a>, we found out that nearly 3% of the 3,134 rice accessions conserved at the RBCA was either taxonomically misclassified or mislabeled. To develop genotyping quality control (QC) methods for routine use in our operations, &nbsp;we identified 332 species-and sub-species specific diagnostic DArTseq-SNPs that discriminated <em>O. glaberrima</em>, <em>O. barthii</em>, <em>O. longistaminata</em>, <em>O. sativa spp. </em>indica and O. sativa spp. japonica.. Once SNPs of interest have been identified via GBS, DArTseq, and whole-genome sequencing, they must be converted to uniplex genotyping platforms that run one marker at a time, such as Kompetitive allele-specific PCR (KASP) and validated. Next-generation sequencing technologies are cost-effective and high throughput for applications that require high-density markers, while uniplex assays are cost-effective for marker-assisted selection (MAS) and QC analysis<sup><a href="https://link.springer.com/article/10.1007%2Fs11032-012-9773-0" target="_blank" rel="noopener noreferrer">39</a>,<a href="https://link.springer.com/article/10.1007/s11032-013-9917-x" target="_blank" rel="noopener noreferrer">40</a></sup>. <strong>For more results, please read our open-access full research paper from <a href="https://link.springer.com/article/10.1007/s11032-018-0885-z" target="_blank" rel="noopener noreferrer">Molecular Breeding</a></strong>.</p>
                <p>We have converted and validated a subset of the DArTseq-based diagnostic SNPs into KASP assays and developed three panels of 10-36 KASP SNPs for QC analysis. These panels provide users a flexible, rapid turnaround and cost-effective tool that would help ongoing efforts in facilitating germplasm curation and management of rice collection.</p>
            </div>
          </div>
        </div>
    </section>

@endsection
    