<?php

namespace App\Exports;

use App\Models\Feedsw;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportFeedsw implements FromCollection, WithHeadings,WithStrictNullComparison
{
    /**
    * @return \Illuminate\Support\Collection
    */
    use Exportable;
    public function collection()
    {
        
        return Feedsw::all();
    }
    public function headings(): array
    {
        return [
            "id",
            'name',
            'email',
            'institution',

            'contact',
            'stress_traits',
            'facilities',
            'hotspot_location',
            'location',
            'rice_genetic',
            'created_at'
        ];
    }
}
