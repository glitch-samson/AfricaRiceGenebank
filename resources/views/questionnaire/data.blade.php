@extends('layouts.questemp') 

@section('titre')
All data
@endsection
@section('contenu')
<div class="container-fluid py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <div class="py-5">
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h1 class="mb-0">List feedback</h1>
        </div>        
        <div class="table-responsive">
            <table class="table table-bordered border-primary">
                <thead class="text-center">
                    <tr>
                        <th scope="col" rowspan="2">Email</th>
                        <th scope="col" rowspan="2">Institution name</th>
                        <th scope="col" colspan="5">Institution classe</th>
                        <th scope="col" rowspan="2">Requested</th>
                        <th scope="col" rowspan="2">Accession Number</th>
                        <th scope="col" colspan="9">Traits informing decision</th>
                        <th scope="col" colspan="10">Specific results received</th>
                        <th scope="col" colspan="10">Future traits </th>
                        <th scope="col" rowspan="2">Percentage</th>
                        <th scope="col" rowspan="2">Seed rate</th>
                        <th scope="col" rowspan="2">Service rate</th>
                        <th scope="col" rowspan="2">Comments</th>
                    </tr>
                    <tr>
                        <th scope="col">CGIAR</th> 
                        <th scope="col">NARS</th>
                        <th scope="col">University</th>
                        <th scope="col">Individual</th>
                        <th scope="col">Famer</th>

                        <th scope="col">Drought</th>
                        <th scope="col">Heat</th>
                        <th scope="col">Flooding</th>
                        <th scope="col">Salinity</th>
                        <th scope="col">Insect</th>
                        <th scope="col">Pests</th>
                        <th scope="col">Diseases</th>
                        <th scope="col">Yield</th>
                        <th scope="col">Quality</th>

                        <th scope="col">In evaluation</th>
                        <th scope="col">Publication</th>
                        <th scope="col">Characterization</th>
                        <th scope="col">Identification</th>
                        <th scope="col">Markers</th>
                        <th scope="col">Expansion</th>
                        <th scope="col">Breeding</th>
                        <th scope="col">Cultivar</th>
                        <th scope="col">Information</th>
                        <th scope="col">Planting</th>

                        <th scope="col">Drought</th>
                        <th scope="col">Heat</th>
                        <th scope="col">Waterlogging</th>
                        <th scope="col">Salinity</th>
                        <th scope="col">Insect</th>
                        <th scope="col">Pests</th>
                        <th scope="col">Diseases</th>
                        <th scope="col">Yield</th>
                        <th scope="col">Quality</th>
                        <th scope="col">Other</th>
                    </tr>
                </thead>
                <tbody>
                @foreach ($data as $d)
                <tr>
                  <td>{{$d->email}}</td>
                  <td>{{$d->institution}}</td>

                  <td>{{$d->cgiar_3}}</td>
                  <td>{{$d->nars_3}}</td>
                  <td>{{$d->university_3}}</td>
                  <td>{{$d->individual_3}}</td>
                  <td>{{$d->famer_3}}</td>

                  <td>{{$d->requested}}</td>
                  <td>{{$d->accession}}</td>

                  <td>{{$d->drought_6}}</td>
                  <td>{{$d->heat_6}}</td>
                  <td>{{$d->flooting_6}}</td>
                  <td>{{$d->salinity_6}}</td>
                  <td>{{$d->insect_6}}</td>
                  <td>{{$d->pest_6}}</td>
                  <td>{{$d->disease_6}}</td>
                  <td>{{$d->yield_6}}</td>
                  <td>{{$d->quality_6}}</td>

                  <td>{{$d->inevaluation_7}}</td>
                  <td>{{$d->publication_7}}</td>
                  <td>{{$d->characterization_7}}</td>
                  <td>{{$d->identification_7}}</td>
                  <td>{{$d->markers_7}}</td>
                  <td>{{$d->expansion_7}}</td>
                  <td>{{$d->breeding_7}}</td>
                  <td>{{$d->cultivar_7}}</td>
                  <td>{{$d->information_7}}</td>
                  <td>{{$d->planting_7}}</td>

                  <td>{{$d->drought_8}}</td>
                  <td>{{$d->heat_8}}</td>
                  <td>{{$d->salinity_8}}</td>
                  <td>{{$d->insect_8}}</td>
                  <td>{{$d->pest_8}}</td>
                  <td>{{$d->disease_8}}</td>
                  <td>{{$d->yield_8}}</td>
                  <td>{{$d->quality_8}}</td>
                  <td>{{$d->waterlogging_8}}</td>
                  <td>{{$d->other_8}}</td>

                  <td>{{$d->percent}}</td>
                  <td>{{$d->seedrate}}</td>
                  <td>{{$d->servicerate}}</td>
                  <td>{{$d->comments}}</td>
                </tr>
                @endforeach
                </tbody>
            </table>
        </div>  
        <div class="row mt-5 justify-content-end">
            <div class="col-2">
                <a href="{{ route('exp') }}" class="btn btn-outline-primary py-md-3 px-md-5 me-3 animated slideInLeft">Export <i class="bi bi-file-earmark-excel"></i></a>
            </div>
        </div>      
    </div>
    <div class="d-flex justify-content-end">{!! $data->links() !!}</div>
</div>



@endsection