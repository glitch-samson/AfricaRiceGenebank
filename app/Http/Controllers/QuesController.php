<?php

namespace App\Http\Controllers;

use App\Exports\ExportFeed;
use App\Exports\ExportFeedsw;
use App\Models\Accession;
use App\Models\Feed;
use App\Models\Feedsw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Maatwebsite\Excel\Facades\Excel;

class QuesController extends Controller
{
    
    public function home(){ return view('questionnaire.home'); }
    public function page1(){ return view('questionnaire.page1'); }    
    public function page2(){ if (!Session::has('data')) { return redirect()->route('qst'); } return view('questionnaire.page2'); }
    public function page3(){ if (!Session::has('data')) { return redirect()->route('qst'); } return view('questionnaire.page3'); }
    public function page4(){ 
        if (!Session::has('data')) { return redirect()->route('qst'); } 
        //if (count(Session::get('data')['q5'])<1){return redirect()->route('p3');}
        return view('questionnaire.page4'); 
    }
    public function page5(){ if (!Session::has('data')) { return redirect()->route('qst'); } return view('questionnaire.page5'); }
    public function page6(){ if (!Session::has('data')) { return redirect()->route('qst'); } return view('questionnaire.page6'); }
    public function end(){ return view('questionnaire.end'); }
    public function form1(Request $req){
        $req->validate([
            'mail' => ['required', 'email'],
        ]);
        //Recherche dans la base d'email et si le formulaire a déjà été completé.
        //return redirect()->back()->with('er',"Sorry you can't submit this form.");

        //Recherche dans la base si le formulaire a déjà été completé.
        $sub = Feed::where('email',htmlspecialchars($req->mail))->get();
        if ($sub->count()>0) {
            return redirect()->route('p1')->with('er',"You have already submitted the feedback.");
        }

        $data = ['q1' => null, 'q2' => null,'q3' => null,'q32' => [],'q5' => [], 'q6' => null, 'q7' => null, 'q8' => null,'q81' => null, 'q9' => null, 'q10' => null, 'q11' => null];
        $data['q1']=$req->mail;
        Session::put('data', $data);
        return redirect()->route('p2');; 
    }
    public function form2(Request $req){
        if (!Session::has('data')) { return redirect()->route('qst'); }
        if (!$req->requested) { Session::forget('data'); return redirect()->route('qst'); }
        $req->validate([
            'institution' => ['required', 'string'],
            'groups' => ['required'],
        ]);
        $data =  Session::get('data');
        $data['q2']=$req->institution;
        $data['q3']=$req->groups;
        if ($req->groups == 'nars_3') {
            $nars = [
                'q3a' => $req->nars_31,
                'q3o1' => $req->nars_obs1,
                'q3b' => $req->nars_32,
                'q3o2' => $req->nars_obs2,
                'q3c' => $req->nars_33,
                'q3o3' => $req->nars_obs3,
                'q3d' => $req->nars_34,
                'q3o4' => $req->nars_obs4,
            ];
            $data['q32']=$nars;
        }
        $data['q4']=$req->requested;
        $data['q4']=$req->requested;
        Session::put('data', $data);
        //var_dump($data);
        //return redirect()->route('p3');
        return redirect()->route('p4');
    }
    /*
    public function form3(Request $req){
        if (!Session::has('data')) { return redirect()->route('qst'); }
        $req->validate([
            'wab' => ['required'],
        ]);
        $data =  Session::get('data');
        $data['q5']=$req->wab;
        Session::put('data', $data);
        return redirect()->route('p4');
    }*/
    public function form4(Request $req){
        if (!Session::has('data')) { return redirect()->route('qst'); }
        $req->validate([
            'caract' => ['required'],
            'specific' => ['required'],
        ]);
        $data =  Session::get('data');
        $data['q6']=$req->caract;
        $data['q7']=$req->specific;
        Session::put('data', $data);
        return redirect()->route('p5');
    }
    public function form5(Request $req){
        if (!Session::has('data')) { return redirect()->route('qst'); }
        $req->validate([
            'futurtrait' => ['required'],
            'percent' => ['required','decimal:0,5','min:0', 'max:100'],
        ]);
        $data =  Session::get('data');
        $data['q8']=$req->futurtrait;
        $data['q81']=$req->other_8;
        $data['q9']=$req->percent;
        Session::put('data', $data);
        return redirect()->route('p6');
    }
    public function form6(Request $req){
        if (!Session::has('data')) { return redirect()->route('qst'); }
        $req->validate([
            'seedrate' => ['required'],
            'servicerate' => ['required'],
            'comments' => ['required'],
        ]);
        $data =  Session::get('data');
        $data['q10']=$req->seedrate;
        $data['q11']=$req->servicerate;
        $data['q12']=$req->comments;
        Session::put('data', $data);
        //var_dump($data);

        //Enregistrement en base
        
        /*foreach ($data['q5'] as $acc) {            
            $feed  = new Feed();
            $feed->email =  $data['q1'];
            $feed->institution =  $data['q2'];
            $feed->accession =  $acc;
            //if ($data['q4']) { $feed->requested =  1; }
            $var = $data['q3'];
            if ($data['q3']=='nars_3') {
                if ($data['q32']['q3a'] == 'Yes') {$feed->nars_3_exchange = 1; } else { $feed->nars_3_exp_1 = $data['q32']['q3o1']; }
                if ($data['q32']['q3b'] == 'Yes') {$feed->nars_3_share = 1; } else { $feed->nars_3_exp_2 = $data['q32']['q3o2']; }
                if ($data['q32']['q3c'] == 'Yes') {$feed->nars_3_send = 1; } else { $feed->nars_3_exp_3 = $data['q32']['q3o3']; }
                if ($data['q32']['q3d'] == 'Yes') {$feed->nars_3_evaluation = 1; } else { $feed->nars_3_exp_4 = $data['q32']['q3o4']; }
            }
            $feed->$var = 1;
            $feed->requested =  1;
            //foreach ($data['q3'] as $g) { $feed->$data['q3'] = 1; }
            foreach ($data['q6'] as $g) { $feed->$g = 1; }
            foreach ($data['q7'] as $g) { $feed->$g = 1; }
            foreach ($data['q8'] as $g) { $feed->$g = 1; }
            $feed->other_8 =  $data['q81'];
            $feed->percent =  $data['q9'];
            $feed->seedrate =  $data['q10'];
            $feed->servicerate =  $data['q11'];
            $feed->comments =  $data['q12'];
            $feed->save();
        }*/

        $feed  = new Feed();
        $feed->email =  $data['q1'];
        $feed->institution =  $data['q2'];
        $feed->accession =  null;
        //if ($data['q4']) { $feed->requested =  1; }
        $var = $data['q3'];
        if ($data['q3']=='nars_3') {
            if ($data['q32']['q3a'] == 'Yes') {$feed->nars_3_exchange = 1; } else { $feed->nars_3_exp_1 = $data['q32']['q3o1']; }
            if ($data['q32']['q3b'] == 'Yes') {$feed->nars_3_share = 1; } else { $feed->nars_3_exp_2 = $data['q32']['q3o2']; }
            if ($data['q32']['q3c'] == 'Yes') {$feed->nars_3_send = 1; } else { $feed->nars_3_exp_3 = $data['q32']['q3o3']; }
            if ($data['q32']['q3d'] == 'Yes') {$feed->nars_3_evaluation = 1; } else { $feed->nars_3_exp_4 = $data['q32']['q3o4']; }
        }
        $feed->$var = 1;
        $feed->requested =  1;
        //foreach ($data['q3'] as $g) { $feed->$data['q3'] = 1; }
        foreach ($data['q6'] as $g) { $feed->$g = 1; }
        foreach ($data['q7'] as $g) { $feed->$g = 1; }
        foreach ($data['q8'] as $g) { $feed->$g = 1; }
        $feed->other_8 =  $data['q81'];
        $feed->percent =  $data['q9'];
        $feed->seedrate =  $data['q10'];
        $feed->servicerate =  $data['q11'];
        $feed->comments =  $data['q12'];
        $feed->save();
        Session::forget('data');
        return redirect()->route('qend');     
        
    }

