@extends('layouts.questemp') 

@section('titre')
Page 1
@endsection
@section('contenu')
<div class="container py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <form class=" py-5" method="POST" action="">
        @csrf
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 1</h5>
            <h1 class="mb-0">Please enter your e-mail address</h1>
        </div>        
        <div class="row g-3 mb-3 fs-4 justify-content-center">
            <div class="col-8 text-center">
                @if(Session::has('er'))<div class="alert alert-danger p-2">{{Session::get('er')}}</div>@endif 
            </div>
            <div class="col-sm-8 wow zoomIn"  data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <div class="row g-4">
                    <div class="col-12">
                        <input type="email" class="form-control fs-4" id="mail" name="mail" value="@if(Session::has('data')){{Session::get('data')['q1']}}@endif" required>
                        @error('mail') <span class="small text-danger">{{$message}}</span> @enderror
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5 justify-content-end">
            <div class="col-2">
                <button type="submit" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Next <i class="bi bi-caret-right"></i></button>
            </div>
        </div>        
    </form>
</div>



@endsection