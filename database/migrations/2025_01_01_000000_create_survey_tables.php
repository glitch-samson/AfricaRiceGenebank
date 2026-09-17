<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('survey_responses', function (Blueprint $table) {
            $table->id();
            $table->uuid('response_uuid')->unique();
            $table->string('respondent_name')->nullable();
            $table->string('email')->nullable();
            $table->string('email_normalized')->nullable()->unique();
            $table->string('institution')->nullable();
            $table->string('position')->nullable();
            $table->string('country')->nullable()->index();
            $table->text('answers')->nullable(); // JSON
            $table->string('q34_constraint')->nullable()->index();
            $table->text('q38_ranked_needs')->nullable();
            $table->string('q43_uncertainty')->nullable()->index();
            $table->text('q50_ranked_support')->nullable();
            $table->timestamp('submitted_at')->nullable();
            $table->timestamps();
        });

        Schema::create('survey_drafts', function (Blueprint $table) {
            $table->id();
            $table->uuid('draft_uuid')->unique();
            $table->string('email')->nullable();
            $table->text('answers')->nullable(); // JSON
            $table->timestamp('last_saved_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('survey_drafts');
        Schema::dropIfExists('survey_responses');
    }
};
