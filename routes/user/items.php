<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CollectionController;



Route::get('/items', [CollectionController::class, 'index'])
  ->name('index');

Route::get('/items/create', [CollectionController::class, 'create'])
  ->name('create');

Route::post('/items', [CollectionController::class, 'store'])
  ->name('store');

Route::get('/items/{collection}/edit', [CollectionController::class, 'edit'])
  ->name('edit');

Route::patch('/items/{collection}', [CollectionController::class, 'update'])
  ->name('update');

Route::delete('/items/{collection}', [CollectionController::class, 'destroy'])
  ->name('destroy');

Route::get('/items/{collection}', [CollectionController::class, 'show'])
  ->name('show');
