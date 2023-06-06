<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Servicio;

class ServiciosFakeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $a = 1;
        while ($a <= 10) {            
            $s = new Servicio([
                'user_id' => 2,
                'descripcion' => "Consectetur qui aliquip cupidatat eu commodo magna duis. Proident enim officia excepteur esse. Elit dolor magna sunt eu magna consectetur cupidatat dolore ad eu. Elit dolor adipisicing proident est reprehenderit. Dolor velit velit incididunt tempor sit nostrud irure minim ullamco commodo sit aute ut elit. Et officia do esse nulla id irure ad est Lorem duis aute. Velit consectetur exercitation in consequat ad nisi pariatur occaecat sint labore Lorem. Commodo non veniam dolor dolore non dolor fugiat tempor sint.",
                'monto' => 200,
            ]);
    
            $s->save();

            $a++;
        }
    }
}
