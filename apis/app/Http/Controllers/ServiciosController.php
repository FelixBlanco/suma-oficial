<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servicio;

class ServiciosController extends Controller
{
    public function misServicios(Request $request){
        $servicios = Servicio::where('user_id',$request->user()->id)->get();
        return response()->json([
            'servicios' => $servicios
        ],200);
    }

    public function store(Request $request){
        $s = new Servicio($request->all());
        $s->user_id = $request->user()->id;
        $s->save();
        return response()->json([
            'servicio' => $s
        ],200);
    }
}
