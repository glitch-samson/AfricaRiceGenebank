@extends('layouts.surveytemp')

@section('title', 'Error')

@section('content')
<div class="min-h-screen flex items-center justify-center px-6">
    <div class="text-center">
        <h1 class="font-display text-3xl font-bold text-deep-blue mb-4">Something went wrong</h1>
        <p class="text-gray-600 mb-6">We apologize for the inconvenience. Please try again later.</p>
        <a href="{{ route('home') }}" class="btn-primary">Return to Home</a>
    </div>
</div>
@endsection
