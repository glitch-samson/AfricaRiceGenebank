@extends('layouts.questemp') 

@section('titre')
All Science week feedback data
@endsection
@section('contenu')
<div class="container-fluid py-5  wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
    <div class="py-5">
        <div class="section-title text-center position-relative pb-3 my-5 mx-auto" style="max-width: 800px;">
            <h1 class="mb-0">List nars-evaluation data</h1>
        </div>        
        <div class="table-responsive">
            <table class="table table-bordered border-primary">
                <thead class="text-center">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Institution</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Stress Traits</th>
                        <th scope="col">Facilities</th>
                        <th scope="col">Hotspot location</th>
                        <th scope="col">Location</th>
                        <th scope="col">Rice genetic</th>
                        <th scope="col">Date submited</th>
                    </tr>
                </thead>
                <tbody>
                @foreach ($data as $d)
                <tr>
                    <td>{{$d->name}}</td>
                    <td>{{$d->email}}</td>
                    <td>{{$d->institution}}</td>
                    <td>{{$d->contact}}</td>
                    <td>{{$d->stress_traits}}</td>
                    <td>{{$d->facilities}}</td>
                    <td>{{$d->hotspot_location}}</td>
                    <td>{{$d->location}}</td>
                    <td>{{$d->rice_genetic}}</td>
                    <td>{{$d->created_at}}</td>
                </tr>
                @endforeach
                </tbody>
            </table>
        </div>  
        <div class="row mt-5 justify-content-end">
            <div class="col-2">
                <a href="{{ route('expswdata') }}" class="btn btn-outline-primary py-md-3 px-md-5 me-3 animated slideInLeft">Export <i class="bi bi-file-earmark-excel"></i></a>
            </div>
        </div>      
    </div>
    <div class="d-flex justify-content-end">{!! $data->links() !!}</div>
</div>



@endsection