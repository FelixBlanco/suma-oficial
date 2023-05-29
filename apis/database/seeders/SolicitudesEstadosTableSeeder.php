<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SolicitudesEstado;

class SolicitudesEstadosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $estados = ['Pendiente','Confirmado','Concretado','Rechazado'];

        foreach ($estados as $estado) {
            $e = new SolicitudesEstado([
                'estado' => $estado
            ]);
            $e->save();
        }
    }
}
