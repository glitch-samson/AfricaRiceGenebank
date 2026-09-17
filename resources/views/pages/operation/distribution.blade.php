@extends('layouts.webtemp') 

@section('titre')
Distribution
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/operation/dist/slide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Distribution</h2>
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
          <p>Distribution</p>
        </div><!-- End Section Title -->
        <div class="container">
            <div class="row content g-5 align-items-center">
            <div class="col-lg-9" data-aos="fade-right" style="text-align: justify">
                <h2></h2>
                <p>The distribution of rice germplasm for breeding, research, and education is one of the target indicators used for evaluating the impact of a given genebank and to get insight on the species and particular accessions that have been frequently requested by users. &nbsp;The Biodiversity Center for Africa provides small quantities of seed samples free of charge to any individual or organization anywhere in the world for breeding, research, and education/training related to food and agriculture. Like other public genebanks, access to our germplasm is governed by the ITPGRFA and the Convention on Biological Diversity (CBD). Both ITPGRFA and CBD emphasize the conservation and sustainable utilization of biological diversity along with fair and equitable sharing of beneﬁts arising from its use.</p>
                <p>Seed samples are shipped to users in accordance with local, regional, and international standards, including Standard Material Transfer Agreement (SMTA), Phytosanitary certification, and import/export permits. <a href="http://www.fao.org/3/a-bc083e.pdf" target="_blank" rel="noopener noreferrer">The SMTA</a> is a standard agreement that sets out the terms and conditions under which plant genetic resources for food and agriculture are transferred from one person or organization (“the provider”) to another (“the recipient”) under the multilateral system of the ITPGRFA. Both the provider and recipient must understand and respect the rights and obligations of the SMTA. Based on our germplasm distribution database from 1995 to 2019, a total of 124,604 seed samples were shipped to 164 institutions across 57 countries. Nearly 63% of the seed samples distributed to users consisted of accessions with a digital object identifier (<a href="http://www.fao.org/3/a-bq549e.pdf" target="_blank" rel="noopener noreferrer">DOI</a>), while the remaining samples were either accession without DOI (11.7%) or breeding materials with neither permanent accession number nor DOI (25.6%). The accessions with DOI that were distributed to users accounted for 66.3% of our current collection (14,114 of the 21,300 accessions) available at <a href="https://www.genesys-pgr.org/a" target="_blank" rel="noopener noreferrer">Genesys</a> .</p>
                <p>The frequency of distribution of accessions with DOI varied from 1 to 345 with an overall average of 5 shipments, which was dependent on&nbsp; the nature of germplasm (wild, landraces, improved varieties, breeding materials):</p>
                <ol>
                <li>Nearly 86% of the <em> glaberrima</em> collection has been distributed on average 6-times (ranged between 1 and 133 times) to 97 institutions across 43 countries.</li>
                <li>About 64% of the <em> sativa</em> collection was distributed on average 5-times (ranged between 1 and 271 times) to 141 institutions across 55 countries.</li>
                <li>About 40% of the interspecific genotypes derived from crosses involving O. glaberrima and O. sativa were distributed on average 19-times (ranged between 1 and 34 times) to 101 institutions across 46 countries.</li>
                </ol>
                <p >Between 2012 and 2019 alone, we have distributed 53,000 samples to 105 institutions and 51 countries across all continents (<strong>Figure 1</strong>). The distributed samples represented 22,097 accessions of which 9,718 accessions had a digital object identifier (DOI) and are publicly available in <a href="https://www.genesys-pgr.org/a" target="_blank" rel="noopener noreferrer">Genesys</a> . Although most samples were sent to the National Agricultural Research Systems (NARS), CGIAR, and Universities, some accessions also were shipped to non-government organizations, the private sector, and farmer organizations <strong>(Figure 2)</strong>. One of the obvious lessons that we learned from our 25 years rice germplasm distribution database was the user’s preference in requesting seeds of accessions that are familiar to them.&nbsp; To promote the use of our collection in rice improvement, we are currently making major emphasis to generate and share phenotype and molecular characterization data, which has been completed for nearly 9,000 accessions.</p>
           

            </div>
            <div class="col-lg-3 pt-4 pt-lg-0" data-aos="fade-left">
                <img src="{{asset('files/img/operation/dist/dist1.png')}}" alt="" class="rounded-2 mg-fluid">
                <img src="{{asset('files/img/operation/dist/dist2.png')}}" alt="" class="rounded-2 img-fluid mt-1">
                <p style="text-align: justify;"><b>Figure 1: </b>Summary of germplasm distribution from 2012 to 2019. About 46% of the 21,300 accessions were distributed between 1 and 224 times over 8 years.</p>
                <img src="{{asset('files/img/operation/dist/dist3.png')}}" alt="" class="rounded-2 img-fluid">
                <img src="{{asset('files/img/operation/dist/dist4.png')}}" alt="" class="rounded-2 img-fluid mt-1">
            </div>
            </div>
        </div>
    </section>

@endsection
    