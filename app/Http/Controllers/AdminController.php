<?php

namespace App\Http\Controllers;

use App\Models\SurveyResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;

class AdminController extends Controller
{
    public function loginForm()
    {
        return view('admin.login');
    }

    public function login(Request $request)
    {
        $request->validate(['password' => 'required|string']);

        $key = 'admin-login:' . $request->ip();
        if (RateLimiter::tooManyAttempts($key, 5)) {
            return back()->withErrors(['password' => 'Too many login attempts. Please try again later.']);
        }

        $expected = config('survey.admin_password');
        if (!$expected) {
            return back()->withErrors(['password' => 'Admin authentication is not configured. Set SURVEY_ADMIN_PASSWORD (a bcrypt hash) in your .env file.']);
        }

        if (!$this->passwordMatches($request->password, $expected)) {
            RateLimiter::hit($key, 900);
            return back()->withErrors(['password' => 'Invalid password.']);
        }

        RateLimiter::clear($key);
        $request->session()->put('is_admin', true);
        $request->session()->put('admin_login_at', now()->toIso8601String());

        return redirect()->route('admin.dashboard');
    }

    /**
     * Accepts either a bcrypt hash (recommended) or, for local convenience,
     * a plain-text value in SURVEY_ADMIN_PASSWORD.
     */
    private function passwordMatches(string $input, string $expected): bool
    {
        if (preg_match('/^\$2[aby]\$/', $expected)) {
            return Hash::check($input, $expected);
        }
        return hash_equals($expected, $input);
    }

    public function logout(Request $request)
    {
        $request->session()->forget('is_admin');
        $request->session()->forget('admin_login_at');
        return redirect()->route('admin.login');
    }

    public function dashboard()
    {
        $check = $this->requireAdmin();
        if ($check) return $check;

        $total = SurveyResponse::count();
        $countries = SurveyResponse::whereNotNull('country')->distinct()->count('country');
        $institutions = SurveyResponse::whereNotNull('institution')->distinct()->count('institution');
        $recent = SurveyResponse::latest('submitted_at')->limit(10)->get();

        $byCountry = SurveyResponse::whereNotNull('country')
            ->selectRaw('country, COUNT(*) as count')
            ->groupBy('country')
            ->orderByDesc('count')
            ->get();

        $byConstraint = SurveyResponse::whereNotNull('q34_constraint')
            ->selectRaw('q34_constraint as label, COUNT(*) as count')
            ->groupBy('q34_constraint')
            ->get();

        $byUncertainty = SurveyResponse::whereNotNull('q43_uncertainty')
            ->selectRaw('q43_uncertainty as label, COUNT(*) as count')
            ->groupBy('q43_uncertainty')
            ->get();

        // Parse Q38 rankings
        $q38Counts = [];
        foreach (SurveyResponse::whereNotNull('q38_ranked_needs')->get() as $r) {
            $data = json_decode($r->q38_ranked_needs, true) ?? [];
            foreach ($data as $opt => $rank) {
                if ($rank == 1) {
                    $q38Counts[$opt] = ($q38Counts[$opt] ?? 0) + 1;
                }
            }
        }
        arsort($q38Counts);

        // Parse Q50 rankings
        $q50Counts = [];
        foreach (SurveyResponse::whereNotNull('q50_ranked_support')->get() as $r) {
            $data = json_decode($r->q50_ranked_support, true) ?? [];
            foreach ($data as $opt => $rank) {
                if ($rank == 1) {
                    $q50Counts[$opt] = ($q50Counts[$opt] ?? 0) + 1;
                }
            }
        }
        arsort($q50Counts);

        return view('admin.dashboard', compact(
            'total', 'countries', 'institutions', 'recent',
            'byCountry', 'byConstraint', 'byUncertainty',
            'q38Counts', 'q50Counts'
        ));
    }

    public function responses()
    {
        $check = $this->requireAdmin();
        if ($check) return $check;
        $responses = SurveyResponse::latest('submitted_at')->paginate(50);
        return view('admin.responses', compact('responses'));
    }

    public function exportCsv()
    {
        $check = $this->requireAdmin();
        if ($check) return $check;
        $responses = SurveyResponse::all();
        $sections = config('survey.sections');

        $allQuestions = [];
        foreach ($sections as $section) {
            foreach ($section['questions'] as $q) {
                $allQuestions[$q['id']] = $q;
            }
        }

        $headers = [
            'response_uuid', 'submitted_at', 'name', 'email', 'email_normalized',
            'institution', 'country', 'position',
        ];
        foreach ($allQuestions as $qid => $q) {
            if ($q['type'] === 'matrix') {
                foreach ($q['rows'] as $row) {
                    $headers[] = $qid . '_' . $this->slug($row);
                }
            } else {
                $headers[] = $qid;
            }
        }

        $csv = [implode(',', array_map([$this, 'csvEscape'], $headers))];

        foreach ($responses as $r) {
            $answers = $r->answers ?? [];
            $row = [
                $r->response_uuid,
                $r->submitted_at?->toDateTimeString() ?? '',
                $r->respondent_name ?? '',
                $r->email ?? '',
                $r->email_normalized ?? '',
                $r->institution ?? '',
                $r->country ?? '',
                $r->position ?? '',
            ];
            foreach ($allQuestions as $qid => $q) {
                $val = $answers[$qid] ?? '';
                if ($q['type'] === 'matrix' && is_array($val)) {
                    foreach ($q['rows'] as $rowLabel) {
                        $row[] = $val[$rowLabel] ?? '';
                    }
                } elseif ($q['type'] === 'ranking' && is_array($val)) {
                    $parts = [];
                    foreach ($val as $opt => $rank) {
                        if ($rank) $parts[] = $opt . '=' . $rank;
                    }
                    $row[] = implode('; ', $parts);
                } elseif (is_array($val)) {
                    $row[] = implode(', ', $val);
                } else {
                    $row[] = $val ?? '';
                }
            }
            $csv[] = implode(',', array_map([$this, 'csvEscape'], $row));
        }

        $content = implode("\n", $csv);
        return response($content, 200, [
            'Content-Type' => 'text/csv; charset=utf-8',
            'Content-Disposition' => 'attachment; filename="survey_responses.csv"',
        ]);
    }

    public function exportJson()
    {
        $check = $this->requireAdmin();
        if ($check) return $check;
        $responses = SurveyResponse::all();
        return response()->json($responses)->withHeaders([
            'Content-Disposition' => 'attachment; filename="survey_responses.json"',
        ]);
    }

    private function requireAdmin()
    {
        if (!session('is_admin')) {
            return redirect()->route('admin.login')->with('warning', 'Please log in to access the admin area.');
        }
    }

    private function csvEscape($val)
    {
        $s = (string) $val;
        if (str_contains($s, ',') || str_contains($s, '"') || str_contains($s, "\n")) {
            return '"' . str_replace('"', '""', $s) . '"';
        }
        return $s;
    }

    private function slug($text)
    {
        return preg_replace('/[^a-z0-9]+/', '_', strtolower(trim($text)));
    }
}
