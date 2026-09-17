<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>@yield('titre') - Rice Biodiversity Center</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <link href="{{asset('files/img/ar.ico')}}" rel="icon">
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="{{asset('files/src/ques/custboot.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/lib/bootstrap-icons/bootstrap-icons.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/ques/owl.carousel.min.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/ques/animate.min.css')}}" rel="stylesheet">
    <link href="{{asset('files/src/ques/style.css')}}" rel="stylesheet">
</head>

<body>
  <!--
  <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner"></div>
  </div>
   -->
  <div class="container-fluid bg-dark px-5 d-none d-lg-block">
    <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center" style="height: 45px;">
                <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>01 BP 2551, Bouaké, Côte d’Ivoire</small>
                <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+225 27 22 48 09 20</small>
                <small class="text-light"><i class="fa fa-envelope-open me-2"></i>AfricaRice@cgiar.org</small>
            </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
            <div class="d-inline-flex align-items-center" style="height: 45px;">
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://twitter.com/africarice" target="_blank"><i class="fab fa-twitter fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://web.facebook.com/AfricaRiceCenter/?_rdc=1&_rdr" target="_blank"><i class="fab fa-facebook-f fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://kz.linkedin.com/company/africa-rice-center?trk=similar-companies_org_image" target="_blank"><i class="fab fa-linkedin-in fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://www.youtube.com/user/africaricecenter" target="_blank"><i class="fab fa-youtube fw-normal"></i></a>
            </div>
        </div>
    </div>
  </div>
  <div class="container position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="{{route('home')}}" class="navbar-brand  p-0">
            <h1 class="m-0"> <img src="{{asset('files/img/africarice.png')}}" alt="" height="50px"></h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="{{route('home')}}" class="nav-item nav-link">Home</a>
            </div>
        </div>
    </nav>
  </div>

    <input id="url" value="{{url('')}}" hidden>
    @yield('contenu')

  <!-- Footer Start -->

  <div class="container-fluid text-white" style="background: #061429;">
      <div class="container pt-5 pb-3 text-center">
          <div class="align-items-center text-center">
            <img src="{{asset('files/img/CGIAR.png')}}" alt="" class="me-2"  height="100px">
            <img src="{{asset('files/img/africar.jpg')}}" alt=""  height="100px">
          </div>
          <div class="align-items-center text-center my-3">
            <div class="copyright">
              &copy; Copyright <strong><span>AfricaRice Genebank</span></strong>. All Rights Reserved
            </div>
          </div>
          <div class="text-center ">
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://twitter.com/africarice" target="_blank"><i class="fab fa-twitter fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://web.facebook.com/AfricaRiceCenter/?_rdc=1&_rdr" target="_blank"><i class="fab fa-facebook-f fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://kz.linkedin.com/company/africa-rice-center?trk=similar-companies_org_image" target="_blank"><i class="fab fa-linkedin-in fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://www.youtube.com/user/africaricecenter" target="_blank"><i class="fab fa-youtube fw-normal"></i></a>
          </div>
      </div>
  </div>
  <!-- Footer End -->


  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>


  <!-- JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

  <script src="{{asset('files/src/ques/wow.min.js')}}"></script>
  <script src="{{asset('files/src/ques/easing.min.js')}}"></script>
  <script src="{{asset('files/src/ques/waypoints.min.js')}}"></script>
  <script src="{{asset('files/src/ques/counterup.min.js')}}"></script>
  <script src="{{asset('files/src/ques/owl.carousel.min.js')}}"></script>
  <script src="{{asset('files/src/ques/main.js')}}"></script>
</body>

</html>

