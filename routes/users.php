<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CollectionController;
use App\Http\Controllers\User\CommentController;
use App\Http\Controllers\User\ItemController;
use App\Http\Controllers\User\PreferenceController;
use App\Http\Controllers\User\UserController;

Route::prefix('/u/{uname}')
  ->name('u.')
  // ->middleware(['auth', 'isBlocked'])
  ->group(function () {

    Route::get('/', [UserController::class, 'show'])
      ->name('show');

    Route::get('/edit', [UserController::class, 'edit'])
      ->name('edit');

    Route::patch('/', [UserController::class, 'update'])
      ->name('update');

    Route::delete('/', [UserController::class, 'destroy'])
      ->name('destroy');

    Route::resources([
      '/collections' => CollectionController::class,
      '/collections.items' => ItemController::class,
    ]);

    Route::resource('/collections.items.comments', CommentController::class)
      ->only('store', 'destroy');

    Route::get('/collections/{collection}/items/{item}/likes', [ItemController::class, 'like'])
      ->name('collections.items.likes');
  });


Route::prefix('/set')
  ->name('set.')
  ->middleware(['auth', 'isBlocked'])
  ->group(function () {

    Route::post('/locale', [PreferenceController::class, 'locale'])
      ->name('locale');
    Route::post('/theme', [PreferenceController::class, 'theme'])
      ->name('theme');
  });
