<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminUserController;

Route::get('/users', [AdminUserController::class, 'index'])
  ->name('users.index');

Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])
  ->name('users.destroy');

Route::post('/users/{user}/promote', [AdminUserController::class, 'promote'])
  ->name('users.promote');

Route::post('/users/{user}/demote', [AdminUserController::class, 'demote'])
  ->name('users.demote');

Route::post('/users/{user}/block', [AdminUserController::class, 'block'])
  ->name('users.block');

Route::post('/users/{user}/unblock', [AdminUserController::class, 'unblock'])
  ->name('users.unblock');
