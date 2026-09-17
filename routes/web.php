<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PagesController;
use App\Http\Controllers\QuesController;
use App\Http\Controllers\SurveyController;

Route::get('/', [PagesController::class, 'home'])->name('home');
Route::get('/inauguration', [PagesController::class, 'inauguration'])->name('inauguration');
Route::get('/genebank', [PagesController::class, 'genebank'])->name('genebank');
Route::get('/species-african', [PagesController::class, 'african'])->name('african');
Route::get('/species-asian', [PagesController::class, 'asian'])->name('asian');
Route::get('/interspecifics', [PagesController::class, 'interspecifics'])->name('interspecifics');
Route::get('/wild', [PagesController::class, 'wild'])->name('wild');
Route::get('/acquisition', [PagesController::class, 'acquisition'])->name('acquisition');
Route::get('/conservation', [PagesController::class, 'conservation'])->name('conservation');
Route::get('/safety-duplication', [PagesController::class, 'duplication'])->name('duplication');
Route::get('/regeneration', [PagesController::class, 'regeneration'])->name('regeneration');
Route::get('/characterization', [PagesController::class, 'characterization'])->name('characterization');
Route::get('/distribution', [PagesController::class, 'distribution'])->name('distribution');
Route::get('/data-management', [PagesController::class, 'data'])->name('data');
Route::get('/genomics-for-genebank', [PagesController::class, 'genomicsgbk'])->name('genomicsgbk');
Route::get('/quality-control-analysis', [PagesController::class, 'qca'])->name('qca');
Route::get('/sub-setting', [PagesController::class, 'subsetting'])->name('subsetting');
Route::get('/articles', [PagesController::class, 'articles'])->name('articles');
Route::get('/book', [PagesController::class, 'book'])->name('book');
Route::get('/subsets', [PagesController::class, 'subsets'])->name('subsets');
Route::get('/genomics-data', [PagesController::class, 'genomicsdata'])->name('genomicsdata');
Route::get('/characterization-data', [PagesController::class, 'chardata'])->name('chardata');
Route::get('/contact', [PagesController::class, 'contact'])->name('contact');


Route::get('/request-for-germplasm', [PagesController::class, 'genesys'])->name('req');



//Questionnaire
Route::get('/nars-evaluation', [QuesController::class, 'swfeed'])->name('swfeed');
Route::post('/nars-evaluation', [QuesController::class, 'saveswfeed']);
Route::get('/nars-evaluation-end', [QuesController::class, 'qswend'])->name('qswend');
Route::get('/nars-evaluation-data', [QuesController::class, 'data2']);
Route::get('/export_xls_ne', [QuesController::class, 'expswdata'])->name('expswdata');

Route::get('/feedback', [QuesController::class, 'home'])->name('qst');
Route::get('/page-1', [QuesController::class, 'page1'])->name('p1');
Route::post('/page-1', [QuesController::class, 'form1']);
Route::get('/page-2', [QuesController::class, 'page2'])->name('p2');
Route::post('/page-2', [QuesController::class, 'form2']);

/*Route::get('/page-3', [QuesController::class, 'page3'])->name('p3');
Route::post('/page-3', [QuesController::class, 'form3']);
Route::post('/rech-acc', [QuesController::class, 'rech']);
Route::post('/select-accession', [QuesController::class, 'addacc'])->name('addacc');*/

Route::get('/page-3', [QuesController::class, 'page4'])->name('p4');
Route::post('/page-3', [QuesController::class, 'form4']);
Route::get('/page-4', [QuesController::class, 'page5'])->name('p5');
Route::post('/page-4', [QuesController::class, 'form5']);
Route::get('/page-5', [QuesController::class, 'page6'])->name('p6');
Route::post('/page-5', [QuesController::class, 'form6']);
Route::get('/end', [QuesController::class, 'end'])->name('qend');

Route::get('/fb-all-data', [QuesController::class, 'data'])->name('dt');

Route::middleware('auth')->group(function () {
    Route::get('/export_xls', [QuesController::class, 'exportData'])->name('exp');
});


// Cgiar survey Public
Route::get('/molecular-characterisation-survey', [SurveyController::class, 'landing'])->name('landing');
Route::get('/survey', [SurveyController::class, 'index'])->name('survey.index');
Route::post('/survey/draft', [SurveyController::class, 'saveDraft'])->name('survey.draft');
Route::get('/survey/draft/{uuid}', [SurveyController::class, 'loadDraft'])->name('survey.draft.load');
Route::post('/survey/submit', [SurveyController::class, 'submit'])->name('survey.submit');
Route::get('/thank-you/{uuid}', [SurveyController::class, 'thankYou'])->name('survey.thankyou');


// Admin
Route::get('/admin/login', [AdminController::class, 'loginForm'])->name('admin.login');
Route::post('/admin/login', [AdminController::class, 'login'])->name('admin.login.post');
Route::post('/admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
Route::get('/admin/responses', [AdminController::class, 'responses'])->name('admin.responses');
Route::get('/admin/export/csv', [AdminController::class, 'exportCsv'])->name('admin.export.csv');
Route::get('/admin/export/json', [AdminController::class, 'exportJson'])->name('admin.export.json');


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
