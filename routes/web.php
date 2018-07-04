<?php

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

Route::get('/home','PostsController@index');

Route::get('/posts/create','PostsController@create');

Route::get('/post/{post}','PostsController@show');

Route::post('/posts','PostsController@store');

Route::post('/posts/{post}/comments','CommentsController@store');

/*
Route::get('/posts/{id}','PostsController@edit');
Route::get('/posts/{id}','PostsController@update');

Route::post('/posts/{id}','PostsController@delete');*/

Route::get('/register','RegistrationController@create');
Route::post('/register','RegistrationController@store');

Route::get('/login','SessionsController@create');
Route::post('/login','SessionsController@store');

Route::get('/logout','SessionsController@destroy');

Route::resuorce('reports','ReportsController');