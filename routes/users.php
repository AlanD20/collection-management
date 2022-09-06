<?php

use App\Http\Controllers\User\CollectionController;
use App\Http\Controllers\User\CommentController;
use App\Http\Controllers\User\ItemController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/u/{uname}')
    ->name('u.')
    ->middleware(['auth', 'isBlocked'])
    ->group(function () {
        Route::get('/', [UserController::class, 'show'])
            ->name('show');

        Route::get('/edit', [UserController::class, 'edit'])
            ->name('edit');

        Route::get('/edit/password', [UserController::class, 'edit_password'])
            ->name('edit.password');

        Route::patch('/', [UserController::class, 'update'])
            ->name('update');

        Route::patch('/password', [UserController::class, 'update_password'])
            ->name('update.password');

        Route::delete('/', [UserController::class, 'destroy'])
            ->name('destroy');

        Route::resources([
            '/collections' => CollectionController::class,
            '/collections.items' => ItemController::class,
        ]);

        Route::resource('/collections.items.comments', CommentController::class)
            ->only('store', 'destroy');

        Route::get('/collections/{collection}/items/{item}/likes', [ItemController::class, 'like'])
            ->name('collections.items.likes');
    });
