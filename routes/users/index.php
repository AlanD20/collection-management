<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CollectionController;
use App\Http\Controllers\User\CommentController;
use App\Http\Controllers\User\ItemController;
use App\Http\Controllers\User\UserController;

Route::prefix('/u/{uname}')
  ->name('u.')
  // ->middleware(['auth', 'isBlocked'])
  ->group(function () {

    Route::get('/', [UserController::class, 'index'])
      ->name('index');

    Route::resources([
      '/collections' => CollectionController::class,
      '/collections.items' => ItemController::class,
    ]);

    Route::resource('/collections.items.comments', CommentController::class)
      ->only('store', 'destroy');

    Route::get('/collections/{collection}/items/{item}/likes', [ItemController::class, 'like'])
      ->name('collections.items.likes');
  });
