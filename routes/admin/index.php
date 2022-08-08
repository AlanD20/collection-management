<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::name('admin.')->middleware(['auth', 'isAdmin'])->group(function () {

  // Main admin route
  Route::get('/admin', function () {

    return Inertia::render('Admin/Dashboard');
  })->name('index');

  // Users
  require __DIR__ . '/users.php';

  // Categories
  require __DIR__ . '/categories.php';
});
