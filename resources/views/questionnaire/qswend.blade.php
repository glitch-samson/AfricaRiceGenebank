@extends('layouts.questemp') 

@section('titre')
NARS Evaluation
@endsection
@section('contenu')
<div class="container-fluid position-relative p-0">
    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="img/carousel-1.jpg" alt="Image">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3 " style="max-width: 900px;">
                        <h1 class="display-1 text-white mt-5 mb-md-4 animated zoomIn">RBCA thanks you for taking the time to fill out this evaluation.</h1>
                        <a href="{{route('home')}}" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Home</a>
                        <div class="mt-5 p-3">
                            <h4><u>Acknowledgments</u></h4>
                            <h4>Prepared by: Dr. Marie-Noelle Ndjiondjop</h4>
                            <h4>Head of Rice Biodiversity Center for Africa (RBCA), AfricaRice</h4>
                            <h4>Email: m.ndjiondjop@cgiar.org</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



@endsection