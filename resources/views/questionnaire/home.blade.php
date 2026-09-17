@extends('layouts.questemp') 

@section('titre')
Feedback
@endsection
@section('contenu')
<div class="container-fluid position-relative p-0">
    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="{{asset('files/img/ques.jpg')}}" alt="Image">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style="max-width: 900px;">
                        <h5 class="text-white text-uppercase mb-3 animated slideInDown">RBCA - Genebank User Survey</h5>
                        <h1 class="display-1 text-white mb-md-4 animated zoomIn">Feedback on germplasm request</h1>
                        <a href="{{route('p1')}}" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Start</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection