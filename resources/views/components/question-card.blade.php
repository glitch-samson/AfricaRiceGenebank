{{--
    Plain server-rendered question card. No JavaScript is required to see or answer
    any question. Conditional questions are always shown (a small note explains when
    they apply) so the form is reliable without Alpine.

    Follow-up sub-questions (ids containing an underscore, e.g. q36e_coordination,
    q44_partner_origin, q14_species) belong to a parent question that already shows the
    "QNN." number. Rendering the number again on each follow-up made the survey look like
    it repeated questions (e.g. "Q36e ... Q36e ..."). Follow-ups now render as a clean,
    indented continuation ("↳ <text>") with no repeated number, preserving the answer key.
--}}
@php $isFollowUp = str_contains($question['id'], '_'); @endphp
<div id="question-{{ $question['id'] }}" class="bg-white rounded-2xl shadow-lg p-6 lg:p-8 question-card {{ $isFollowUp ? 'question-followup' : '' }}" data-question-id="{{ $question['id'] }}" data-question-key="{{ $question['id'] }}">
    <div class="mb-4">
        <div class="question-label">
            @if(!empty($question['required']))
                <span class="text-red-500 mr-1">*</span>
            @endif
            @if($isFollowUp)
                <span class="followup-arrow" aria-hidden="true">↳</span><span>{{ $question['text'] }}</span>
            @else
                <span>{{ $question['number'] }}. {{ $question['text'] }}</span>
            @endif
        </div>
        @if(!empty($question['subtext']))
            <div class="question-subtext">{{ $question['subtext'] }}</div>
        @endif
        @if(!empty($question['conditional']))
            <div class="question-subtext text-gray-400 italic">Only answer this if it applies to your previous answer.</div>
        @endif
    </div>

    @switch($question['type'])
        @case('text')
            @include('components.questions.text', ['question' => $question])
            @break
        @case('email')
            @include('components.questions.email', ['question' => $question])
            @break
        @case('single')
            @include('components.questions.single', ['question' => $question])
            @break
        @case('multi')
            @include('components.questions.multiple', ['question' => $question])
            @break
        @case('matrix')
            @include('components.questions.matrix', ['question' => $question])
            @break
        @case('ranking')
            @include('components.questions.ranking', ['question' => $question])
            @break
        @case('longtext')
            @include('components.questions.longtext', ['question' => $question])
            @break
        @default
            <p class="text-sm text-red-500">Unsupported question type: {{ $question['type'] }}</p>
    @endswitch
</div>
