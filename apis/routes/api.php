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
        Route::post('register','store');
    });

    Route::group(['middleware' => 'auth:api' ], function() {
        
        Route::controller(AuthController::class)->group(function(){
            Route::get('user','user');
            Route::get('logout','logout');  
        });

    });
});
