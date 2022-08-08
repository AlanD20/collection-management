<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminCategoryController;

Route::get('/admin/categories', [AdminCategoryController::class, 'index'])
  ->name('categories.index');

Route::post('/categories/{id}/promote', [AdminCategoryController::class, 'promote'])
  ->name('categories.promote');

Route::post('/categories/{id}/demote', [AdminCategoryController::class, 'demote'])
  ->name('categories.demote');

Route::post('/categories/{id}/block', [AdminCategoryController::class, 'block'])
  ->name('categories.block');

Route::post('/categories/{id}/unblock', [AdminCategoryController::class, 'unblock'])
  ->name('categories.unblock');

Route::delete('/categories/{id}', [AdminCategoryController::class, 'destroy'])
  ->name('categories.destroy');
