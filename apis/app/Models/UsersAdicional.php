<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersAdicional extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'telefono',
        'whatsapp',
        'direccion',
    ];
}
