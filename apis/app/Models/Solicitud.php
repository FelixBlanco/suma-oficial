<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Solicitud extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'servicio_id',
        'user_id',
        'is_concretada',
        'pt_cliente',
        'pt_servicio',
        'pt_paciente',
        'solicitudes_estado_id'
    ];

    public static function MisSolicitudes($user,$idRol){

        if($idRol == 2){
            return Solicitud::select(
                'solicituds.id as id','solicituds.servicio_id','solicituds.user_id','solicituds.is_concretada','solicituds.pt_cliente','solicituds.pt_servicio','solicituds.pt_paciente','solicituds.solicitudes_estado_id',
                'servicios.id as idServicios','servicios.user_id','servicios.descripcion','servicios.monto',
                'solicitudes_fechas.id as idSolicitudesFechas','solicitudes_fechas.solicitud_id','solicitudes_fechas.cita',
                'users.id  as idUser', 'users.name'
            )
            ->join('servicios','servicios.id','=','solicituds.servicio_id')
            ->join('solicitudes_fechas','solicitudes_fechas.solicitud_id','=','solicituds.id')
            ->join('users','users.id','=','solicituds.user_id')
            ->where('solicituds.user_id','=',$user)        
            ->get();
        }elseif($idRol == 4){
            return Solicitud::select(
                'solicituds.id as id','solicituds.servicio_id','solicituds.user_id','solicituds.is_concretada','solicituds.pt_cliente','solicituds.pt_servicio','solicituds.pt_paciente','solicituds.solicitudes_estado_id',
                'servicios.id as idServicios','servicios.user_id','servicios.descripcion','servicios.monto',
                'solicitudes_fechas.id as idSolicitudesFechas','solicitudes_fechas.solicitud_id','solicitudes_fechas.cita',
                'users.id  as idUser', 'users.name'
            )
            ->join('servicios','servicios.id','=','solicituds.servicio_id')
            ->join('solicitudes_fechas','solicitudes_fechas.solicitud_id','=','solicituds.id')
            ->join('users','users.id','=','solicituds.user_id')
            ->where('servicios.user_id','=',$user)        
            ->get();
        }
        
    }
}
