@extends('layouts.surveytemp')

@section('title', 'Admin Login · CGIAR Genebank Survey')

@section('content')
<div class="min-h-screen flex items-center justify-center px-6">
    <div class="max-w-md w-full">
        <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-full bg-deep-blue text-white flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h1 class="font-display text-2xl font-bold text-deep-blue">Admin Access</h1>
            <p class="text-gray-500 text-sm mt-2">CGIAR Genebank Survey Dashboard</p>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-8">
            @if($errors->any())
                <div class="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {{ $errors->first() }}
                </div>
            @endif
            @if(session('warning'))
                <div class="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-sm">
                    {{ session('warning') }}
                </div>
            @endif
            @if(empty(config('survey.admin_password')))
                <div class="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-sm">
                    <strong>Local mode:</strong> Admin password not configured in .env. Set <code>SURVEY_ADMIN_PASSWORD</code> to enable admin login.
                </div>
            @endif
            <form method="POST" action="{{ route('admin.login.post') }}">
                @csrf
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input type="password" name="password" required class="text-input" placeholder="Enter admin password">
                </div>
                <button type="submit" class="btn-primary w-full justify-center">Sign In</button>
            </form>
        </div>
    </div>
</div>
@endsection
