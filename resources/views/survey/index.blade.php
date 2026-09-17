@extends('layouts.surveytemp')

@section('title', 'Survey · CGIAR Genebank')

@section('content')
<div class="min-h-screen bg-cream">
    {{-- Header --}}
    <div class="bg-white border-b border-gray-200">
        <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="{{ route('landing') }}" class="flex items-center gap-3">
                <img src="{{ asset('files/cgiarsurvey/logos/Logo_CG-Genebank.png') }}" alt="CGIAR Genebank Accelerator" class="h-9 w-auto" onerror="this.style.display='none'">
                <span class="font-display font-bold text-deep-blue text-lg hidden sm:inline">CGIAR Genebank Survey</span>
            </a>
            <div class="text-sm font-medium text-deep-blue">
                {{ count($sections) }} survey modules
            </div>
        </div>
    </div>

    {{-- Scroll target used by the module navigation when switching modules. --}}
    <div id="surveyTop"></div>

    <div class="max-w-5xl mx-auto px-4 py-8">

        {{-- Page title --}}
        <div class="mb-8 text-center">
            <h1 class="font-display text-3xl font-bold text-deep-blue">{{ config('survey.subtitle') }}</h1>
            <p class="text-gray-600 mt-2">{{ config('survey.description') }}</p>
        </div>

        {{-- Validation / error summary. Each error whose key maps to a question
             (answers.qNN) renders as a clickable link to #question-qNN. survey.js
             intercepts the click to open the right module, scroll, highlight and focus.
             Without JS the link is a normal anchor and all modules are visible. --}}
        @if($errors->any())
            <div id="surveyErrorSummary" class="error-summary mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <p class="font-semibold mb-1">Please fix the following before submitting:</p>
                <ul class="list-disc list-inside">
                    @foreach($errors->getMessages() as $field => $messages)
                        @php
                            $questionKey = null;
                            if (preg_match('/answers\.([a-zA-Z0-9_]+)/', $field, $m)) {
                                $questionKey = $m[1];
                            }
                        @endphp
                        @foreach($messages as $message)
                            <li>
                                @if($questionKey)
                                    <a href="#question-{{ $questionKey }}"
                                       class="error-link"
                                       data-error-target="question-{{ $questionKey }}">{{ $message }}</a>
                                @else
                                    {{ $message }}
                                @endif
                            </li>
                        @endforeach
                    @endforeach
                </ul>
            </div>
        @endif

        {{-- Progress indicator: hidden by default, shown only when survey.js initialises. --}}
        <div class="survey-progress">
            <div class="survey-progress-row">
                <span class="survey-progress-label" id="moduleProgressLabel">Module 1 of {{ count($sections) }}</span>
                <span class="survey-progress-title" id="moduleProgressTitle">{{ $sections[0]['title'] }}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" id="moduleProgressFill" style="width: {{ round(100 / (count($sections) + 1)) }}%"></div>
            </div>
        </div>

        {{-- Module navigation / table of contents.
             No JS: normal anchors to #sectionN (all modules visible, so they work).
             JS active: survey.js intercepts each link (data-module-index) and switches
             to that module instead of doing a native jump to a hidden element. --}}
        <nav class="survey-toc bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 mb-8 flex flex-wrap gap-2 justify-center" aria-label="Survey modules">
            @foreach($sections as $i => $section)
                <a href="#section{{ $i + 1 }}" data-toc-link data-module-index="{{ $i }}"
                   class="survey-toc-link text-xs sm:text-sm font-medium text-deep-blue px-3 py-1.5 rounded-full border border-gray-200 hover:border-cgiar-green hover:text-cgiar-green transition-colors">
                    {{ $i + 1 }}. {{ $section['title'] }}
                </a>
            @endforeach
            <a href="#review-step" data-toc-link data-module-index="{{ count($sections) }}"
               class="survey-toc-link text-xs sm:text-sm font-semibold text-cgiar-green px-3 py-1.5 rounded-full border border-cgiar-green hover:bg-cgiar-green hover:text-white transition-colors">
                Review &amp; Submit
            </a>
        </nav>

        {{-- Single full-page form posting natively to survey.submit. Every module/question
             renders as plain HTML and is always submittable, even without JavaScript. --}}
        <form id="surveyForm" method="POST" action="{{ route('survey.submit') }}">
            @csrf

            @foreach($sections as $sectionIndex => $section)
                <section
                    id="section{{ $sectionIndex + 1 }}"
                    class="survey-module space-y-6 mb-12"
                    data-module-index="{{ $sectionIndex }}"
                    data-module-title="{{ $section['title'] }}"
                >
                    {{-- Section banner --}}
                    <div class="section-banner mb-6">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="text-warm-gold font-bold text-sm uppercase tracking-wider">Module {{ $sectionIndex + 1 }} of {{ count($sections) }}</span>
                        </div>
                        @if(!empty($section['image']))
                            <img src="{{ asset('files/cgiarsurvey/images/' . $section['image']) }}" alt="{{ $section['title'] }}" class="w-full h-32 object-cover rounded-lg mb-4 opacity-90" onerror="this.style.display='none'">
                        @endif
                        <h2 class="font-display text-2xl font-bold">{{ $section['title'] }}</h2>
                        @if(!empty($section['subtitle']))
                            <p class="text-white/70 mt-1 text-sm">{{ $section['subtitle'] }}</p>
                        @endif
                        @if(!empty($section['description']))
                            <p class="text-white/60 mt-2 text-sm italic">{{ $section['description'] }}</p>
                        @endif
                    </div>

                    @foreach($section['questions'] as $question)
                        @include('components.question-card', ['question' => $question])
                    @endforeach

                    {{-- Module navigation (shown only when JS is active). Buttons are type="button"
                         so they never submit the form. --}}
                    <div class="module-nav">
                        @if($sectionIndex > 0)
                            <button type="button" class="btn-secondary" data-prev>
                                &larr; Previous: {{ $sections[$sectionIndex - 1]['title'] }}
                            </button>
                        @else
                            <span class="nav-spacer"></span>
                        @endif

                        @if($sectionIndex < count($sections) - 1)
                            <button type="button" class="btn-primary" data-next>
                                Next: {{ $sections[$sectionIndex + 1]['title'] }} &rarr;
                            </button>
                        @else
                            <button type="button" class="btn-primary" data-next>
                                Continue to Review / Submit &rarr;
                            </button>
                        @endif
                    </div>
                </section>
            @endforeach

            {{-- Final review / summary step. It is the last survey-module, so in JS mode it
                 only appears after Module 6 (when the user clicks "Continue to Review").
                 survey.js fills #reviewSummary from the current form values on entry.
                 In no-JS mode every module above is already visible, so the respondent can
                 review their answers inline and simply submit here. --}}
            <section
                id="review-step"
                class="survey-module survey-review-step mb-12"
                data-module-index="{{ count($sections) }}"
                data-module-title="Review &amp; Submit"
                data-final="true"
            >
                <div class="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                    <div class="module-nav" style="margin-top:0;margin-bottom:1.5rem">
                        <button type="button" class="btn-secondary" data-prev>
                            &larr; Previous: Back to Module {{ count($sections) }}
                        </button>
                        <span class="nav-spacer"></span>
                    </div>

                    <h3 class="font-display text-2xl font-bold text-deep-blue mb-2">Review your responses</h3>
                    <p class="text-gray-500 mb-6">Please check your answers below before submitting. Use the <strong>Edit</strong> links to return to any module. Once submitted, your responses are final.</p>

                    <div id="reviewSummary" class="review-summary">
                        <p class="text-gray-500">Your answers from the modules above will be summarised here for review before you submit.</p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                        <button type="button" class="btn-secondary" data-prev>&larr; Back to Module {{ count($sections) }}</button>
                        <button type="submit" class="btn-primary flex-grow justify-center">Submit Survey</button>
                    </div>
                </div>
            </section>
        </form>
    </div>
</div>

@php
    // Lightweight metadata for the client-side review summary. Keeps SurveyController
    // untouched; the backend remains the source of truth for validation and storage.
    $surveyMeta = [];
    foreach ($sections as $si => $section) {
        $qs = [];
        foreach ($section['questions'] as $q) {
            $opts = [];
            if (!empty($q['options'])) {
                foreach ($q['options'] as $o) { $opts[$o['value']] = $o['label']; }
            }
            $qs[] = [
                'id'       => $q['id'],
                'number'   => $q['number'] ?? '',
                'text'     => $q['text'] ?? '',
                'type'     => $q['type'],
                'options'  => $opts,
                'rows'     => $q['rows'] ?? [],
            ];
        }
        $surveyMeta[] = ['index' => $si, 'title' => $section['title'], 'questions' => $qs];
    }
@endphp
@endsection

@push('scripts')
<script>window.SURVEY_META = @json($surveyMeta);</script>
<script src="{{ asset('files/cgiarsurvey/js/survey.js') }}" defer></script>
@endpush
