<?php

use Inertia\Inertia;
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

Route::get('/', function () {
  return Inertia::render('Home');
})->name('index');

Route::get('/getadmin', function () {

  /** @var \App\Models\User $user */
  $user = auth()->user();

  $user->detail()->update([
    'admin' => true
  ]);

  return redirect('/');
});

Route::inertia('/test', 'Dashboard');




Route::prefix('u')->name('u.')->middleware(['auth'])->group(function () {

  require __DIR__ . '/collections.php';
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin/index.php';
