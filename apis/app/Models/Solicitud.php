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
}
