<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => 'cors'], function () {

    Route::controller(AuthController::class)->group(function(){
        Route::post('login','login');
        Route::post('register','registrarme');
    });

    Route::controller(ServiciosController::class)->group(function(){
        Route::get('servicios-publicos','publicos');
        Route::get('servicios-publicos-show/{id}','publicosShow');
    });

    Route::group(['middleware' => 'auth:api' ], function() {
        
        Route::controller(AuthController::class)->group(function(){
            Route::get('user','user');
            Route::get('logout','logout');  
        });

        Route::controller(EspecialidadesController::class)->group(function(){
            Route::get('especialidades','index');
            Route::get('especialidades-user','userEspecialid');
            Route::post('especialidades-user','store');
        });

        Route::controller(ServiciosController::class)->group(function(){            
            Route::get('mis-servicios','misServicios');
            Route::post('store-servicios','store');
            Route::post('upgrade-servicios','upgrade');
            Route::get('destroy-servicios/{id}','destroy');            
        });

        Route::controller(SolicitudesController::class)->group(function(){
            Route::post('store-cita','store');
            Route::get('mis-solicitudes-citas','misSolicitudes');
            Route::post('solicitud-confirmar','confirmar');
            Route::post('solicitud-rechazar','rechazar');
            Route::post('solicitud-concretar','concretar');
        });
        
    });
});
