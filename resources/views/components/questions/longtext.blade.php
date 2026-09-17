<textarea
    name="answers[{{ $question['id'] }}]"
    class="longtext-input"
    placeholder="{{ $question['placeholder'] ?? '' }}"
>{{ old('answers.' . $question['id']) }}</textarea>
