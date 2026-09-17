@extends('layouts.webtemp') 

@section('titre')
Book chapters
@endsection



@section('contenu')

    <section id="hero" class="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" class="container-fluid p-0 m-0 carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url({{asset('files/img/publication/bkslide.jpg')}}); background-size: cover;">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Book chapters</h2>
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
          <p>Book chapters</p>
        </div><!-- End Section Title -->
        <section id="blog-details" class="blog-details section">
            <div class="container">
              <article class="row g-4">
                <div class="col-12" data-aos="fade-right">
                  <article class="row article">
                    <div class="col-2">
                      <a href="https://link.springer.com/chapter/10.1007/978-981-99-5245-8_10" rel="noopener noreferrer" target="_blank">
                        <img src="{{asset('files/img/publication/bk1.jpg')}}" alt="" class="w-100">
                      </a>
                    </div>
                    <div class="col-10">                    
                      <h2 class="title">
                        <a href="https://link.springer.com/chapter/10.1007/978-981-99-5245-8_10" rel="noopener noreferrer" target="_blank">Application of Genomics in Supporting Efficient Conservation and Utilization of Plant Genetic Resources</a>           
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Peterson W. Wambugu, Marie-Noelle Ndjiondjop, Parimalan Rangan & Robert J. Henry</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Sustainable Utilization and Conservation of Plant Genetic Diversity</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1007/978-981-99-5245-8_10</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>339–361</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2024</li>
                        </ul>
                      </div><!-- End meta top -->
                      <div class="content">
                        <p style="text-align: justify">
                          This publication highlights the growing role of genomic tools in improving seed bank operations and plant genetic resource conservation. Genomics is transforming how 
                          gene banks acquire and manage germplasm by enabling conservation gap analysis and identifying rare and novel genetic resources. Through transcriptomic approaches, 
                          researchers can identify candidate genes linked to desirable traits, boosting efforts to conserve biologically important plant species. Key benefits include reducing 
                          genetic redundancy...
                        </p>
                        <a class="read-more text-end" href="https://link.springer.com/chapter/10.1007/978-981-99-5245-8_10" rel="noopener noreferrer" target="_blank">Read More</a>                        
                      </div>  
                    </div>
                  </article>
                </div>                
                <div class="col-12" data-aos="fade-left">
                  <article class="row article">
                    <div class="col-2">
                      <a href="https://link.springer.com/chapter/10.1007/978-3-319-71997-9_15" rel="noopener noreferrer" target="_blank">
                        <img src="{{asset('files/img/publication/bk2.jpg')}}" alt="" class="w-100">
                      </a>
                    </div>
                    <div class="col-10">                    
                      <h2 class="title">
                        <a href="https://link.springer.com/chapter/10.1007/978-3-319-71997-9_15" rel="noopener noreferrer" target="_blank">Oryza longistaminata A. Chev. and Röhr</a>           
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Marie Noelle Ndjiondjop, Peterson Wambugu, Tia Dro, Raphael Mufumbo, Jean Sangare & Karlin Gnikoua</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>The Wild Oryza Genomes</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1007/978-3-319-71997-9_15</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>165-176</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                      </div><!-- End meta top -->
                      <div class="content">
                        <p style="text-align: justify">
                          This publication highlights the growing role of genomic tools in improving seed bank operations and plant genetic resource conservation. Genomics is transforming how 
                          gene banks acquire and manage germplasm by enabling conservation gap analysis and identifying rare and novel genetic resources. Through transcriptomic approaches, 
                          researchers can identify candidate genes linked to desirable traits, boosting efforts to conserve biologically important plant species. Key benefits include reducing 
                          genetic redundancy...
                        </p>
                        <a class="read-more text-end" href="https://link.springer.com/chapter/10.1007/978-3-319-71997-9_15" rel="noopener noreferrer" target="_blank">Read More</a>                        
                      </div>  
                    </div>
                  </article>
                </div>                
                <div class="col-12" data-aos="fade-right">
                  <article class="row article">
                    <div class="col-2">
                      <a href="https://doi.org/10.1007/978-3-319-71997-9_9" rel="noopener noreferrer" target="_blank">
                        <img src="{{asset('files/img/publication/bk2.jpg')}}" alt="" class="w-100">
                      </a>
                    </div>
                    <div class="col-10">                    
                      <h2 class="title">
                        <a href="https://doi.org/10.1007/978-3-319-71997-9_9" rel="noopener noreferrer" target="_blank">Oryza glaberrima Steud.</a>           
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Marie Noelle Ndjiondjop, Peterson Wambugu, Jean Rodrigue Sangare, Tia Dro, Bienvenu Kpeki & Karlin Gnikoua</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>The Wild Oryza Genomes</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1007/978-3-319-71997-9_9</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>105-126</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                      </div><!-- End meta top -->
                      <div class="content">
                        <p style="text-align: justify">
                          Oryza glaberrima, commonly known as African rice, is a rice species domesticated by farmers in the Niger River Inland Delta. While it exhibits narrow genetic diversity compared 
                          to its wild ancestor, Oryza barthii, and the widely cultivated Asian rice (Oryza sativa), O. glaberrima plays a significant role in regional and global food security. 
                          African rice faces challenges like low yield potential, high shattering, and lodging susceptibility, which have contributed to its decline in farmers' fields...
                        </p>
                        <a class="read-more text-end" href="https://doi.org/10.1007/978-3-319-71997-9_9" rel="noopener noreferrer" target="_blank">Read More</a>                        
                      </div>  
                    </div>
                  </article>
                </div>                
                <div class="col-12" data-aos="fade-left">
                  <article class="row article">
                    <div class="col-2">
                      <a href="https://link.springer.com/chapter/10.1007%2F978-3-319-71997-9_3" rel="noopener noreferrer" target="_blank">
                        <img src="{{asset('files/img/publication/bk2.jpg')}}" alt="" class="w-100">
                      </a>
                    </div>
                    <div class="col-10">                    
                      <h2 class="title">
                        <a href="https://link.springer.com/chapter/10.1007%2F978-3-319-71997-9_3" rel="noopener noreferrer" target="_blank">Evolutionary relationships among the Oryza species</a>           
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>Peterson W. Wambugu, Desterio Nyamongo, Marie-Noelle Ndjiondjop & Robert J. Henry</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>The Wild Oryza Genomes</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1007%2F978-3-319-71997-9_3</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>41-546</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2018</li>
                        </ul>
                      </div><!-- End meta top -->
                      <div class="content">
                        <p style="text-align: justify">
                          The evolutionary relationships within the Oryza genus, particularly the origins of Asian rice, have long been a subject of debate. Despite extensive research, inconsistencies 
                          remain in understanding the genus's evolutionary dynamics. This publication delves into how recent advances in genomics are reshaping our understanding of these relationships. 
                          Modern genomic tools are providing new opportunities to resolve the origins of cultivated rice and clarify the phylogenetic relationships between various Oryza species...
                        </p>
                        <a class="read-more text-end" href="https://link.springer.com/chapter/10.1007%2F978-3-319-71997-9_3" rel="noopener noreferrer" target="_blank">Read More</a>                        
                      </div>  
                    </div>
                  </article>
                </div>                
                <div class="col-12" data-aos="fade-right">
                  <article class="row article">
                    <div class="col-2">
                      <a href="https://www.worldscientific.com/doi/abs/10.1142/9789814280013_0004" rel="noopener noreferrer" target="_blank">
                        <img src="{{asset('files/img/publication/bk5.jpg')}}" alt="" class="w-100">
                      </a>
                    </div>
                    <div class="col-10">                    
                      <h2 class="title">
                        <a href="https://www.worldscientific.com/doi/abs/10.1142/9789814280013_0004" rel="noopener noreferrer" target="_blank">Drought research at warda: Current situation and prospects</a>           
                      </h2>
                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-people"></i>M. Sié, K. Futakuchi, H. Gridley, S. Mande, B. Manneh, M.N. Ndjiondjop, A. Efisue, S.A. Ogunbayo, M. Moussa, H. Tsunematsu, and H. Samejima</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-bookmark-star"></i>Drought Frontiers in Rice</li>
                        </ul>
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-flag"></i>DOI : 10.1142/9789814280013_0004</li>
                          <li class="d-flex align-items-center"><i class="bi bi-book-half"></i>61-73</li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i>2009</li>
                        </ul>
                      </div><!-- End meta top -->
                      <div class="content">
                        <p style="text-align: justify">
                          Drought poses a significant challenge to rice production across rainfed ecologies in sub-Saharan Africa (SSA). Affecting both upland and lowland areas, drought at the 
                          reproductive stage can cause severe yield losses. Approximately 70% of lowland rice farmers experience this issue. To address this, WARDA (now AfricaRice) has 
                          prioritized drought resistance in its rice breeding programs. A key approach involves interspecific breeding between Oryza sativa and Oryza glaberrima...
                        </p>
                        <a class="read-more text-end" href="https://www.worldscientific.com/doi/abs/10.1142/9789814280013_0004" rel="noopener noreferrer" target="_blank">Read More</a>                        
                      </div>  
                    </div>
                  </article>
                </div>                
              </article>
            </div>
        </section>
    </section>


@endsection
    