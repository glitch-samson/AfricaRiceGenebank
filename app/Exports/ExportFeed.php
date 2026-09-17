<?php

namespace App\Exports;

use App\Models\Feed;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportFeed implements FromCollection, WithHeadings,WithStrictNullComparison
{
    /**
    * @return \Illuminate\Support\Collection
    */
    use Exportable;
    public function collection()
    {
        
        return Feed::all();
    }
    public function headings(): array
    {
        return [
            "id",
            'email',
            'institution',
            'accession',

            'cgiar_3',
            'nars_3',
            'nars_3_exchange',
            'nars_3_exp_1',
            'nars_3_share',
            'nars_3_exp_2',
            'nars_3_send',
            'nars_3_exp_3',
            'nars_3_evaluation',
            'nars_3_exp_4',
            'university_3',
            'individual_3',
            'famer_3',

            'requested',

            'drought_6',
            'heat_6',
            'flooting_6',
            'salinity_6',
            'insect_6',
            'pest_6',
            'disease_6',
            'yield_6',
            'quality_6',

            'inevaluation_7',
            'publication_7',
            'characterization_7',
            'identification_7',
            'markers_7',
            'expansion_7',
            'breeding_7',
            'cultivar_7',
            'information_7',
            'planting_7',

            'drought_8',
            'heat_8',
            'salinity_8',
            'insect_8',
            'pest_8',
            'disease_8',
            'yield_8',
            'quality_8',
            'waterlogging_8',
            'other_8',
            
            'percent',
            'seedrate',
            'servicerate',
            'comments',
            'created_at',
            'updated_at'
        ];
    }
}
