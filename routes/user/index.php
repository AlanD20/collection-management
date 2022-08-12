<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\CollectionController;
use App\Http\Controllers\User\ItemController;

Route::prefix('/u/{uname}')
  ->name('u.')
  ->middleware(['auth', 'isBlocked'])
  ->group(function () {


    Route::resource('/collections', CollectionController::class);
    Route::resource('/collections.items', ItemController::class);

    Route::name('collections.')->group(function () {
      // require __DIR__ . '/collections.php';
      // require __DIR__ . '/items.php';
    });
  });
