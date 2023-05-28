<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SolicitudesFecha extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'solicitud_id',
        'cita',
    ];
}
