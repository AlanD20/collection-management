<?php

use App\Http\Controllers\User\CollectionController;
use Illuminate\Support\Facades\Route;


Route::name('collections.')->group(function () {

  Route::get('/collections', [CollectionController::class, 'index'])->name('index');

  Route::get('/collections/{id}', [CollectionController::class, 'show'])
    ->name('show');

  Route::get('/collections/create', [CollectionController::class, 'create'])
    ->name('create');

  Route::post('/collections', [CollectionController::class, 'store'])
    ->name('store');

  Route::get('/collections/{id}/edit', [CollectionController::class, 'edit'])
    ->name('edit');

  Route::patch('/collections/{id}', [CollectionController::class, 'update'])
    ->name('update');

  Route::delete('/collections/{id}', [CollectionController::class, 'destroy'])
    ->name('destroy');
});
