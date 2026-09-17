<input
    type="text"
    name="answers[{{ $question['id'] }}]"
    class="text-input"
    placeholder="{{ $question['placeholder'] ?? '' }}"
    value="{{ old('answers.' . $question['id']) }}"
>
