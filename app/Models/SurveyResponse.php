<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class SurveyResponse extends Model
{
    protected $fillable = [
        'response_uuid',
        'respondent_name',
        'email',
        'email_normalized',
        'institution',
        'position',
        'country',
        'answers',
        'q34_constraint',
        'q38_ranked_needs',
        'q43_uncertainty',
        'q50_ranked_support',
        'submitted_at',
    ];

    protected $casts = [
        'answers' => 'array',
        'submitted_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function ($response) {
            if (empty($response->response_uuid)) {
                $response->response_uuid = (string) \Illuminate\Support\Str::uuid();
            }
            if ($response->email) {
                $response->email_normalized = strtolower(trim($response->email));
            }
        });
    }
}
