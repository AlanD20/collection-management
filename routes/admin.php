<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AdminCategoryController;

Route::name('admin.')->middleware(['auth', 'isAdmin'])->group(function () {


  // Main admin route
  Route::view('/admin', 'admin.index')->name('index');

  // Users
  Route::get('/admin/users', [AdminUserController::class, 'index'])->name('users.index');

  Route::post('/users/{id}/promote', [AdminUserController::class, 'promote'])->name('users.promote');
  Route::post('/users/{id}/demote', [AdminUserController::class, 'demote'])->name('users.demote');
  Route::post('/users/{id}/block', [AdminUserController::class, 'block'])->name('users.block');
  Route::post('/users/{id}/unblock', [AdminUserController::class, 'unblock'])->name('users.unblock');
  Route::delete('/users/{id}', [AdminUserController::class, 'destroy'])->name('users.destroy');

  // Categories
  Route::get('/admin/categories', [AdminCategoryController::class, 'index'])->name('categories.index');

  Route::post('/categories/{id}/promote', [AdminCategoryController::class, 'promote'])->name('categories.promote');
  Route::post('/categories/{id}/demote', [AdminCategoryController::class, 'demote'])->name('categories.demote');
  Route::post('/categories/{id}/block', [AdminCategoryController::class, 'block'])->name('categories.block');
  Route::post('/categories/{id}/unblock', [AdminCategoryController::class, 'unblock'])->name('categories.unblock');
  Route::delete('/categories/{id}', [AdminCategoryController::class, 'destroy'])->name('categories.destroy');
});