@extends('layouts.questemp') 

@section('titre')
Page 5
@endsection
@section('contenu')
<div class="container py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <form action="" method="POST" class="py-5">
      @csrf
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 900px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 9</h5>
            <h1 class="mb-0">Rate the quality of seeds received from AfricaRice Genebank</h1>
        </div>
        <fieldset class="row mb-5 fs-4 justify-content-center">
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="seedrate" id="rate1" value="2" checked="">
                <label class="form-check-label" for="rate1">High</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="seedrate" id="rate2" value="1">
                <label class="form-check-label" for="rate2">Average</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="seedrate" id="rate3" value="0">
                <label class="form-check-label" for="rate3">Poor</label>
              </div>
            </div>
        </fieldset>    
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 900px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 10</h5>
            <h1 class="mb-0">Rate the quality-of-service delivery of germplasm material from AfricaRice Genebank</h1>
        </div>
        <fieldset class="row mb-5 fs-4 justify-content-center">
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="servicerate" id="rate11" value="2" checked="">
                <label class="form-check-label" for="rate11">High</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="servicerate" id="rate12" value="1">
                <label class="form-check-label" for="rate12">Average</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="servicerate" id="rate13" value="0">
                <label class="form-check-label" for="rate13">Poor</label>
              </div>
            </div>
        </fieldset>  
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 900px;">
          <h5 class="fw-bold text-primary text-uppercase">Question 11</h5>
          <h1 class="mb-0">Provide comments on how to improve the service delivery of AfricaRice Germplasm Distribution</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-10 form-floating">
            <textarea class="form-control fs-4" placeholder="Leave a text here" name="comments" id="com" style="height: 200px;" required></textarea>
            <label class="ms-2"  for="com">Comments</label>
          </div>
        </div>
        <div class="row justify-content-between mt-5">
            <div class="col-2">
                <a href="{{route('p5')}}" class="btn btn-dark py-md-3 px-md-5 animated slideInRight"><i class="bi bi-caret-left"></i> Previous</a>
            </div>
            <div class="col-2">
              <button type="submit" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Submit <i class="bi bi-caret-right"></i></button>
            </div>
        </div>
        
    </form>
</div>



@endsection