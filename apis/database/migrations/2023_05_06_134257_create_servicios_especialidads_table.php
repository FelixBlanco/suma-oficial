<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicios_especialidads', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('servicio_id'); 
            $table->foreign('servicio_id')->references('id')->on('servicios');
            $table->unsignedBigInteger('especialidad_id'); 
            $table->foreign('especialidad_id')->references('id')->on('especialidads');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servicios_especialidads');
    }
};
