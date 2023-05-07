<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Especialidad;
use App\Models\UserEspecialidad;

class EspecialidadesController extends Controller
{
    public function index(){
        $e = Especialidad::get();
        return response()->json([
            'especialidades'=> $e
        ],200);
    }

    public function userEspecialid(Request $request){
        $e = UserEspecialidad::where('user_id',$request->user()->id)->get();
        $e->each(function($e){
            $e->especialidad = Especialidad::find($e->especialidad_id);
        });
        return response()->json([
            'especialidades'=> $e
        ],200);
    }

    public function store(Request $request){
        $e = new UserEspecialidad([
            'user_id' => $request->user()->id,
            'especialidad_id' => $request->especialidad_id
        ]);
        $e->save();
        return response()->json([
            'especialidades'=> $e
        ],200);
    }
}
