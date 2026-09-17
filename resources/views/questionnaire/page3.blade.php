@extends('layouts.questemp') 

@section('titre')
Page 3
@endsection
@section('contenu')
<div class="container-fluid py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <div class=" py-5">
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 5</h5>
            <h1 class="mb-0">Choose what accession(s) you have requested at least once ?</h1>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="card">                
                    <div class="card-body">
                      <h5 class="card-title">Search zone</h5>
                      <div class="row">
                        <div class="col-10">
                            <input type="text" class="form-control" id="eltRech" placeholder="Accesion number or accession name">
                        </div>
                        <div class="col-1">
                            <a class="btn btn-primary" onclick="recherche()"><i class="bi bi-search"></i></a>
                        </div>
                        <div id="emailHelp" class="form-text">Enter a list separated by spaces (accnumber1 accnumber2 accnumber3)
                            <a  class="text-info" data-bs-toggle="modal" data-bs-target="#largeModal"><i class="bi bi-info-circle"></i></a>
                        </div>                        
                      </div>
                      <form method="POST" action="{{route('addacc')}}" class="card-text m-3">
                        @csrf
                        <div id="resrech" class="row g-1"></div>
                      </form>
                    </div>
                </div>
            </div>
            <div class="col-md-7 border rounded">                
                @if (Session::has('acc')) 
                    <div id="emailHelp" class="form-text">{{Session::get('acc')['n']}} accession(s) add to list</div>
                @endif
                @if(Session::get('data')['q5'])
                <div class="row justify-content-center g-3 fs-5  p-3">
                    <legend class="text-primary text-center">List of accessions requested ({{count(Session::get('data')['q5'])}} accessions)</legend>
                    @foreach (Session::get('data')['q5'] as $w)
                        
                    <div class="col-sm-2 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">{{$w}}</div>
                    @endforeach

                </div>
                @endif
            </div>
        </div>
        <div class="container py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
            <div class="row mt-5 justify-content-between">
                <div class="col-2">
                    <a href="{{route('p2')}}" class="btn btn-dark py-md-3 px-md-5 animated slideInRight"><i class="bi bi-caret-left"></i> Previous</a>
                </div>
                <div class="col-2">
                    <a href="{{route('p4')}}" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Next <i class="bi bi-caret-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">HELP FOR FINDING ACCESSIONS</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <b>1. Search by accession number</b>
                <p>
                    To search from multiple accessions numbers, enter the accessions numbers in the search field separated by a space. <br>
                    You can also copy your accessions list from an Excel file and paste it into the search field. Your list will be automatically separated by a space.
                </p>
                <div class="row mb-3">
                    <div class="col-md-5"><img src="{{asset('files/img/ques/a.png')}}" class="img-fluid"></div>
                    <div class="col-md-7"><img src="{{asset('files/img/ques/b.png')}}" class="img-fluid"></div>
                </div>
                <b>2. Search by accession name</b>
                <p>
                    If you do not know the accession number but the full name or part of the accession name, you can enter this name and search. All accessions whose names 
                    correspond to your search will be displayed; so you can find your accession and make your final selection.
                </p>
                <img src="{{asset('files/img/ques/c.png')}}" class="img-fluid mb-3">
                <b>3. Selection of accessions</b>
                <p>
                    Accessions that result from your search are automatically checked (selected), you can uncheck the accessions that do not interest you or also refine your search. <br>
                    When your selection is made, click on the Select button to validate your choice by adding it in the right area. <br>
                    Note that the final selection cannot be changed so be careful before validating your selection.
                </p>
                <div class="text-center">
                    <img src="{{asset('files/img/ques/d.png')}}" class="img-fluid">
                    <img src="{{asset('files/img/ques/e.png')}}" class="img-fluid">
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
</div>

<script src="{{asset('files/src/ques/jquery.min.js')}}"></script>
<script>
    var url = $('#url').val();
    
    function recherche(){     
        var _token = $("input[name=_token]").val();
        var dt = $('#eltRech').val();
        $.ajax({
            url : url+"/rech-acc",
            data : {
                dt,
              _token
            },
            dataType : 'json',
            method : "POST",
            success : function(r){
                
                if (r.length>0) {
                    $('#resrech').html('');
                    var message;
                    message='<div class="col-12">Found : '+r.length + ' accession(s)</div>'
                    $('#resrech').append(message);
                    for (let i = 0; i < r.length; i++) {
                        message='<div class="form-check col-sm-6"><input class="form-check-input" type="checkbox" id="wb'+i+'" name="wab[]" value="'+r[i].accession+'" checked><label class="form-check-label" for="wb'+i+'">'+r[i].accession+'</label> <span class="small text-primary"> : '+r[i].name+'</span></div>';
                        
                        $('#resrech').append(message);
                    }
                    message='<div class="col-12  mt-3"><button type="submit" class="btn btn-outline-primary col-3">Select</button></div>'
                    $('#resrech').append(message);
                }
            }
        });
    };
</script>

@endsection