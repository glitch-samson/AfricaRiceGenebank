@php $current = (array) old('answers.' . $question['id'], []); @endphp
<div data-qtype="ranking">
    <p class="text-sm text-gray-500 mb-3">Assign ranks 1, 2, and 3 to your top 3 choices (1 = most important). Leave the rest blank.</p>
    <div class="space-y-2">
        @foreach($question['options'] as $opt)
            <div class="flex items-center gap-4 p-3 rounded-lg border border-gray-200">
                <span class="flex-grow text-sm">{{ $opt['label'] }}</span>
                <select class="ranking-select" name="answers[{{ $question['id'] }}][{{ $opt['value'] }}]">
                    <option value="">&mdash;</option>
                    @foreach(['1','2','3'] as $rank)
                        <option value="{{ $rank }}" @selected(($current[$opt['value']] ?? '') == $rank)>{{ $rank }}</option>
                    @endforeach
                </select>
            </div>
        @endforeach
    </div>

    @if(!empty($question['allow_other']))
        <label class="block mt-3 text-sm text-gray-600">
            {{ $question['other_placeholder'] ?? 'Please specify other' }}:
            <input type="text" name="answers[{{ $question['id'] }}_other]" class="text-input mt-1"
                   placeholder="{{ $question['other_placeholder'] ?? 'Please specify other' }}"
                   value="{{ old('answers.' . $question['id'] . '_other') }}">
        </label>
    @endif
</div>
