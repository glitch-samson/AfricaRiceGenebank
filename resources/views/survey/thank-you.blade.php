@extends('layouts.surveytemp')

@section('title', 'Thank You · CGIAR Genebank Survey')

@section('content')
<div class="min-h-screen flex items-center justify-center px-6 py-20">
    <div class="max-w-lg w-full text-center">
        <div class="w-20 h-20 rounded-full bg-cgiar-green/10 text-cgiar-green flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h1 class="font-display text-3xl font-bold text-deep-blue mb-4">Thank You</h1>
        <p class="text-gray-600 leading-relaxed mb-6">
            Your response has been recorded successfully. We appreciate your time and valuable insights.
        </p>
        <div class="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">Response ID</div>
            <div class="font-mono text-sm text-deep-blue font-semibold break-all">{{ $response->response_uuid }}</div>
        </div>
        <a href="{{ route('home') }}" class="btn-primary inline-flex items-center gap-2">
            Return to Home
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </a>
    </div>
</div>
@endsection
