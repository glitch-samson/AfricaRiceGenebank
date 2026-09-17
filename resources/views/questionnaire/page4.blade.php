@extends('layouts.questemp') 

@section('titre')
Page 3
@endsection
@section('contenu')
<div class="container py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <form action="" method="POST" class="py-5">
        @csrf
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 5</h5>
            <h1 class="mb-0">In your opinion how relevant are these traits in informing your decision to use AfricaRice germplasm ?</h1>
        </div>
        <div class="row g-4 mt-4 fs-4">
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Drought Resistance :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt1" name="caract[]" value="drought_6">
                        <label class="form-check-label" for="opt1">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Heat Resistance :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt2" name="caract[]" value="heat_6">
                        <label class="form-check-label" for="opt2">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Flooding Resistance :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt3" name="caract[]" value="flooding_6">
                        <label class="form-check-label" for="opt3">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Salinity :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt31" name="caract[]" value="salinity_6">
                        <label class="form-check-label" for="opt31">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Insect Resistance :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt4" name="caract[]" value="insect_6">
                        <label class="form-check-label" for="opt4">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Pests Resistance :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt32" name="caract[]" value="pest_6">
                        <label class="form-check-label" for="opt32">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Diseases  :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt33" name="caract[]" value="disease_6">
                        <label class="form-check-label" for="opt33">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-5 col-form-label fw-bold p-0">Yield   :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt34" name="caract[]" value="yield_6">
                        <label class="form-check-label" for="opt34">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>            
            <div class="col-md-4">
                <div class="row align-items-start">
                    <label class="col-8 col-form-label fw-bold p-0">Quality/nutrition :</label>
                    <div class="col-2">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="opt35" name="caract[]" value="quality_6">
                        <label class="form-check-label" for="opt35">Relevant</label>
                    </div>
                    </div>
                </div>
            </div>
            @error('caract') <span class="small text-danger">Please check one</span> @enderror

            
        </div>
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h5 class="fw-bold text-primary text-uppercase">Question 6</h5>
            <h1 class="mb-0">What are the specific results received from the germplasm materials demanded from AfricaRice genebank ?</h1>
        </div>
        <div class="row g-3 mb-3 fs-4 justify-content-center">        
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w1" name="specific[]" value="inevaluation_7">
                <label class="form-check-label" for="w1">The germplasm is still being evaluated</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w2" name="specific[]" value="publication_7">
                <label class="form-check-label" for="w2">Scientifc publication</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w3" name="specific[]" value="characterization_7">
                <label class="form-check-label" for="w3">Characterization and evaluation data</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w4" name="specific[]" value="identification_7">
                <label class="form-check-label" for="w4">Identification of traits</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w5" name="specific[]" value="markers_7">
                <label class="form-check-label" for="w5">Genes/markers generated</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w6" name="specific[]" value="expansion_7">
                <label class="form-check-label" for="w6">Expanded germplasm options</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w7" name="specific[]" value="breeding_7">
                <label class="form-check-label" for="w7">Advanced breeding lines</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w8" name="specific[]" value="cultivar_7">
                <label class="form-check-label" for="w8">Improved variety or new cultivar</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w9" name="specific[]" value="information_7">
                <label class="form-check-label" for="w9">Digital sequence information generated</label>
            </div>
            <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                <input class="form-check-input" type="checkbox" id="w10" name="specific[]" value="planting_7">
                <label class="form-check-label" for="w10">Direct planting material</label>
            </div>
            @error('specific') <span class="small text-danger">Please check one</span> @enderror
        </div>
        <div class="row mt-5 justify-content-between">
            <div class="col-2">
                <a href="{{route('p2')}}" class="btn btn-dark py-md-3 px-md-5 animated slideInRight"><i class="bi bi-caret-left"></i> Previous</a>
            </div>
            <div class="col-2">
                <button type="submit" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Next <i class="bi bi-caret-right"></i></button>
            </div>
        </div>
        
    </form>
</div>



@endsection