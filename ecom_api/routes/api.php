<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProduitController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('ajouterproduit',[ProduitController::class,'ajouterproduit']);
Route::get('list',[ProduitController::class,'list']);
Route::delete('delete/{id}',[ProduitController::class,'delete']);
Route::get('produit/{id}',[ProduitController::class,'getProduit']);
