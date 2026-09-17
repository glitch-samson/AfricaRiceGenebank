@extends('layouts.surveytemp')

@section('title', 'CGIAR Genebank Molecular Characterisation Survey')

@section('content')
    <div class="min-h-screen">
        <!-- Hero -->
        <section class="hero-gradient text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dna" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dna)" />
                </svg>
            </div>
            <div class="max-w-6xl mx-auto px-6 py-20 relative z-10">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <img src="{{ asset('files/cgiarsurvey/logos/Logo_CG-Genebank1.png') }}"
                            alt="CGIAR Genebank Accelerator" class="h-14 w-auto mb-2">
                        <div
                            class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                            <span class="w-2 h-2 rounded-full bg-warm-gold"></span>
                            CGIAR Genebank Accelerator · AoW5 Molecular Characterisation
                        </div>
                        <h1 class="font-display text-4xl lg:text-5xl font-bold leading-tight">
                            Molecular Characterisation Survey
                        </h1>
                        <p class="text-lg text-white/80 leading-relaxed max-w-lg">
                            Survey of National Genebank Managers — Strengthening NARS Partner Capacity for Integrated
                            In-situ and Ex-situ Conservation
                        </p>
                        <div class="flex flex-wrap gap-4 pt-4">
                            <a href="{{ route('survey.index') }}"
                                class="btn-primary inline-flex items-center gap-2 text-lg">
                                Start Survey
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <div class="relative">
                            <img src="{{ asset('files/cgiarsurvey/images/hero.jpg') }}" alt="Genebank"
                                class="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                                onerror="this.onerror=null;this.src='{{ asset('files/cgiarsurvey/images/hero.png') }}'">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Overview -->
        <section class="py-20 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <p class="text-cgiar-green font-semibold tracking-wider uppercase text-sm mb-3">Survey Overview</p>
                    <h2 class="font-display text-3xl font-bold text-deep-blue">Six Modules · One Purpose</h2>
                    <p class="text-gray-600 mt-4 max-w-2xl mx-auto">This survey explores your genebank's molecular
                        characterisation capacity, infrastructure, policy environment, and interest in future DSI
                        collaboration with CGIAR.</p>
                    <img src="{{ asset('files/cgiarsurvey/images/overview.jpg') }}" alt="Survey overview"
                        class="mt-8 mx-auto rounded-2xl shadow-lg max-h-72 object-cover w-full max-w-3xl"
                        onerror="this.style.display='none'">
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    @foreach($sections as $i => $section)
                        <div class="section-card p-6 flex flex-col">
                            <div class="flex items-center gap-3 mb-4">
                                <span
                                    class="w-10 h-10 rounded-full bg-cgiar-green/10 text-cgiar-green flex items-center justify-center font-bold text-sm">{{ $i + 1 }}</span>
                                <span class="text-xs font-semibold text-warm-gold uppercase tracking-wider">Module</span>
                            </div>
                            <h3 class="font-display text-lg font-bold text-deep-blue mb-2">{{ $section['title'] }}</h3>
                            <p class="text-gray-500 text-sm leading-relaxed flex-grow">{{ $section['subtitle'] }}</p>
                            <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span class="text-xs text-gray-400">{{ count($section['questions']) }} questions</span>
                                <a href="{{ route('survey.index') }}"
                                    class="text-cgiar-green text-sm font-medium hover:underline">Begin here →</a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-deep-blue text-white/70 py-12 px-6">
            <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-3">
                    <img src="{{ asset('files/cgiarsurvey/logos/Logo_CG-Genebank2.png') }}" alt="CGIAR Genebank Accelerator"
                        class="h-8 w-auto opacity-90">
                    <div class="text-sm">© {{ date('Y') }} CGIAR Genebank Accelerator</div>
                </div>
                <div class="text-sm">Developed for AoW5 · DSI Initiative</div>
            </div>
        </footer>
    </div>
@endsection
