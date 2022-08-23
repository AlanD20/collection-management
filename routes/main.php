<?php

use App\Http\Controllers\Main\CollectionController;
use App\Http\Controllers\Main\HomeController;
use App\Http\Controllers\Main\ItemController;
use App\Http\Controllers\Main\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])
  ->name('main.index');

Route::get('/search', [HomeController::class, 'search'])
  ->name('main.search');

Route::get('/collections', [CollectionController::class, 'index'])
  ->name('collections.index');

Route::get('/items', [ItemController::class, 'index'])
  ->name('items.index');

Route::get('/users', [UserController::class, 'index'])
  ->name('u.index');