    public function data(){
        $feed = Feed::paginate(2);
        return view('questionnaire.data')->with('data',$feed);
    }
    public function exportData(Request $request){
        return Excel::download(new ExportFeed, 'feeddata.xls');
    }
    
    public function addacc(Request $req){
        if (!Session::has('data')) { return redirect()->route('qst'); }
        $req->validate([
            'wab' => ['required'],
        ]);
        $data =  Session::get('data');
        
        $tabAcc = Session::get('data')['q5'];
        //var_dump($tabAcc);
        $n =0;
        foreach ($req->wab as $l) {
            if (!in_array($l, $tabAcc)) {
                $tabAcc[]=$l;
                $n++;
            }
        }
        $data['q5']=$tabAcc;
        Session::put('data', $data);
        $tabAcc = Accession::whereIn('accession',$tabAcc)->get();
        $ret = ['n'=>$n,'elt' => $tabAcc];
        //var_dump($tabAcc);
        return redirect()->route('p3')->with('acc',$ret);
    }
    public function rech(Request $req){        
        $acc = Accession::whereIn('accession',explode(" ", $req->dt))->orWhere('name','LIKE',"%$req->dt%")->get();
        //$acc = Feed::all();
        return $acc;
    }

    public function data2(){ 
        $feed = Feedsw::paginate(50);
        return view('questionnaire.data2')->with('data',$feed);
    }
    public function swfeed(){ return view('questionnaire.pagesw'); }
    public function qswend(){ return view('questionnaire.qswend'); }
    public function saveswfeed(Request $req){
        $req->validate([
            'name' => ['required'],
            'email' => ['required'],
            'institution' => ['required'],
            'trait' => ['required'],
            'facilities' => ['required'],
        ]);
        $feed  = new Feedsw();
        $feed->email =  $req->email;
        $feed->name =  $req->name;
        $feed->institution =  $req->institution;
        $feed->contact =  $req->contact;
        $traits = null;
        foreach ($req->trait as $g) {
            $traits .= $g.'; ';
        }
        $feed->stress_traits = $traits;
        $facilities = null;
        foreach ($req->facilities as $g) {
            $facilities .= $g.'; ';
        }
        $feed->facilities = $traits;
        $feed->hotspot_location = ($req->hotspot) ? "Yes" : "No" ;
        $feed->location = ($req->hotspot) ?  $req->location : Null ;
        $feed->rice_genetic = ($req->rice) ? "Yes" : "No" ;
        if ($feed->save()) {
            return redirect()->route('qswend');
        }else {
            return redirect()->back();
        }
    }
    public function expswdata(){
        return Excel::download(new ExportFeedsw, 'nars_evaluation_feed_data.xls');
    }
}
