@extends('layouts.questemp') 

@section('titre')
Page 2
@endsection
@section('contenu')
<div class="container py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <form method="POST" action="" class=" py-5">
        @csrf
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 2</h5>
            <h1 class="mb-0">Please enter your institution</h1>
        </div>            
        <div class="row g-3 mb-3 fs-4 justify-content-center">
            <div class="col-sm-8 wow zoomIn"  data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <div class="row g-4">
                    <div class="col-12">
                        <input type="text" class="form-control fs-4" id="institution" name="institution" value="@if (Session::has('data')) {{Session::get('data')['q2']}} @endif">
                        @error('institution') <span class="small text-danger">{{$message}}</span> @enderror
                    </div>
                </div>
            </div>
        </div>
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 3</h5>
            <h1 class="mb-0">Which of the following groups best classifies your institution ?</h1>
        </div> 
        <div class="row g-2 mb-5 fs-4 justify-content-center">        
            <div class="form-check col-sm-2 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="g1" name="groups[]" value="CGIAR Center">
                <label class="form-check-label" for="g1">CGIAR Center</label>
            </div>
            <div class="form-check col-sm-2 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="g2" name="groups[]" value="NARS">
                <label class="form-check-label" for="g2">NARS</label>
            </div>
            <div class="form-check col-sm-2 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="g3" name="groups[]" value="University">
                <label class="form-check-label" for="g3">University</label>
            </div>
            <div class="form-check col-sm-2 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="g4" name="groups[]" value="Individual">
                <label class="form-check-label" for="g4">Individual</label>
            </div>
            <div class="form-check col-sm-2 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="g5" name="groups[]" value="Famer">
                <label class="form-check-label" for="g5">Famer</label>
            </div>
        </div>

        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 820px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 4</h5>
            <h1 class="mb-0">Have you requested for germplasm from AfricaRice Genebank at least once ?</h1>
        </div>            
        <div class="row g-4 fs-4 justify-content-center">
            <div class="col-4">
                <div class="row ">
                    <label class="col-5 text-end" for="opt1">No</label>
                    <div class="col-5">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="opt1" name="requested" checked>
                            <label class="form-check-label" for="opt1">Yes</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5 justify-content-between">
            <div class="col-2">
                <a href="{{route('p1')}}" class="btn btn-dark py-md-3 px-md-5 animated slideInRight"><i class="bi bi-caret-left"></i> Previous</a>
            </div>
            <div class="col-2">
                <button type="submit" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Next <i class="bi bi-caret-right"></i></button>
            </div>
        </div>
        
    </form>
</div>



@endsection