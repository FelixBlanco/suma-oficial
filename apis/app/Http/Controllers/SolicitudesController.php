<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Solicitud;
use App\Models\SolicitudesFecha;
use App\Models\UsersRol;

class SolicitudesController extends Controller
{

    public function misSolicitudes(Request $request){

        $user = $request->user();    
        $rol = UsersRol::where('user_id',$user->id)->first();
        $user->rol_id = $rol->rol_id;

        $solicitudes = Solicitud::MisSolicitudes($request->user()->id,$user->rol_id);

        return response()->json([
            'solicitudes' => $solicitudes,
            'rol_id' => $user->rol_id
        ],200);
    }

    public function store(Request $request){
        $s = new Solicitud($request->all());
        $s->user_id = $request->user()->id;
        $s->save();

        $s_f = new SolicitudesFecha();
        $s_f->cita = $request->fecha;
        $s_f->solicitud_id = $s->id;        
        $s_f->save();

        return response()->json([
            's' => $s,
            's_f' => $s_f,
        ],200);
    }

    public function confirmar(Request $request){
        $s = Solicitud::find($request->solicitud_id);
        $s->solicitudes_estado_id = 2;
        $s->save();
        return response()->json([
            's' => $s
        ],200);
    } 
    
    public function rechazar(Request $request){
        $s = Solicitud::find($request->solicitud_id);
        $s->solicitudes_estado_id = 4;
        $s->save();
        return response()->json([
            's' => $s
        ],200);
    }

    public function concretar(Request $request){
        $s = Solicitud::find($request->solicitud_id);
        $s->solicitudes_estado_id = 3;
        $s->save();
        return response()->json([
            's' => $s
        ],200);
    }

}
