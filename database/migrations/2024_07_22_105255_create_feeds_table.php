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
        Schema::create('feeds', function (Blueprint $table) {
            $table->id();
            $table->string('email')->index();
            $table->string('institution')->nullable();
            $table->string('accession')->index()->nullable();

            $table->boolean('cgiar_3')->default(0);
            $table->boolean('nars_3')->default(0);
            $table->boolean('nars_3_exchange')->default(0);
            $table->longText('nars_3_exp_1')->nullable();
            $table->boolean('nars_3_share')->default(0);
            $table->longText('nars_3_exp_2')->nullable();
            $table->boolean('nars_3_send')->default(0);
            $table->longText('nars_3_exp_3')->nullable();
            $table->boolean('nars_3_evaluation')->default(0);
            $table->longText('nars_3_exp_4')->nullable();

            $table->boolean('university_3')->default(0);
            $table->boolean('individual_3')->default(0);
            $table->boolean('famer_3')->default(0);

            $table->boolean('requested')->default(0);

            $table->boolean('drought_6')->default(0);
            $table->boolean('heat_6')->default(0);
            $table->boolean('flooding_6')->default(0);
            $table->boolean('salinity_6')->default(0);
            $table->boolean('insect_6')->default(0);
            $table->boolean('pest_6')->default(0);
            $table->boolean('disease_6')->default(0);
            $table->boolean('yield_6')->default(0);
            $table->boolean('quality_6')->default(0);

            $table->boolean('inevaluation_7')->default(0);
            $table->boolean('publication_7')->default(0);
            $table->boolean('characterization_7')->default(0);
            $table->boolean('identification_7')->default(0);
            $table->boolean('markers_7')->default(0);
            $table->boolean('expansion_7')->default(0);
            $table->boolean('breeding_7')->default(0);
            $table->boolean('cultivar_7')->default(0);
            $table->boolean('information_7')->default(0);
            $table->boolean('planting_7')->default(0);

            $table->boolean('drought_8')->default(0);
            $table->boolean('heat_8')->default(0);
            $table->boolean('salinity_8')->default(0);
            $table->boolean('insect_8')->default(0);
            $table->boolean('pest_8')->default(0);
            $table->boolean('disease_8')->default(0);
            $table->boolean('yield_8')->default(0);
            $table->boolean('quality_8')->default(0);
            $table->boolean('waterlogging_8')->default(0);
            $table->string('other_8')->nullable();
            
            $table->decimal('percent',8,5)->default(0);
            $table->integer('seedrate')->default(0);
            $table->integer('servicerate')->default(0);
            $table->longText('comments')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feeds');
    }
};
