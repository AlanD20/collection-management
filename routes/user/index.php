<?php

use Illuminate\Support\Facades\Route;


Route::prefix('/u/{uname}')
  ->name('u.')
  ->middleware(['auth', 'isBlocked'])
  ->group(function () {

    require __DIR__ . '/collections.php';
  });
