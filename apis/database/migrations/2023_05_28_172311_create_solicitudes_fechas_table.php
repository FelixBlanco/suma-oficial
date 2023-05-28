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
        Schema::create('solicitudes_fechas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('solicitud_id'); 
            $table->foreign('solicitud_id')->references('id')->on('solicituds');
            $table->dateTime('cita');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('solicitudes_fechas');
    }
};
