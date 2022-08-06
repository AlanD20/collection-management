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

Route::view('/', 'index');

Route::get('/getadmin', function () {

  $user = auth()->user();
  $user->detail()->update([
    'admin' => true
  ]);

  return redirect('/');
});

Route::prefix('u')->name('u.')->middleware(['auth'])->group(function () {

  require __DIR__ . '/collections.php';
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
