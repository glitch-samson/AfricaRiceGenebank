<?php

namespace App\Http\Controllers;

use App\Models\SurveyResponse;
use App\Models\SurveyDraft;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class SurveyController extends Controller
{
    public function index()
    {
        $sections = config('survey.sections');
        return view('survey.index', compact('sections'));
    }

    public function landing()
    {
        $sections = config('survey.sections');
        return view('survey.landing', compact('sections'));
    }

    public function saveDraft(Request $request)
    {
        $data = $request->validate([
            'draft_uuid' => 'nullable|string',
            'email' => 'nullable|email',
            'answers' => 'required|array',
            'current_section' => 'required|integer',
        ]);

        $draft = SurveyDraft::updateOrCreate(
            ['draft_uuid' => $data['draft_uuid'] ?? (string) Str::uuid()],
            [
                'email' => $data['email'] ?? null,
                'answers' => $data['answers'],
                'last_saved_at' => now(),
            ]
        );

        return response()->json(['success' => true, 'draft_uuid' => $draft->draft_uuid]);
    }

    public function loadDraft(string $uuid)
    {
        $draft = SurveyDraft::where('draft_uuid', $uuid)->firstOrFail();
        return response()->json(['success' => true, 'draft' => $draft]);
    }

    public function submit(Request $request)
    {
        $answers = $request->input('answers', []);

        // 1. Email required
        $emailRaw = isset($answers['q2']) ? trim($answers['q2']) : '';
        if (empty($emailRaw)) {
            return back()
                ->withInput()
                ->withErrors(['answers.q2' => 'Please provide a valid email address (Q2) before submitting the survey.']);
        }

        // 2. Email format validation
        $validator = Validator::make(['email' => $emailRaw], ['email' => 'email']);
        if ($validator->fails()) {
            return back()
                ->withInput()
                ->withErrors(['answers.q2' => 'Please enter a valid email address (Q2).']);
        }

        // 3. Duplicate prevention
        $normalized = strtolower($emailRaw);
        $existing = SurveyResponse::where('email_normalized', $normalized)->first();
        if ($existing) {
            return back()
                ->withInput()
                ->withErrors(['answers.q2' => 'A completed response has already been submitted with this email address. If you believe this is an error, please contact the survey administrator.']);
        }

        // 4. Ranking validation (Q38 and Q50 each need exactly ranks 1, 2, 3).
        //    Errors are keyed per question (answers.q38 / answers.q50) so the error
        //    summary can link each message straight to its question card.
        $rankingErrors = [];
        foreach (['q38' => 'Q38', 'q50' => 'Q50'] as $rankingId => $label) {
            $ranking = $answers[$rankingId] ?? [];
            $usedRanks = [];
            if (is_array($ranking)) {
                foreach ($ranking as $opt => $rank) {
                    if ($rank !== '' && $rank !== null) {
                        $usedRanks[] = (int) $rank;
                    }
                }
            }
            sort($usedRanks);
            if ($usedRanks !== [1, 2, 3]) {
                $rankingErrors['answers.' . $rankingId] =
                    'Please rank exactly 3 items using the ranks 1, 2 and 3 for: ' . $label . '.';
            }
        }

        if (!empty($rankingErrors)) {
            return back()
                ->withInput()
                ->withErrors($rankingErrors);
        }

        // 5. Extract key analytics fields and persist
        $q38 = $answers['q38'] ?? [];
        $q50 = $answers['q50'] ?? [];

        $response = SurveyResponse::create([
            'response_uuid' => (string) Str::uuid(),
            'respondent_name' => $answers['q1'] ?? null,
            'email' => $emailRaw,
            'email_normalized' => $normalized,
            'institution' => $answers['q3'] ?? null,
            'position' => $answers['q4'] ?? null,
            'country' => $answers['q5'] ?? null,
            'answers' => $answers,
            'q34_constraint' => $answers['q34'] ?? null,
            'q38_ranked_needs' => is_array($q38) ? json_encode($q38) : null,
            'q43_uncertainty' => $answers['q43'] ?? null,
            'q50_ranked_support' => is_array($q50) ? json_encode($q50) : null,
            'submitted_at' => now(),
        ]);

        return redirect()->route('survey.thankyou', $response->response_uuid);
    }

    public function thankYou(string $uuid)
    {
        $response = SurveyResponse::where('response_uuid', $uuid)->firstOrFail();
        return view('survey.thank-you', compact('response'));
    }

    public function health()
    {
        return response()->json([
            'status' => 'ok',
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}
