<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;


Route::name('admin.')->middleware(['auth', 'isAdmin'])->group(function () {

  // Main admin route
  Route::get('/admin', [AdminController::class, 'index'])
    ->name('index');


  Route::prefix('/admin')->group(function () {
    // Users
    require __DIR__ . '/users.php';

    // Categories
    require __DIR__ . '/categories.php';
  });
});
