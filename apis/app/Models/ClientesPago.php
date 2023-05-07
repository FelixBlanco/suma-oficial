<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientesPago extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'plan_id',
        'bauche',
        'codigo',
        'confirmed',
    ];
}
