<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersRol extends Model
{
    use HasFactory;
    // Orden de los roles
    // 'Admin','Usuario','Referidos','Clientes'
    protected $fillable = ['user_id','rol_id'];
}
