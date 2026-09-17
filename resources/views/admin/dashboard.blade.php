@extends('layouts.surveytemp')

@section('title', 'Admin Dashboard · CGIAR Genebank Survey')

@section('content')
<div class="min-h-screen bg-cream">
    <!-- Admin Header -->
    <div class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <a href="{{ route('landing') }}" class="font-display font-bold text-deep-blue">CGIAR Survey</a>
                <span class="text-gray-300">|</span>
                <span class="text-sm text-gray-500">Admin Dashboard</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="{{ route('admin.responses') }}" class="text-sm text-gray-600 hover:text-cgiar-green">All Responses</a>
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
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Responses</div>
                <div class="text-3xl font-bold text-deep-blue">{{ $total }}</div>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">Countries</div>
                <div class="text-3xl font-bold text-cgiar-green">{{ $countries }}</div>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">Institutions</div>
                <div class="text-3xl font-bold text-warm-gold">{{ $institutions }}</div>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">Recent</div>
                <div class="text-3xl font-bold text-deep-blue">{{ count($recent) }}</div>
                <div class="text-xs text-gray-400 mt-1">last 10 submissions</div>
            </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <!-- Responses by Country -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 class="font-display font-bold text-deep-blue mb-4">Responses by Country</h3>
                <div class="space-y-2 max-h-80 overflow-y-auto">
                    @foreach($byCountry as $row)
                    <div class="flex items-center justify-between text-sm py-1 border-b border-gray-50">
                        <span class="text-gray-700">{{ $row->country }}</span>
                        <span class="font-semibold text-deep-blue">{{ $row->count }}</span>
                    </div>
                    @endforeach
                </div>
            </div>

            <!-- Major Constraints -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 class="font-display font-bold text-deep-blue mb-4">Major Constraints (Q34)</h3>
                <div class="space-y-2">
                    @foreach($byConstraint as $row)
                    <div class="flex items-center gap-3">
                        <div class="flex-grow text-sm text-gray-700">{{ $row->label }}</div>
                        <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-cgiar-green rounded-full" style="width: {{ min(100, ($row->count / max($total, 1)) * 100) }}%"></div>
                        </div>
                        <div class="text-sm font-semibold text-deep-blue w-8 text-right">{{ $row->count }}</div>
                    </div>
                    @endforeach
                </div>
            </div>

            <!-- Policy Uncertainty -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 class="font-display font-bold text-deep-blue mb-4">Policy Uncertainty (Q43)</h3>
                <div class="space-y-2">
                    @foreach($byUncertainty as $row)
                    <div class="flex items-center gap-3">
                        <div class="flex-grow text-sm text-gray-700">{{ $row->label }}</div>
                        <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-warm-gold rounded-full" style="width: {{ min(100, ($row->count / max($total, 1)) * 100) }}%"></div>
                        </div>
                        <div class="text-sm font-semibold text-deep-blue w-8 text-right">{{ $row->count }}</div>
                    </div>
                    @endforeach
                </div>
            </div>

            <!-- Top Ranked Needs (Q38) -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 class="font-display font-bold text-deep-blue mb-4">Top Ranked Needs (Q38) — Rank 1</h3>
                <div class="space-y-2">
                    @foreach($q38Counts as $opt => $count)
                    <div class="flex items-center gap-3">
                        <div class="flex-grow text-sm text-gray-700">{{ $opt }}</div>
                        <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-cgiar-green rounded-full" style="width: {{ min(100, ($count / max($total, 1)) * 100) }}%"></div>
                        </div>
                        <div class="text-sm font-semibold text-deep-blue w-8 text-right">{{ $count }}</div>
                    </div>
                    @endforeach
                </div>
            </div>

            <!-- Top CGIAR Support (Q50) -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 class="font-display font-bold text-deep-blue mb-4">Top CGIAR Support Needs (Q50) — Rank 1</h3>
                <div class="space-y-2">
                    @foreach($q50Counts as $opt => $count)
                    <div class="flex items-center gap-3">
                        <div class="flex-grow text-sm text-gray-700">{{ $opt }}</div>
                        <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-deep-blue rounded-full" style="width: {{ min(100, ($count / max($total, 1)) * 100) }}%"></div>
                        </div>
                        <div class="text-sm font-semibold text-deep-blue w-8 text-right">{{ $count }}</div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>

        <!-- Recent Submissions -->
        <div class="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 class="font-display font-bold text-deep-blue mb-4">Recent Submissions</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b border-gray-200 text-left text-gray-500">
                            <th class="py-2 pr-4">Date</th>
                            <th class="py-2 pr-4">Name</th>
                            <th class="py-2 pr-4">Email</th>
                            <th class="py-2 pr-4">Institution</th>
                            <th class="py-2 pr-4">Country</th>
                            <th class="py-2">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($recent as $r)
                        <tr class="border-b border-gray-100">
                            <td class="py-2 pr-4">{{ $r->submitted_at?->format('Y-m-d H:i') }}</td>
                            <td class="py-2 pr-4">{{ $r->respondent_name ?: '—' }}</td>
                            <td class="py-2 pr-4">{{ $r->email ?: '—' }}</td>
                            <td class="py-2 pr-4">{{ $r->institution ?: '—' }}</td>
                            <td class="py-2 pr-4">{{ $r->country ?: '—' }}</td>
                            <td class="py-2 font-mono text-xs">{{ $r->response_uuid }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
