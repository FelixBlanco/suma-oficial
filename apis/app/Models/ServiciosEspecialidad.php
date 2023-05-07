<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiciosEspecialidad extends Model
{
    use HasFactory;

    protected $fillable = ['servicio_id','especialidad_id'];
}
