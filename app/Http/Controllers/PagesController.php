<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home(){ return view('pages.home'); }
    public function inauguration(){ return view('pages.about.inauguration'); }
    public function genebank(){ return view('pages.about.genebank'); }
    public function african(){ return view('pages.species.african'); }
    public function asian(){ return view('pages.species.asian'); }
    public function interspecifics(){ return view('pages.species.inter'); }
    public function wild(){ return view('pages.species.wild'); }
    public function acquisition(){ return view('pages.operation.acquisition'); }
    public function conservation(){ return view('pages.operation.conservation'); }
    public function duplication(){ return view('pages.operation.duplication'); }
    public function regeneration(){ return view('pages.operation.regeneration'); }
    public function characterization(){ return view('pages.operation.characterization'); }
    public function distribution(){ return view('pages.operation.distribution'); }
    public function data(){ return view('pages.operation.data'); }
    public function genomicsgbk(){ return view('pages.activitie.genomics'); }
    public function qca(){ return view('pages.activitie.quality'); }
    public function subsetting(){ return view('pages.activitie.sub'); }
    public function articles(){ return view('pages.publication.journal'); }
    public function book(){ return view('pages.publication.book'); }
    public function subsets(){ return view('pages.data.subset'); }
    public function genomicsdata(){ return view('pages.data.genomic'); }
    public function chardata(){ return view('pages.data.chardata'); }
    public function contact(){ return view('pages.contact'); }

    public function genesys(){ return view('pages.genesys'); }
}
