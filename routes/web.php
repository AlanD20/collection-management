<?php

use App\Http\Controllers\CollectionController;
use Illuminate\Support\Facades\Blade;
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

Route::prefix('u')->name('u.')->middleware(['auth'])->group(function () {

  Route::get('/{uname}/collections', [CollectionController::class, 'index'])->name('collection.index');

  Route::get('/{uname}/collections/{id}', [CollectionController::class, 'show'])->name('collection.show');
});

require __DIR__ . '/auth.php';
