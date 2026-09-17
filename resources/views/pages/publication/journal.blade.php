@extends('layouts.webtemp') 

@section('titre')
Journal articles
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/publication/bkslide2.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Journal articles</h2>
          </div>
        </div>
        <div class="carousel-item" style="background-image: url({{asset('files/img/publication/jourslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown"></h2>
          </div>
        </div>
        <div class="carousel-item" style="background-image: url({{asset('files/img/publication/bkslide1.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Publications</h2>
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
          <h2>Publications</h2>
          <p>Journal articles</p>
        </div><!-- End Section Title -->
        <section id="blog-details" class="blog-details section">
            <div class="container">
              <div class="row g-4 ">
                <div class="col-6" data-aos="fade-right">
                  <div class="article">
                    <h2 class="title">
                      <a href="https://doi.org/10.1002/csc2.21395" rel="noopener noreferrer" target="_blank">Genetic variation and population structure of the rice accessions maintained in the AfricaRice genebank using DArTseq</a>           
                    </h2>
                    <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-people"></i>Arnaud Comlan Gouda, Jean Rodrigue Sangare, Karlin Gnikoua, Peterson Wambugu, Trevis D. Huggins, Marie Noelle Ndjiondjop</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Plant Genetic Resources</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 0.1002/csc2.21395</li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2024</li>
                      </ul>
                    </div><!-- End meta top -->
                    <div class="content">
                      <p style="text-align: justify">
                      Utilizing the full potential of rice collections mainly depends on an in-depth exploration and understanding of the vast diversity in its germplasm. The AfricaRice genebank holds the largest collection of rice germplasm originating from the African continent. In the present study, we comprehensively characterized a collection of 9013 accessions, including Oryza barthii A. Chev., Oryza glaberrima Steud., Oryza...
                      </p>
                      <a class="read-more" href="{{asset('files/doc/journal/10.1002csc221395.pdf')}}" download="">Download PDF</a>
                      <a class="read-more" href="https://doi.org/10.1002/csc2.21395" rel="noopener noreferrer" target="_blank">Read More</a>                        
                    </div>
                  </div>                                   
                </div>               
                <div class="col-6" data-aos="fade-left">
                  <div class="article">

                    <h2 class="title">
                      <a href="https://doi.org/10.1094/PHYTO-10-22-0379-R" rel="noopener noreferrer" target="_blank">Characterization of Blast Resistance in a Diverse Rice Panel from Sub-Saharan Africa</a>           
                    </h2>
                    <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-people"></i>SK. Mutiga, P. Orwa, EM. Nganga, MM. Kyallo, F. Rotich, E. Gichuhi, JM. Kimani, DT. Mwongera, VM. Were, MJ. Yanoria, R. Murori, E. Mgonja, C. Ziyomo, L. Wasilwa, F. Bachabi, MN. Ndjiondjop, I. Ouedraogo, JC. Correll & NJ. Talbot</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>APS Online publication - Genetics and Genomics of Resistance</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1094/PHYTO-10-22-0379-R</li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2023</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:113 - N°:7 - Page:1278-1288</li>
                      </ul>
                    </div><!-- End meta top -->
                    <div class="content">
                      <p style="text-align: justify">
                      There is a recent unparalleled increase in demand for rice in sub-Saharan Africa, yet its production is affected by blast disease. Characterization of blast resistance in adapted African rice cultivars can provide important information to guide growers and rice breeders...
                      </p>
                      <a class="read-more" href="{{asset('files/doc/journal/10.1094PHYTO-10-22-0379-R.pdf')}}" download="">Download PDF</a>
                      <a class="read-more" href="https://doi.org/10.1094/PHYTO-10-22-0379-R" rel="noopener noreferrer" target="_blank">Read More</a>                        
                    </div>
                  </div>                                   
                </div>               
                <div class="col-6" data-aos="fade-right">
                  <div class="article">
                    <h2 class="title">
                      <a href="https://doi.org/10.1111/pbi.14004" rel="noopener noreferrer" target="_blank">The MYB transcription factor Seed Shattering 11 controls seed shattering by repressing lignin synthesis in African rice</a>           
                    </h2>
                    <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-people"></i>J. Ning, W. He, L. Wu, L. Chang, M. Hu, Y. Fu, F. Liu, H. Sun, P. Gu, MN. Ndjiondjop, C. Sun & Z. Zhu</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Plant Biotechnology Journal</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1111/pbi.14004</li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2023</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:25 - Issue:5 - Pages: 931-942</li>
                      </ul>
                    </div><!-- End meta top -->
                    <div class="content">
                      <p style="text-align: justify">
                      African cultivated rice (Oryza glaberrima Steud.) was domesticated from its wild progenitor species (Oryza barthii) about 3000 years ago. Seed shattering is one of the main constraints on grain production in African cultivated rice, which causes severe grain losses during harvest...
                      </p>
                      <a class="read-more" href="{{asset('files/doc/journal/10.1111pbi.14004.pdf')}}" download="">Download PDF</a>
                      <a class="read-more" href="https://doi.org/10.1111/pbi.14004" rel="noopener noreferrer" target="_blank">Read More</a>                        
                    </div>
                  </div>

                </div>               
                <div class="col-6" data-aos="fade-left">
                  <div class="article">
                    <h2 class="title">
                      <a href="https://doi.org/10.3390/v15040959" rel="noopener noreferrer" target="_blank">Molecular Tools to Infer Resistance-Breaking Abilities of Rice Yellow Mottle Virus Isolates</a>           
                    </h2>
                    <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-people"></i>L. Dossou, A. Pinel-Galzi, J. Aribi, N. Poulicard, L. Albar, S. Fatogoma, MN. Ndjiondjop, D. Koné & E. Hébrard</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Viruses of Plants, Fungi and Protozoa</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.3390/v15040959</li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2023</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:15 - Issue:4 - 959</li>
                      </ul>
                    </div><!-- End meta top -->
                    <div class="content">
                      <p style="text-align: justify">
                      Rice yellow mottle virus (RYMV) is a major biotic constraint to rice cultivation in Africa. RYMV shows a high genetic diversity. Viral lineages were defined according to the coat protein (CP) phylogeny. Varietal selection is considered as the most efficient way to manage RYMV...
                      </p>
                      <a class="read-more" href="{{asset('files/doc/journal/10.3390v15040959.pdf')}}" download="">Download PDF</a>
                      <a class="read-more" href="https://doi.org/10.3390/v15040959" rel="noopener noreferrer" target="_blank">Read More</a>                        
                    </div>
                  </div>                                 
                </div>               
                <div class="col-6" data-aos="fade-right">
                  <div class="article">
                    <h2 class="title">
                      <a href="https://doi.org/10.1016/j.jgg.2022.02.009" rel="noopener noreferrer" target="_blank">The genetic control of glabrous glume during African rice domestication</a>           
                    </h2>
                    <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-people"></i>L. Chang, M. Hu, J. Ning,  W. He, J. Gao, MN Ndjiondjop, Y. Fu, F. Liu, H. Sun, P. Gu, Chuanqing Sun & Z. Zhu</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Journal of Genetics and Genomics</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1016/j.jgg.2022.02.009</li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2022</li>
                      </ul>
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:49 - Issue:5 - Pages: 427-436</li>
                      </ul>
                    </div><!-- End meta top -->
                    <div class="content">
                      <p style="text-align: justify">
                      African cultivated rice, Oryza glaberrima, is characterized by its glabrous glumes. During domestication, the pubescent glumes of its wild ancestor, Oryza barthii, lost their trichomes, and in this study, we show that glabrous glume 5 (GLAG5)...
                      </p>
                      <a class="read-more" href="{{asset('files/doc/journal/10.1016j.jgg.2022.02.009.pdf')}}" download="">Download PDF</a>
                      <a class="read-more" href="https://doi.org/10.1016/j.jgg.2022.02.009" rel="noopener noreferrer" target="_blank">Read More</a>                        
                    </div>
                  </div>                                 
                </div>               
                <div class="col-sm-6" data-aos="fade-left">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1186/s12284-020-00449-6" rel="noopener noreferrer" target="_blank">Genetics and Genomics of African Rice (Oryza glaberrima Steud) Domestication</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Peterson W. Wambugu, Marie-Noelle Ndjiondjop & Robert Henry</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i></li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1186/s12284-020-00449-6</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2021</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:14 - Issue:6 - Pages: 427-436</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          African rice (Oryza glaberrima Steud) is one of the two independently domesticated rice species, the other one being Asian rice (Oryza sativa L.). Despite major progress being made in understanding the evolutionary and domestication history of African rice...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1186s12284-020-00449-6.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1186/s12284-020-00449-6" rel="noopener noreferrer" target="_blank">Read More</a>
                        
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1016/j.gfs.2021.100557" rel="noopener noreferrer" target="_blank">CGIAR genebank viability data reveal inconsistencies in seed collection management</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>F.R. Hay, K.J. Whitehouse, R.H. Ellis, N.R.S. Hamilton, C. Lusty, M.N. Ndjiondjop, D. Tia, P. Wenzl, L.G. Santos, M. Yazbek, V.C.R. Azevedo, O.H. Peerzada, M. Abberton, O. Oyatomi, F. Guzman, G. Capilit, A. Muchugi, Z. Kinyanjui</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Global Food Security</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1016/j.gfs.2021.100557</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2021</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:30</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Genebanks underpin global food security, conserving and distributing agrobiodiversity for use in research and breeding. The CGIAR collections include >700,000 seed accessions, held in trust as global public goods...
                        </p>
                          <a class="read-more" href="{{asset('files/doc/journal/10.1016j.gfs.2021.100557.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://doi.org/10.1016/j.gfs.2021.100557" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.3390/plants10020328" rel="noopener noreferrer" target="_blank">Phytosanitary Interventions for Safe Global Germplasm Exchange and the Prevention of Transboundary Pest Spread: The Role of CGIAR Germplasm Health Units</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>P.L. Kumar, M. Cuervo, J.F. Kreuze, G. Muller, G. Kulkarni, S.G. Kumari, S. Massart, M. Mezzalama, A. Alakonya, A. Muchugi, I. Graziosi, M.N.Ndjiondjop, R. Sharma & A.T. Negawo</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1186/s12284-020-00449-6</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2021</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:10 - Issue:2 </li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          African rice (Oryza glaberrima Steud) is one of the two independently domesticated rice species, the other one being Asian rice (Oryza sativa L.). Despite major progress being made in understanding the evolutionary and domestication history of African rice...
                        </p>                        
                          <a class="read-more" href="{{asset('files/doc/journal/plants-10-00328.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://doi.org/10.3390/plants10020328" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1038/s41598-020-70842-0" rel="noopener noreferrer" target="_blank">Comparisons of molecular diversity indices, selective sweeps and population structure of African rice with its wild progenitor and Asian rice</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M.N. Ndjiondjop, N. Alachiotis, P. Pavlidis, A. Goungoulou, S.B. Kpeki, D. Zhao & K. Semagn</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Theoretical and Applied Genetics</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1038/s41598-020-70842-0</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2020</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:132 - pages: 1145–1158 </li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Previous studies conducted on limited number of accessions have reported very low genetic variation in African rice (Oryza glaberrima Steud.) as compared to its wild progenitor (O. barthii A. Chev.) and to Asian rice (O. sativa L.)...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/s00122-018-3268-2.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1038/s41598-020-70842-0" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1038/s41598-020-70842-0" rel="noopener noreferrer" target="_blank">Comparisons of sampling methods for assessing intra- and inter-accession genetic diversity in three rice species using genotyping by sequencing</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>A.C. Gouda, M.N. Ndjiondjop, G.L. Djedatin, M.L. Warburton, A. Goungoulou, S.B. Kpeki, A. N’Diaye & K. Semagn</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Scientific Reports</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1038/s41598-020-70842-0</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2020</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:10 - N°:13995</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          To minimize the cost of sample preparation and genotyping, most genebank genomics studies in self-pollinating species are conducted on a single individual to represent an accession, which may be heterogeneous with...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/s41598-020-70842-0.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1038/s41598-020-70842-0" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="http://dx.doi.org/10.3390/plants9101296" rel="noopener noreferrer" target="_blank">Germplasm Acquisition and Distribution by CGIAR Genebanks</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M. Halewood, N. Jamor, I.L. Noriega, N.L. Anglin, P. Wenzl, T. Payne, M.N. Ndjiondjop, L. Guarino, P.L. Kumar, M. Yazbek, A. Muchugi, V. Azevedo, M. Tchamba, C.S. Jones, R. Venuprasad, N. Roux, E. Rojas & C. Lusty</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.3390/plants9101296</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2020</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:9 - Issue:10 </li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          The international collections of plant genetic resources for food and agriculture (PGRFA) hosted by 11 CGIAR Centers are important components of the United Nations Food and Agriculture Organization’s global system of conservation and use of PGRFA...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/plants-09-01296-v2.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="http://dx.doi.org/10.3390/plants9101296" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.3390/plants8100376" rel="noopener noreferrer" target="_blank">Advances in Molecular Genetics and Genomics of African Rice (Oryza glaberrima Steud)</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Peterson W. Wambugu, Marie-Noelle Ndjiondjop & Robert Henry</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.3390/plants8100376</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2019</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:8 - Issue:10 </li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          African rice (Oryza glaberrima) has a pool of genes for resistance to diverse biotic and abiotic stresses, making it an important genetic resource for rice improvement. African rice has potential for breeding for climate resilience and adapting rice cultivation to climate change....
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/plants-08-00376.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.3390/plants8100376" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1007/s11032-018-0885-z" rel="noopener noreferrer" target="_blank">Development of species diagnostic SNP markers for quality control genotyping in four rice (Oryza L.) species</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M.N. Ndjiondjop, K. Semagn, J. Zhang, A.C. Gouda, S.B. Kpeki, A. Goungoulou, P. Wambugu, K.N. Dramé, I.K. Bimpong & D. Zhao</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i> Molecular Breeding</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1007/s11032-018-0885-z</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:38 - Issue:131 </li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Species misclassification (misidentification) and handling errors have been frequently reported in various plant species conserved at diverse gene banks, which could restrict use of germplasm for correct purpose. The objectives of the present study were to (i) determine the extent of...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/s11032-018-0885-z.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1007/s11032-018-0885-z" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1038/s41598-021-97689-3" rel="noopener noreferrer" target="_blank">Development and validation of diagnostic SNP markers for quality control genotyping in a collection of four rice (Oryza) species</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M.N. Ndjiondjop, K. Semagn, J. Zhang, A.C. Gouda, SB. Kpeki, A. Goungoulou, P. Wambugu, K.N. Dramé, I.K. Bimpong & D. Zhao</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Molecular Breeding</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1038/s41598-021-97689-3</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:32 - Issue:131</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Morphological identification of closely related rice species, particularly those in the Oryza AA genome group, presents major challenges and often results in cases of misidentification. Recent work by this group identified diagnostic single nucleotide polymorphic (SNP) markers specific for...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/s41598-021-97689-3.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1038/s41598-021-97689-3" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.2135/cropsci2017.04.0255" rel="noopener noreferrer" target="_blank">Screening African Rice (Oryza glaberrima) for Tolerance to Abiotic Stresses: II. Lowland Drought</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>A.A. Shaibu, M.I. Uguru, M. Sow, A.T. Maji, M.N. Ndjiondjop, R. Venuprasad</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Crop Breeding & Genetics</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.2135/cropsci2017.04.0255</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:58 - Issue:1 - Pages: 133-142</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Drought is a major constraint to rice (Oryza spp.) production in sub-Saharan Africa. Oryza glaberrima Steud., the cultivated rice species that originated from West Africa, is well-adapted to its growing ecologies. This study was initiated to identify...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.2135cropsci2017.04.0255.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.2135/cropsci2017.04.0255" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1093/bfgp/ely014" rel="noopener noreferrer" target="_blank">Role of genomics in promoting the utilization of plant genetic resources in genebanks</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Peterson W Wambugu, Marie-Noelle Ndjiondjop & Robert J Henr</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Crop Breeding & Genetics</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1093/bfgp/ely014</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 17 - Issue: 3 - Pages: 198–206</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Global efforts have seen the world’s plant genetic resources (PGRs) conserved in about 1625 germ plasm repositories. Utility of these resources is important in increasing the resilience and productivity of agricultural production systems...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1093bfgpely014.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1093/bfgp/ely014" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1016/j.cub.2018.05.066" rel="noopener noreferrer" target="_blank">The Rise and Fall of African Rice Cultivation Revealed by Analysis of 246 New Genomes</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>P. Cubry, C. Tranchant-Dubreuil, A.C. Thuillet, C. Monat, M.N. Ndjiondjop, K. Labadie, C. Cruaud, S. Engelen, N. Scarcelli, B. Rhoné, C. Burgarella, C. Dupuy, P. Larmande, P. Wincker, O. François, F. Sabot, Y. Vigouroux</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Current Biology</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1016/j.cub.2018.05.066</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 28 - Issue: 14 - Pages: 2274-2282</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          African rice (Oryza glaberrima) was domesticated independently from Asian rice. The geographical origin of its domestication remains elusive. Using 246 new whole-genome sequences, we inferred the cradle of its...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1016j.cub.2018.05.066.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1016/j.cub.2018.05.066" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.3389/fpls.2018.00446" rel="noopener noreferrer" target="_blank">Assessment of Genetic Variation and Population Structure of Diverse Rice Genotypes Adapted to Lowland and Upland Ecologies in Africa Using SNPs</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M.N. Ndjiondjop, K. Semagn, M. Sow, B. Manneh, A.C. Gouda, S.B. Kpeki, E. Pegalepo, P. Wambugu, M. Sie, M.L. Warburton</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Frontiers in Plant Science</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.3389/fpls.2018.00446</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 9 - Article: 446</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Using interspecific crosses involving Oryza glaberrima Steud. as donor and O. sativa L. as recurrent parents, rice breeders at the Africa Rice Center developed several ‘New Rice for Africa (NERICA)’ improved varieties...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.3389fpls.2018.00446.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.3389/fpls.2018.00446" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.3389/fpls.2017.01748" rel="noopener noreferrer" target="_blank">Genetic Variation and Population Structure of <i>Oryza glaberrima</i> and Development of a Mini-Core Collection Using DArTseq</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M.N. Ndjiondjop, K. Semagn, A.C. Gouda, S.B. Kpeki, D.D. Tia, M. Sow, A. Goungoulou, M. Sie, X. Perrier, A. Ghesquiere, M.L. Warburton</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Frontiers in Plant Science</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.3389/fpls.2017.01748</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2017</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 8 - Article: 1748</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          The sequence variation present in accessions conserved in genebanks can best be used in plant improvement when it is properly characterized and published. Using low cost and high density single nucleotide polymorphism (SNP) assays, the genetic diversity, population structure, and...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.3389fpls.2017.01748.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.3389/fpls.2017.01748" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1111/pbi.12752" rel="noopener noreferrer" target="_blank">Sequencing of bulks of segregants allows dissection of genetic control of amylose content in rice</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Peterson Wambugu, Marie-Noelle Ndjiondjop, Agnelo Furtado, Robert Henry</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Plant Biotechnology Journal</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1111/pbi.12752</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2017</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 16 - Issue: 1 - Pages: 100-110</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Amylose content (AC) is a key quality trait in rice. A cross between Oryza glaberrima (African rice) and Oryza sativa (Asian rice) segregating for AC was analysed by sequencing bulks of individuals with high and low AC. SNP associated with...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1111pbi.12752.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1111/pbi.12752" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1093/gbe/evw253" rel="noopener noreferrer" target="_blank">De Novo Assemblies of Three Oryza glaberrima Accessions Provide First Insights about Pan-Genome of African Rices</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>C. Monat, B. Pera, M.N. Ndjiondjop, M. Sow, C.Tranchant-Dubreuil, L. Bastianelli, A. Ghesquière & F. Sabot</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Genome Biology and Evolution</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1093/gbe/evw253</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2016</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 9 - Issue: 1 - Pages: 1-6</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Oryza glaberrima is one of the two cultivated species of rice, and harbors various interesting agronomic traits, especially in biotic and abiotic resistance, compared with its Asian cousin O. sativa. A previous reference genome was published but...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1093gbeevw253.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1093/gbe/evw253" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://link.springer.com/article/10.1007/s10722-013-0026-9" rel="noopener noreferrer" target="_blank">Genetic diversity, population structure and differentiation of rice species from Niger and their potential for rice genetic resources conservation and enhancement</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M. Sow, M.N. Ndjiondjop, A. Sido, C. Mariac, M. Laing & G. Bezançon</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Genetic Resources and Crop Evolution</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1093/gbe/evw253</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2013</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 61 - Issue: 1 - Pages: 199-213</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Rice genetic resources conservation and evaluation is crucial to ensure germplasm sources for further crop breeding. We conducted a wide collection of Oryza species in Niger and characterize its...
                        </p>
                        <a class="read-more" href="https://link.springer.com/article/10.1007/s10722-013-0026-9" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1016/j.plantsci.2011.09.010" rel="noopener noreferrer" target="_blank">Agro-morphological characterization of a population of introgression lines derived from crosses between IR 64 (Oryza sativa indica) and TOG 5681 (Oryza glaberrima) for drought tolerance</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>R. Bocco, M. Lorieux, P.A. Seck, K. Futakuchi, B. Manneh, H. Baimey, M.N. Ndjiondjop</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Plant Science</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 183 - Pages: 65-76</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1016/j.plantsci.2011.09.010</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2012</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          The study evaluated effects of drought on some agro-morphological traits of 60 rice genotypes comprising 54 introgression lines with their parents, IR 64 (Oryza sativa) and TOG 5681 (Oryza glaberrima) and four NERICA-L varieties...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1016j.plantsci.2011.09.010.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1016/j.plantsci.2011.09.010" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://www.ajol.info/index.php/ajb/article/view/94661" rel="noopener noreferrer" target="_blank">Suitability of a selected set of simple sequence repeats (SSR) markers for multiplexing and rapid molecular characterization of African rice (Oryza glaberrima Steud.)</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>KN Dramé, I Sanchez, G Gregorio, MN Ndjiondjop</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>African Journal of Biotechnology</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2011</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 10 - Issue: 35 - Pages: 6675-6685</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          African rice (Oryza glaberrima) was neglected for a long time by researchers but gained attention with the success of NERICA varieties. While AfricaRice holds a collection of about 2,500 O. glaberrima samples only four...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/94661-973-243602-1-10-20130927.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://www.ajol.info/index.php/ajb/article/view/94661" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>                
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1094/PDIS-08-10-0558" rel="noopener noreferrer" target="_blank">Evaluation of African Cultivated Rice Oryza glaberrima for Resistance to Bacterial Blight</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>G. Djedatin, M.N. Ndjiondjop, T. Mathieu, C.M. Vera Cruz, A. Sanni, A. Ghesquière & Valérie Verdier</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 110.1094/PDIS-08-10-0558</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2011</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 95 - Issue: 4 - Pages: 441-447</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Xanthomonas oryzae pv. oryzae is the causal agent of bacterial blight in rice, one of the most devastating diseases of rice worldwide. African X. oryzae pv. oryzae strains belong to a clear genetic group distinct from those of Asia. Three new races of the pathogen were...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/pdis-08-10-0558.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1094/PDIS-08-10-0558" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">
                  <article class="article">
                      <h2 class="title">
                        <a href="http://dx.doi.org/10.1007/s00122-010-1300-2" rel="noopener noreferrer" target="_blank">Identification of a second major resistance gene to Rice yellow mottle virus, RYMV2, in the African cultivated rice species, O. glaberrima</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>D. Thiémélé, A. Boisnard, M.N. Ndjiondjop, S. Chéron, Y. Séré, S. Aké, A. Ghesquière & L. Albar</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Theoretical and Applied Genetics</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1007/s00122-010-1300-2</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2010</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 121 - Pages: 169–179</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          Rice yellow mottle virus (RYMV) is the most damaging rice-infecting virus in Africa. However, few sources of high resistance and only a single major resistance gene, RYMV1, are known to date...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1007s00122-010-1300-2.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="http://dx.doi.org/10.1007/s00122-010-1300-2" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1016/j.plantsci.2010.06.006" rel="noopener noreferrer" target="_blank">Drought resistance in an interspecific backcross population of rice (Oryza spp.) derived from the cross WAB56-104 (O. sativa) × CG14 (O. glaberrima)</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M.N. Ndjiondjop, B. Manneh, M. Cissoko, N.K. Drame, R. G. Kakai, R. Bocco, H. Baimey & M. Wopereis</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>Plant Science</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1016/j.plantsci.2010.06.006</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2010</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 176 - Issue: 4 - Pages: 364-373</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          The ability to identify drought-resistant lines in all seasons would accelerate variety introduction. A total of 202 backcross-inbred lines of rice were subjected to drought during the 2006 and 2007 dry seasons at...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1016j.plantsci.2010.06.006.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1016/j.plantsci.2010.06.006" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://doi.org/10.1111/j.1365-313X.2006.02792.x" rel="noopener noreferrer" target="_blank">Mutations in the eIF(iso)4G translation initiation factor confer high resistance of rice to Rice yellow mottle virus</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>L. Albar, M. Bangratz-Reyser, E. Hébrard, M.N. Ndjiondjop, M. Jones & A.n Ghesquière</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-exclude"></i>The Plant Journal</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1111/j.1365-313X.2006.02792.x</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2006</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume: 47 - Issue: 3 - Pages: 417-426</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                          We report here evidence of the role that the isoform of the eukaryotic translation initiation factor 4G (eIF(iso)4G) plays in naturally occurring resistance in plant/virus interactions. A genetic and physical mapping approach was...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.1111j.1365-313X.2006.02792.x.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://doi.org/10.1111/j.1365-313X.2006.02792.x" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">
                  <article class="article">
                      <h2 class="title">
                        <a href="https://scialert.net/abstract/?doi=ajps.2006.50.53" rel="noopener noreferrer" target="_blank">Identification and Differentiation of Three Nigerian Orseolia sp. by RAPD Markers</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>F.E. Nwilene, A. Onasanya, O. Okhidievbie, Y. Sere, M.N. Ndjiondjop & I. Ingelbrecht</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Asian Journal of Plant Sciences</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.3923/ajps.2006.50.53</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2006</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:5 - Issue:1 - Page:50-53</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                            Identification and differentiation of three Nigerian Orseolia sp. (Orseolia nwanzei, Orseolia bonzii and Orseolia oryzivora) was carried out using Random Amplified Polymorphic DNA (RAPD) markers. Ninety operon primers were screened, from which 6 showed polymorphism among the three species tested, generating 54 bands, 69% of...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.3923ajps.2006.50.53.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://scialert.net/abstract/?doi=ajps.2006.50.53" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://scialert.net/abstract/?doi=ajps.2006.429.437" rel="noopener noreferrer" target="_blank">Genetic Relationships among Rice Varieties Based On Expressed Sequence Tags and Microsatellite Markers</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Marie Noelle Ndjiondjop, Kassa Semagn, Mamadou Cissoko, Hirochi Tsunematsu & Monty Jones</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Asian Journal of Plant Sciences</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.3923/ajps.2006.429.437</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2006</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:5 - Issue:3 - Page:429-437</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                            The genetic relationship and distance among rice varieties widely being used as parents by the African Rice Center (WARDA) are largely unknown but of great interest for breeding programs. The genetic relationship among 16 rice varieties was investigated using 83 EST and 174 SSR markers. 
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/10.3923ajps.2006.429.437.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://scialert.net/abstract/?doi=ajps.2006.429.437" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                  <article class="article">
                      <h2 class="title">
                        <a href="https://www.ajol.info/index.php/ajb/article/view/56083" rel="noopener noreferrer" target="_blank">Progress and prospects of marker assisted backcrossing as a tool in crop breeding programs</a>
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>K Semagn, Å Bjørnstad & MN Ndjiondjop</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>African Journal of Biotechnology</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>eISSN: 1684-5315</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2006</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:5 - Issue:25 - Page:2588-2603</li>
                        </ul>
                      </div>      
                      <div class="content">
                        <p style="text-align: justify">
                            Marker assisted backcrossing (MAB) is one of the most anticipated and frequently cited benefits of molecular markers as indirect selection tools in breeding programs. However, routine implementations of MAB in ongoing plant breeding...
                        </p>
                        <a class="read-more" href="{{asset('files/doc/journal/ajb5.25.2588-2603.pdf')}}" download="">Download PDF</a>
                        <a class="read-more" href="https://www.ajol.info/index.php/ajb/article/view/56083" rel="noopener noreferrer" target="_blank">Read More</a>
                      </div> 
                  </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">      
                    <article class="article">
                        <h2 class="title">
                          <a href="https://www.ajol.info/index.php/ajb/article/view/56080" rel="noopener noreferrer" target="_blank">An overview of molecular marker methods for plants</a>
                        </h2>
                        <div class="meta-top">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-people"></i>K Semagn, Å Bjørnstad & MN Ndjiondjop</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>African Journal of Biotechnology</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-flag"></i>eISSN: 1684-5315</li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2006</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:5 - Issue:25 - Page:2540-2568</li>
                          </ul>
                        </div>      
                        <div class="content">
                          <p style="text-align: justify">
                              The development and use of molecular markers for the detection and exploitation of DNA polymorphism is one of the most significant developments in the field of molecular genetics. The presence of various types of molecular markers, and differences in...
                          </p>
                          <a class="read-more" href="{{asset('files/doc/journal/ajb5.25.2540-2568.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://www.ajol.info/index.php/ajb/article/view/56080" rel="noopener noreferrer" target="_blank">Read More</a>
                        </div> 
                    </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                    <article class="article">
                        <h2 class="title">
                          <a href="https://www.ajol.info/index.php/ajb/article/view/56082" rel="noopener noreferrer" target="_blank">Principles, requirements and prospects of genetic mapping in plants</a>
                        </h2>
                        <div class="meta-top">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-people"></i>K Semagn, Å Bjørnstad & MN Ndjiondjop</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>African Journal of Biotechnology</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-flag"></i>eISSN: 1684-5315</li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2006</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:5 - Issue:25 - Page:2569-2587</li>
                          </ul>
                        </div>      
                        <div class="content">
                          <p style="text-align: justify">
                              Genetic mapping (also known as linkage mapping or meiotic mapping) refers to the determination of the relative position and distances between markers along chromosomes. Genetic map distances between two markers are defined as the...
                          </p>
                          <a class="read-more" href="{{asset('files/doc/journal/ajb5.25.2569-2587.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://www.ajol.info/index.php/ajb/article/view/56082" rel="noopener noreferrer" target="_blank">Read More</a>
                        </div> 
                    </article>
                </div>                
                <div class="col-sm-6" data-aos="fade-left">      
                    <article class="article">
                        <h2 class="title">
                          <a href="https://www.ajol.info/index.php/ajb/article/view/42852" rel="noopener noreferrer" target="_blank">Microsatellites and agronomic traits for assessing genetic relationships among 18 New Rice for Africa (NERICA) varieties</a>
                        </h2>
                        <div class="meta-top">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-people"></i>K Semagn, MN Ndjiondjop & M Cissoko</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>African Journal of Biotechnology</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-flag"></i>eISSN: 1684-5315</li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2006</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:5 - Issue:10 - Page:800-810</li>
                          </ul>
                        </div>      
                        <div class="content">
                          <p style="text-align: justify">
                              The Africa Rice Center (WARDA) has developed several interspecific rice varieties by crossing the high yielding Asian rice (Oryza sativa subsp. japonica) with the locally adapted African rice (Oryza glaberrima). Eighteen varieties were named with the prefix NERICA (New Rice for Africa) but...
                          </p>
                          <a class="read-more" href="{{asset('files/doc/journal/ajb5.10.800-810.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://www.ajol.info/index.php/ajb/article/view/42852" rel="noopener noreferrer" target="_blank">Read More</a>
                        </div> 
                    </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                    <article class="article">
                        <h2 class="title">
                          <a href="https://link.springer.com/article/10.1007/s00122-003-1258-4" rel="noopener noreferrer" target="_blank">Fine genetic mapping of a gene required for Rice yellow mottle virus cell-to-cell movement</a>
                        </h2>
                        <div class="meta-top">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-people"></i>L. Albar, M.N. Ndjiondjop, Z. Esshak, A. Berger, A. Pinel, M. Jones, D. Fargette & A. Ghesquière</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Theoretical and Applied Genetics</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI: 10.1007/s00122-003-1258-4</li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2003</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:107 - Issue:2 - Page:371-378</li>
                          </ul>
                        </div>      
                        <div class="content">
                          <p style="text-align: justify">
                            The very high resistance to Rice yellow mottle virus observed in the two rice varieties Gigante (Oryza sativa) and Tog 5681 (O. glaberrima) is monogenic and recessive. Bulked segregant analysis was carried out to identify AFLP markers linked to the resistance gene...
                          </p>
                          <a class="read-more" href="{{asset('files/doc/journal/10.1007s00122-003-1258-4.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://link.springer.com/article/10.1007/s00122-003-1258-4" rel="noopener noreferrer" target="_blank">Read More</a>
                        </div> 
                    </article>
                </div>
                <div class="col-sm-6" data-aos="fade-left">      
                    <article class="article">
                        <h2 class="title">
                          <a href="https://www.sciencedirect.com/science/article/pii/S0885576501903686" rel="noopener noreferrer" target="_blank">High resistance to rice yellow mottle virus in two cultivated rice cultivars is correlated with failure of cell to cell movement</a>
                        </h2>
                        <div class="meta-top">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-people"></i>M.N. Ndjiondjop, C. Brugidou, S. Zang, D. Fargette, A. Ghesquiere & C. Fauquet</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Physiological and Molecular Plant Pathology</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI: 10.1006/pmpp.2001.0368</li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2001</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:59 - Issue:6 - Page:309-316</li>
                          </ul>
                        </div>      
                        <div class="content">
                          <p style="text-align: justify">
                            Rice yellow mottle virus (RYMV) accumulation in protoplasts and whole plants was investigated in two highly resistant cultivars, Tog5681 (Oryza glaberrima) and Gigante (Oryza sativa). Three susceptible cultivars, i.e. one O. glaberrima Tog5673 and...
                          </p>
                          <a class="read-more" href="{{asset('files/doc/journal/10.1006pmpp.2001.0368.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://www.sciencedirect.com/science/article/pii/S0885576501903686" rel="noopener noreferrer" target="_blank">Read More</a>
                        </div> 
                    </article>
                </div>
                <div class="col-sm-6" data-aos="fade-right">      
                    <article class="article">
                        <h2 class="title">
                          <a href="https://link.springer.com/article/10.1007/s001229900061" rel="noopener noreferrer" target="_blank">A first interspecific Oryza sativa x Oryza glaberrima microsatellite-based genetic linkage map</a>
                        </h2>
                        <div class="meta-top">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-people"></i>M. Lorieux, M.N. Ndjiondjop & A. Ghesquière</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Theoretical and Applied Genetics</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI: 10.1007/s001229900061</li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2000</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:100 - Issue:3-4 - Page:593-601</li>
                          </ul>
                        </div>      
                        <div class="content">
                          <p style="text-align: justify">
                            Oryza glaberrima is an endemic African cultivated rice species. To provide a tool for evaluation and utilisation of the potential of O. glaberrima in rice breeding, we developed an interspecific O. glaberrima×Oryza sativa genetic linkage map. It was based on PCR markers...
                          </p>
                          <a class="read-more" href="{{asset('files/doc/journal/10.1007s001229900061.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://link.springer.com/article/10.1007/s001229900061" rel="noopener noreferrer" target="_blank">Read More</a>
                        </div> 
                    </article>
                </div> 
                <div class="col-sm-6" data-aos="fade-left">      
                    <article class="article">
                        <h2 class="title">
                          <a href="https://apsjournals.apsnet.org/doi/abs/10.1094/PDIS.1999.83.10.931" rel="noopener noreferrer" target="_blank">The genetic basis of high resistance to rice yellow mottle virus (RYMV) in cultivars of two cultivated rice species</a>
                        </h2>
                        <div class="meta-top">
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-people"></i>M. Lorieux, M.N. Ndjiondjop & A. Ghesquière</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Plant Disease</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI: 10.1094/PDIS.1999.83.10.931</li>
                            <li class="d-flex align-items-center"><i class="bi bi-clock"></i>1999</li>
                          </ul>
                          <ul>
                            <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>Volume:83 - Issue:10 - Page:931-935</li>
                          </ul>
                        </div>      
                        <div class="content">
                          <p style="text-align: justify">
                            Three cultivars of Oryza sativa (IR64, Azucena, and Gigante) and four cultivars of O. glaberrima (Tog5681, Tog5673, CG14, and SG329) were evaluated for their resistance to two isolates of rice yellow mottle virus (RYMV) by enzyme-linked immunosorbent assay (ELISA) and symptomatology...
                          </p>
                          <a class="read-more" href="{{asset('files/doc/journal/pdis.1999.83.10.931.pdf')}}" download="">Download PDF</a>
                          <a class="read-more" href="https://apsjournals.apsnet.org/doi/abs/10.1094/PDIS.1999.83.10.931" rel="noopener noreferrer" target="_blank">Read More</a>
                        </div> 
                    </article>
                </div>            
              </div>
            </div>
        </section>
    </section>

@endsection
    