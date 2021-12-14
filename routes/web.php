<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::resource('/todolist', \App\Http\Controllers\TodoListController::class);
Route::delete('/todolist/{id}',[\App\Http\Controllers\TodoListController::class,'destroy'])->
name('todolist.destroy');
Route::put('/todolist/{id}',[\App\Http\Controllers\TodoListController::class,'update'])->
name('todolist.update');

Auth::routes();

Route::get('/{path?}', function () {
    return view('react');
});


//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
