@php $current = old('answers.' . $question['id']); @endphp
<div class="space-y-2" data-qtype="single">
    @foreach($question['options'] as $opt)
        <label class="option-card flex items-center gap-3">
            <input
                type="radio"
                name="answers[{{ $question['id'] }}]"
                value="{{ $opt['value'] }}"
                @checked($current === $opt['value'])
            >
            <span>{{ $opt['label'] }}</span>
        </label>
    @endforeach

    @if(!empty($question['allow_other']))
        <label class="block mt-2 text-sm text-gray-600">
            {{ $question['other_placeholder'] ?? 'Please specify' }}:
            <input type="text" name="answers[{{ $question['id'] }}_other]" class="text-input mt-1"
                   placeholder="{{ $question['other_placeholder'] ?? 'Please specify' }}"
                   value="{{ old('answers.' . $question['id'] . '_other') }}">
        </label>
    @endif
</div>
