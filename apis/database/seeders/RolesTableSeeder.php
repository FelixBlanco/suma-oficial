<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rol;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['Admin','Usuario','Referidos','Clientes'];

        foreach ($roles as $rol) {
            $r = new Rol([
                'rol' => $rol
            ]);
            $r->save();
        }
    }
}
