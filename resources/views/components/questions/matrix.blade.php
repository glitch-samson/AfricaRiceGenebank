@php $current = (array) old('answers.' . $question['id'], []); @endphp
<div class="overflow-x-auto" data-qtype="matrix">
    <table class="w-full min-w-[500px]">
        <thead>
            <tr>
                <th class="text-left text-sm font-medium text-gray-500 py-2"></th>
                @foreach($question['columns'] as $col)
                    <th class="matrix-header matrix-cell py-2">{{ $col }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach($question['rows'] as $row)
                <tr class="border-t border-gray-100">
                    <td class="text-sm text-gray-700 py-3 pr-4">{{ $row }}</td>
                    @foreach($question['columns'] as $col)
                        <td class="matrix-cell">
                            <input
                                type="radio"
                                name="answers[{{ $question['id'] }}][{{ $row }}]"
                                value="{{ $col }}"
                                @checked(($current[$row] ?? null) === $col)
                            >
                        </td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
