@extends('layouts.surveytemp')

@section('title', 'All Responses · Admin')

@section('content')
<div class="min-h-screen bg-cream">
    <div class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <a href="{{ route('admin.dashboard') }}" class="font-display font-bold text-deep-blue">← Dashboard</a>
            </div>
            <div class="flex items-center gap-4">
                <a href="{{ route('admin.export.csv') }}" class="text-sm text-gray-600 hover:text-cgiar-green">Export CSV</a>
                <a href="{{ route('admin.export.json') }}" class="text-sm text-gray-600 hover:text-cgiar-green">Export JSON</a>
                <form method="POST" action="{{ route('admin.logout') }}" class="inline">
                    @csrf
                    <button type="submit" class="text-sm text-red-600 hover:text-red-700">Logout</button>
                </form>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 overflow-x-auto">
            <h3 class="font-display font-bold text-deep-blue mb-4">All Responses ({{ $responses->total() }})</h3>
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-gray-200 text-left text-gray-500">
                        <th class="py-2 pr-4">Date</th>
                        <th class="py-2 pr-4">Name</th>
                        <th class="py-2 pr-4">Email</th>
                        <th class="py-2 pr-4">Institution</th>
                        <th class="py-2 pr-4">Country</th>
                        <th class="py-2">Position</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($responses as $r)
                    <tr class="border-b border-gray-100 hover:bg-gray-50">
                        <td class="py-2 pr-4">{{ $r->submitted_at?->format('Y-m-d H:i') }}</td>
                        <td class="py-2 pr-4">{{ $r->respondent_name ?: '—' }}</td>
                        <td class="py-2 pr-4">{{ $r->email ?: '—' }}</td>
                        <td class="py-2 pr-4">{{ $r->institution ?: '—' }}</td>
                        <td class="py-2 pr-4">{{ $r->country ?: '—' }}</td>
                        <td class="py-2">{{ $r->position ?: '—' }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="mt-4">
                {{ $responses->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
