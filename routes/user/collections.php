<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CollectionController;



Route::get('/collections', [CollectionController::class, 'index'])
  ->name('index');

Route::get('/collections/create', [CollectionController::class, 'create'])
  ->name('create');

Route::post('/collections', [CollectionController::class, 'store'])
  ->name('store');

Route::get('/collections/{collection}/edit', [CollectionController::class, 'edit'])
  ->name('edit');

Route::patch('/collections/{collection}', [CollectionController::class, 'update'])
  ->name('update');

Route::delete('/collections/{collection}', [CollectionController::class, 'destroy'])
  ->name('destroy');

Route::get('/collections/{collection}', [CollectionController::class, 'show'])
  ->name('show');
