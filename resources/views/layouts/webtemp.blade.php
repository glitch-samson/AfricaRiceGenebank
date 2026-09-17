<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>@yield('titre') - Rice Biodiversity Center</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="{{asset('files/img/ar.ico')}}" rel="icon">

    <!-- Google Web Fonts -->
    <!--link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap" rel="stylesheet"-->

    <!-- Icon Font Stylesheet -->
    <!--link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"-->

    <link href="{{asset('files/src/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/css/animate.min.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/lib/bootstrap-icons/bootstrap-icons.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/lib/boxicons/css/boxicons.min.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/lib/remixicon/remixicon.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/lib/aos/aos.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/lib/glightbox/css/glightbox.min.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/lib/swiper/swiper-bundle.min.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/css/main.css')}}" rel="stylesheet">
</head>

<body class="index-page">



  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a href="{{route('home')}}" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="{{asset('files/img/africarice.png')}}" alt="">
        <h1 class="sitename">RBCA</h1>
      </a>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="{{route('home')}}">Home</a></li>
          <li class="dropdown"><a href="#"><span>About Us</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
            <li><a href="{{route('inauguration')}}">Inauguration</a></li>
            <li><a href="{{route('genebank')}}">About of Genebank</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Species</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
            <li><a href="{{route('african')}}">African rice</a></li>
            <li><a href="{{route('asian')}}">Asian rice</a></li>
            <li><a href="{{route('interspecifics')}}">Interspecifics</a></li>
            <li><a href="{{route('wild')}}">Wild relatives</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>What we do</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Routine Operation</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="{{route('acquisition')}}">Acquisition / Collection</a></li>
                  <li><a href="{{route('conservation')}}">Conservation</a></li>
                  <li><a href="{{route('duplication')}}">Safety duplication</a></li>
                  <li><a href="{{route('regeneration')}}">Regeneration</a></li>
                  <li><a href="{{route('characterization')}}">Characterization</a></li>
                  <li><a href="{{route('distribution')}}">Distribution</a></li>
                  <li><a href="{{route('data')}}">Data management</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Research Activities</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="{{route('genomicsgbk')}}">Genomics for Genebanks</a></li>
                  <li><a href="{{route('qca')}}">Quality Control Analysis</a></li>
                  <li><a href="{{route('subsetting')}}">Sub-setting</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Publications</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
            <li><a href="{{route('articles')}}">Journal articles</a></li>
            <li><a href="{{route('book')}}">Book chapters</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Data</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
            <li><a href="{{route('subsets')}}">Subsets</a></li>
            <li><a href="{{route('genomicsdata')}}">Genomics data</a></li>
            <li><a href="{{route('chardata')}}">Characterization data</a></li>
            </ul>
          </li>
          <li><a href="{{route('req')}}">Request for germplasm</a></li>
          <li class="dropdown"><a href="#"><span>Genebank Survey</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
            <li><a href="{{route('landing')}}">CGIAR Survey</a></li>
            <li><a href="{{route('qst')}}">User Survey</a></li>
            <li><a href="{{route('swfeed')}}">NARS Evaluation</a></li>
            </ul>
          </li>
          <li><a href="{{route('contact')}}">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

    @yield('contenu')


  <footer id="footer" class="footer dark-background">
    <div class="container">
      <div class="align-items-center text-center pb-3">
          <img src="{{asset('files/img/CGIAR.png')}}" alt="" class="me-2"  height="100px">
          <img src="{{asset('files/img/africar.jpg')}}" alt=""  height="100px">
      </div>
      <div class="social-links d-flex justify-content-center">
          <a href="https://twitter.com/africarice" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://web.facebook.com/AfricaRiceCenter/?_rdc=1&_rdr" target="_blank" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="https://www.youtube.com/user/africaricecenter" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="https://kz.linkedin.com/company/africa-rice-center?trk=similar-companies_org_image" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      <div class="container">
        <div class="copyright">
          <span>&copy; Copyright</span> <strong class="px-1 sitename">AfricaRice Genebank</strong> <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader"></div>


  <!-- JavaScript Libraries -->
  <script src="{{asset('files/src/js/bootstrap.bundle.min.js')}}"></script>
  <script src="{{asset('files/src/lib/aos/aos.js')}}"></script>
  <script src="{{asset('files/src/lib/glightbox/js/glightbox.min.js')}}"></script>
  <script src="{{asset('files/src/lib/isotope-layout/imagesloaded.pkgd.min.js')}}"></script>
  <script src="{{asset('files/src/lib/isotope-layout/isotope.pkgd.min.js')}}"></script>
  <script src="{{asset('files/src/lib/swiper/swiper-bundle.min.js')}}"></script>
  <script src="{{asset('files/src/js/main.js')}}"></script>

</body>

</html>
