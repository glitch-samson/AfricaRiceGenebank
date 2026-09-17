@extends('layouts.questemp') 

@section('titre')
Page 4
@endsection
@section('contenu')
<div class="container py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <form action="" method="POST" class="py-5">
        @csrf
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 900px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 7</h5>
            <h1 class="mb-0">In future what are the traits that would likely inform your decision to request germplasm material from AfricaRice Genebank ?</h1>
        </div>
        <div class="row g-3 mb-5 fs-4 justify-content-center">  
               
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w1" name="futurtrait[]" value="drought_8">
                <label class="form-check-label" for="w1">Drought resistance</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w2" name="futurtrait[]" value="quality_8">
                <label class="form-check-label" for="w2">Nutrition/quality enhancing</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w3" name="futurtrait[]" value="disease_8">
                <label class="form-check-label" for="w3">Resistance to other diseases</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w4" name="futurtrait[]" value="yield_8">
                <label class="form-check-label" for="w4">Yield enhancing</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w5" name="futurtrait[]" value="salinity_8">
                <label class="form-check-label" for="w5">Salinity tolerance</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w6" name="futurtrait[]" value="insect_8">
                <label class="form-check-label" for="w6">Resistance to insect pests</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w7" name="futurtrait[]" value="heat_8">
                <label class="form-check-label" for="w7">Heat tolerance</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w8" name="futurtrait[]" value="waterlogging_8">
                <label class="form-check-label" for="w8">Tolerance to waterlogging</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w9" name="futurtrait[]" value="pest_8">
                <label class="form-check-label" for="w9">Resistance to other pests</label>
            </div>
            <div class="col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input type="text" class="form-control fs-5" name="other_8" placeholder="Other traits">
            </div>
            @error('futurtrait') <span class="small text-danger">Please check one traits</span> @enderror   
        </div>
        <div class="section-title text-center position-relative pb-3 my-3 mx-auto" style="max-width: 900px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 8</h5>
            <h1 class="mb-0">What percentage of AfricaRice accessions are utilized in your research and non-research activities ?</h1>
        </div> 
        <div class="row justify-content-center">
            <label for="inputText" class="col-12 col-form-label fs-4">Consider both your research and non-research activities and provide an estimated percentage of our collection used</label>
            <div class="col-2 fs-4">
              <input type="text" class="form-control" id="inputText" name="percent" value="@if (Session::has('data')) {{Session::get('data')['q9']}} @endif">
            </div>
            <div class="col-1 fs-4">
                <label class="fs-4 fw-bold">%</label>
            </div>
            @error('percent') <span class="small text-danger">{{$message}}</span> @enderror
        </div>

        <div class="row mt-5 justify-content-between">
            <div class="col-2">
                <a href="{{route('p4')}}" class="btn btn-dark py-md-3 px-md-5 animated slideInRight"><i class="bi bi-caret-left"></i> Previous</a>
            </div>
            <div class="col-2">
                <button type="submit" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Next <i class="bi bi-caret-right"></i></button>
            </div>
        </div>
        
    </form>
</div>



@endsection