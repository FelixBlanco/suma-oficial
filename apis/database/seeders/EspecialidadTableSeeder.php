<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Especialidad;

class EspecialidadTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $especialidades = ['Doctor','Ginegologo'];

        foreach ($especialidades as $especialidad) {
            $e = new Especialidad([
                'nombre' => $especialidad,
                'descripcion' => 'Texto'
            ]);
            $e->save();
        }
    }
}
