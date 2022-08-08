<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminCategoryController;

Route::get('/categories', [AdminCategoryController::class, 'index'])
  ->name('categories.index');

Route::get('/categories/create', [AdminCategoryController::class, 'create'])
  ->name('categories.create');

Route::post('/categories', [AdminCategoryController::class, 'store'])
  ->name('categories.store');


Route::get('/categories/{id}/edit', [AdminCategoryController::class, 'edit'])
  ->name('categories.edit');

Route::patch('/categories/{id}', [AdminCategoryController::class, 'update'])
  ->name('categories.update');

Route::delete('/categories/{id}', [AdminCategoryController::class, 'destroy'])
  ->name('categories.destroy');
