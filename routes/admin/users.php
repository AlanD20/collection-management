<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminUserController;

Route::get('/admin/users', [AdminUserController::class, 'index'])
  ->name('users.index');

Route::post('/users/{id}/promote', [AdminUserController::class, 'promote'])
  ->name('users.promote');

Route::post('/users/{id}/demote', [AdminUserController::class, 'demote'])
  ->name('users.demote');

Route::post('/users/{id}/block', [AdminUserController::class, 'block'])
  ->name('users.block');

Route::post('/users/{id}/unblock', [AdminUserController::class, 'unblock'])
  ->name('users.unblock');

Route::delete('/users/{id}', [AdminUserController::class, 'destroy'])
  ->name('users.destroy');
