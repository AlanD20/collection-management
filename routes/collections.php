<?php

use App\Http\Controllers\CollectionController;
use Illuminate\Support\Facades\Route;

Route::prefix('{uname}')->name('collections.')->group(function () {

  Route::get('/collections', [CollectionController::class, 'index'])->name('index');

  Route::post('/collections', [CollectionController::class, 'store'])
    ->middleware('uname.default')->name('store');

  Route::view('/collections/create', 'u.collections.create')
    ->middleware('uname.default')->name('create');

  Route::get('/collections/{id}', [CollectionController::class, 'show'])->name('show');
});
