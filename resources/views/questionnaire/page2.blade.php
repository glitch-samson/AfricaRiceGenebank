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
                        <input type="text" class="form-control fs-4" id="institution" name="institution" value="@if(Session::has('data')){{Session::get('data')['q2']}}@endif">
                        @error('institution') <span class="small text-danger">{{$message}}</span> @enderror
                    </div>
                </div>
            </div>
        </div>
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 3</h5>
            <h1 class="mb-0">Which of the following groups best classifies your institution ?</h1>
        </div> 
        <fieldset class="row mb-2 fs-4 justify-content-center">
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="groups" id="rate1" value="cgiar_3" onclick="show()" checked>
                <label class="form-check-label" for="rate1">CGIAR Center</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="groups" id="rate2" value="nars_3" onclick="show()">
                <label class="form-check-label" for="rate2">NARS</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="groups" id="rate3" value="university_3" onclick="show()">
                <label class="form-check-label" for="rate3">University</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="groups" id="rate4" value="individual_3" onclick="show()">
                <label class="form-check-label" for="rate4">Individual</label>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="groups" id="rate5" value="famer_3" onclick="show()">
                <label class="form-check-label" for="rate5">Famer</label>
              </div>
            </div>
        </fieldset>
        <div id="narsopt">
          
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

<script src="{{asset('files/src/ques/jquery.min.js')}}"></script>
<script>
  function show(){
    const radgroup=document.querySelectorAll('input[name="groups"]:checked');
    console.log(radgroup);
    const divnars=document.getElementById('narsopt')
    for (let rad of radgroup) {
      if (rad.checked) {
          if (rad.value == "nars_3") {
            $('#narsopt').html('');
            var message='<div class="border rounded-2 p-2"><div class="row justify-content-center"><h5 class="col-10">a. Are you willing to exchange your germplasm materials with other National Agricultural Research Systems (NARS) ?</h5><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_31" id="nars_exchange1" value="Yes" checked="" onclick="show1(1)">Yes</label></div></div><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_31" id="nars_exchange2" value="No" onclick="show1(1)"><label class="form-check-label" for="nars_exchange2"> No</label></div> </div></div><div class="row"><div class="col-12" id="narsobs1"></div></div><div class="row justify-content-center"><h5 class="col-10 pt-0">b. Are you open to sharing these materials with CGIAR and other potential germplasm users ?</h5><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_32" id="nars_share1" value="Yes" checked="" onclick="show1(2)"><label class="form-check-label" for="nars_share1">Yes</label></div></div><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_32" id="nars_share2" value="No" onclick="show1(2)"><label class="form-check-label" for="nars_share2">No</label></div></div></div><div class="row"><div class="col-12" id="narsobs2"></div></div><div class="row justify-content-center"><h5 class="col-10 pt-0">c. Would you be willing to send these resources to CGIAR centers for backup or duplication purposes ?</h5><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_33" id="nars_send1" value="Yes" checked="" onclick="show1(3)"><label class="form-check-label" for="nars_send1">Yes</label></div></div><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_33" id="nars_send2" value="No" onclick="show1(3)"><label class="form-check-label" for="nars_send2">No</label></div></div></div><div class="row"><div class="col-12" id="narsobs3"></div></div><div class="row justify-content-center"><h5 class="col-10 pt-0">d. Are you willing to conduct evaluations of your own germplasm collections and collaborate with AfricaRice for these evaluations ?</h5><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_34" id="nars_ev1" value="Yes" checked="" onclick="show1(4)"><label class="form-check-label" for="nars_ev1">Yes</label></div></div><div class="col-sm-1"><div class="form-check"><input class="form-check-input" type="radio" name="nars_34" id="nars_eva2" value="No" onclick="show1(4)"><label class="form-check-label" for="nars_eva2">No</label></div></div></div><div class="row"><div class="col-12" id="narsobs4"></div></div></div>'
            $('#narsopt').append(message);
          } else {
            $('#narsopt').html('');
          }
      }
    }     
  }
  function show22(){
    const radgroup=document.querySelectorAll('input[name="groups"]');
    const divnars=document.getElementById('narsopt')
    for (let rad of radgroup) {
      if (rad.checked) {
          if (rad.value == "nars_3") {
              divnars.style.display = 'block'
          } else {
              divnars.style.display = 'none'
          }
      }            
    }        
  }
  function show1(id){
    var radgrou=document.querySelector('input[name="nars_3'+id+'"]:checked');
    var divnar=document.getElementById('narsobs'+id)
    //divnar.innerHTML=""
    if (radgrou.value == "No") {
      $('#narsobs'+id+'').html('');
      var message='<input type="text" class="form-control mb-2" placeholder="If no, please provide reasons" name="nars_obs'+id+'" required>'
      $('#narsobs'+id+'').append(message);
    }else{
      $('#narsobs'+id+'').html('');
    }
    
  }
  show()

</script>


@endsection