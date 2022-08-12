<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminTagController;
use App\Http\Controllers\Admin\AdminCategoryController;

Route::name('admin.')
  ->middleware(['auth', 'isAdmin', 'isBlocked'])
  ->group(function () {

    // Main admin route
    Route::get('/admin', [AdminController::class, 'index'])
      ->name('index');


    Route::prefix('/admin')->group(function () {
      // Users
      require __DIR__ . '/users.php';

      Route::resources([
        '/categories' => AdminCategoryController::class,
        '/tags' => AdminTagController::class
      ], [
        'except' => ['show']
      ]);
    });
  });
