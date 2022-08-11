<?php

use App\Models\Collection;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CollectionController;


Route::name('collections.')->group(function () {

  Route::get('/collections', [CollectionController::class, 'index'])->name('index');

  Route::get('/collections/create', [CollectionController::class, 'create'])
    ->name('create');

  Route::post('/collections', [CollectionController::class, 'store'])
    ->name('store');

  Route::get('/collections/{col_id}/edit', [CollectionController::class, 'edit'])
    ->name('edit');

  Route::patch('/collections/{col_id}', [CollectionController::class, 'update'])
    ->name('update');

  Route::delete('/collections/{col_id}', [CollectionController::class, 'destroy'])
    ->name('destroy');

  Route::get('/collections/{col_id}', [CollectionController::class, 'show'])
    ->name('show');
});
