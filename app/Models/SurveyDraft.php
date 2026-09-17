<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyDraft extends Model
{
    protected $fillable = [
        'draft_uuid',
        'email',
        'answers',
        'last_saved_at',
    ];

    protected $casts = [
        'answers' => 'array',
        'last_saved_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function ($draft) {
            if (empty($draft->draft_uuid)) {
                $draft->draft_uuid = (string) \Illuminate\Support\Str::uuid();
            }
        });
    }
}
