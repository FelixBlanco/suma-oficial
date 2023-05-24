<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servicio;

class ServiciosController extends Controller
{

    public function publicos(Request $request){
        $servicios = Servicio::get();
        return response()->json([
            'servicios' => $servicios
        ],200);
    }

    public function publicosShow($id){
        $servicio = Servicio::find($id);
        return response()->json([
            'servicio' => $servicio
        ],200);
    }

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

    public function upgrade(Request $request){
        $s = Servicio::find($request->id);
        $s->fill($request->all());
        $s->save();
        return response()->json([
            'servicio' => $s
        ],200);        
    }

    public function destroy($id){
        $s = Servicio::find($id);
        $s->delete();
        $s->save();
        return response()->json([
            'servicio' => $s
        ],200);        
    }
}
