@extends('layouts.questemp') 

@section('titre')
NARS Evaluation
@endsection
@section('contenu')
<div class="container pt-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <div class=" text-center position-relative pb-3 my-5 mx-auto">
        <h1>AfricaRice Genebank Survey – Evaluation of Rice Genetic Resources by NARS Partners</h1>
    </div> 
</div>
<div class="container  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <form method="POST" action="" class="">
        @csrf  
        <div class="row g-4">
            <div class="col-md-6">
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">1. Nom et Prénoms (Full Name)</h5>
                </div>            
                <div class="row mb-5 fs-5 justify-content-center">
                    <div class="col-12 wow zoomIn"  data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <div class="row g-4">
                            <div class="col-12">
                                <input type="text" class="form-control fs-5" id="name" name="name" value="{{old('name')}}" required>
                                @error('name') <span class="small text-danger">{{$message}}</span> @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">2. Institution de Provenance (Affiliated Institution)</h5>
                </div> 
                <div class="row g-3 mb-5 fs-5 justify-content-center">
                    <div class="col-12 wow zoomIn"  data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <div class="row g-4">
                            <div class="col-12">
                                <input type="text" class="form-control fs-5" id="institution" name="institution" value="{{old('institution')}}" required>
                                @error('institution') <span class="small text-danger">{{$message}}</span> @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">3. Adresse Email (Email Address)</h5>
                </div> 
                <div class="row g-3 mb-5 fs-5 justify-content-center">
                    <div class="col-12 wow zoomIn"  data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <div class="row g-4">
                            <div class="col-12">
                                <input type="email" class="form-control fs-5" id="email" name="email" value="{{old('email')}}" required>
                                @error('email') <span class="small text-danger">{{$message}}</span> @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">4. Contact WhatsApp (Phone Number with WhatsApp Access)</h5>
                </div> 
                <div class="row g-3 mb-5 fs-5 justify-content-center">
                    <div class="col-12 wow zoomIn"  data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <div class="row g-4">
                            <div class="col-12">
                                <input type="tel" class="form-control fs-5" id="contact" name="contact" value="{{old('contact')}}" required>
                                @error('contact') <span class="small text-danger">{{$message}}</span> @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">5. Which stress traits are you most interested in screening for?</h5>
                </div>  
                <div class="row g-1 mb-5 justify-content-center">                 
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w1" name="trait[]" value="Drought tolerance">
                        <label class="form-check-label" for="w1">Drought tolerance</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w2" name="trait[]" value="Salinity tolerance">
                        <label class="form-check-label" for="w2">Salinity tolerance</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w3" name="trait[]" value="Heat tolerance">
                        <label class="form-check-label" for="w3">Heat tolerance</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w4" name="trait[]" value="Iron toxicity">
                        <label class="form-check-label" for="w4">Iron toxicity</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w5" name="trait[]" value="Anaerobic germination">
                        <label class="form-check-label" for="w5">Anaerobic germination</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w6" name="trait[]" value="Flood tolerance">
                        <label class="form-check-label" for="w6">Flood tolerance</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w7" name="trait[]" value="Disease resistance">
                        <label class="form-check-label" for="w7">Disease resistance</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w8" name="trait[]" value="Pest resistance (AfRGM)">
                        <label class="form-check-label" for="w8">Pest resistance (AfRGM)</label>
                    </div>
                    <div class="form-check col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w9" name="trait[]" value="Nutrient-use efficiency">
                        <label class="form-check-label" for="w9">Nutrient-use efficiency</label>
                    </div>
                    <div class="col-5 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input type="text" class="form-control" name="trait[]" placeholder="Others (please specify)">
                    </div>
                    @error('trait') <span class="small text-danger">Please check one traits</span> @enderror   
                </div> 
            </div>
            <div class="col-md-6">
                     
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">6. What facilities are available in your country/institution for screening rice genetic resources as per Question 5?</h5>
                </div>  
                <div class="row g-1 mb-5 justify-content-center">                 
                    <div class="form-check col-4 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w10" name="facilities[]" value="Laboratory">
                        <label class="form-check-label" for="w10">Laboratory</label>
                    </div>
                    <div class="form-check col-4 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w11" name="facilities[]" value="Field testing stations">
                        <label class="form-check-label" for="w11">Field testing stations</label>
                    </div>
                    <div class="form-check col-4 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w12" name="facilities[]" value="Greenhouse ">
                        <label class="form-check-label" for="w12">Greenhouse </label>
                    </div>
                    <div class="form-check col-6 wow zoomIn" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input class="form-check-input" type="checkbox" id="w13" name="facilities[]" value="Controlled environment chambers">
                        <label class="form-check-label" for="w13">Controlled environment chambers</label>
                    </div>
                    <div class="col-6 wow zoomIn " data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <input type="text" class="form-control" name="facilities[]" placeholder="Others (please specify)">
                    </div>
                    @error('facilities') <span class="small text-danger">Please check one facilities</span> @enderror   
                </div>

                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">7. Do you have access to hotspot locations suitable for screening the stress traits selected in Question 5?</h5>
                </div> 
                <div class="row g-4 mb-5 justify-content-center">
                    <div class="col-4">
                        <div class="row ">
                            <label class="col-5 text-end" for="opt1">No</label>
                            <div class="col-5">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="opt1" name="hotspot">
                                    <label class="form-check-label" for="opt1">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">8. (If Yes) Please provide the location details (department, region, or village):</h5>
                </div>            
                <div class="row mb-5 fs-5 justify-content-center">
                    <div class="col-12 wow zoomIn"  data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                        <div class="row g-4">
                            <div class="col-12">
                                <input type="text" class="form-control fs-5" id="location" name="location" value="{{old('location')}}" required>
                                @error('location') <span class="small text-danger">{{$message}}</span> @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-title text-center position-relative pb-1 my-3 mx-auto">
                    <h5 class="fw-bold">9. Are there valuable rice genetic resources in your country that are endangered and urgently need conservation and/or collection in collaboration with the AfricaRice Genebank? </h5>
                </div> 
                <div class="row g-4 mb-5 justify-content-center">
                    <div class="col-4">
                        <div class="row ">
                            <label class="col-5 text-end" for="opt1">No</label>
                            <div class="col-5">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="opt2" name="rice">
                                    <label class="form-check-label" for="opt2">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div id="narsopt">
          
        </div>

        
        <div class="row mb-5 justify-content-end">
            <div class="col-3">
                <button type="submit" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Submit<i class="bi bi-caret-right"></i></button>
            </div>
        </div>
        
    </form>
</div>



@endsection