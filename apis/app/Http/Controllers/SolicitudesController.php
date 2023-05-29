<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Solicitud;
use App\Models\SolicitudesFecha;

class SolicitudesController extends Controller
{

    public function misSolicitudes(Request $request){
        $solicitudes = Solicitud::join('servicios','servicios.id','=','solicituds.servicio_id')
                    ->join('solicitudes_fechas','solicitudes_fechas.solicitud_id','=','solicituds.id')
                    ->join('users','users.id','=','solicituds.user_id')
                    ->where('servicios.user_id','=',$request->user()->id)        
                    ->get();

        return response()->json([
            'solicitudes' => $solicitudes
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
