<input
    type="email"
    name="answers[{{ $question['id'] }}]"
    class="text-input"
    placeholder="{{ $question['placeholder'] ?? '' }}"
    value="{{ old('answers.' . $question['id']) }}"
    @if(!empty($question['required'])) required @endif
>
