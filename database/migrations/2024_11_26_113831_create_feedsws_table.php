<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('feedsws', function (Blueprint $table) {
            $table->id();
            $table->string('name')->index();
            $table->string('email')->index();
            $table->string('institution')->nullable();
            $table->string('contact')->nullable();
            $table->text('stress_traits')->nullable();
            $table->text('facilities')->nullable();
            $table->string('hotspot_location',6)->nullable();
            $table->string('location')->nullable();
            $table->string('rice_genetic',6)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedsws');
    }
};
