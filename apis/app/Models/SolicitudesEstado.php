<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolicitudesEstado extends Model
{
    /**
     * pendiente : pendiente por revisar por el especialista 
     * confirmado : el especialista confirma la cita 
     * concretado : Culminaron la cita 
     * rechazado : rechazo la cita por x razon 
     */
    use HasFactory;

    protected $fillable = ['estado'];
}
