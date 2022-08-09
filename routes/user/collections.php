<?php

use App\Http\Controllers\User\CollectionController;
use Illuminate\Support\Facades\Route;


Route::name('collections.')->group(function () {

  Route::get('/collections', [CollectionController::class, 'index'])->name('index');

  Route::get('/collections/create', [CollectionController::class, 'create'])
    ->middleware('uname.default')->name('create');

  Route::post('/collections', [CollectionController::class, 'store'])
    ->middleware('uname.default')->name('store');

  Route::get('/collections/{id}/edit', [CollectionController::class, 'edit'])
    ->middleware('uname.default')->name('edit');

  Route::patch('/collections/{id}', [CollectionController::class, 'update'])
    ->middleware('uname.default')->name('update');

  Route::delete('/collections/{id}', [CollectionController::class, 'destroy'])
    ->middleware('uname.default')->name('destroy');

  Route::get('/collections/{id}', [CollectionController::class, 'show'])->name('show');
});
