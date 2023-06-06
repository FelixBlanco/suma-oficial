<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\UsersRol;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $u_p = new User([
            'name' => 'Usuario',
            'email' => 'usuario@example.org',
            'password' => Hash::make('password')
        ]);
        $u_p->save();

        $u_r = new UsersRol([
            'user_id' => $u_p->id,
            'rol_id' => 2
        ]);
        $u_r->save();
        

        $u_p_two = new User([
            'name' => 'Profesional',
            'email' => 'profesional@example.org',
            'password' => Hash::make('password')
        ]);
        $u_p_two->save();

        $u_r_two = new UsersRol([
            'user_id' => $u_p_two->id,
            'rol_id' => 4
        ]);
        $u_r_two->save();

    }
}
