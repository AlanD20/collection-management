<?php

use App\Http\Controllers\Auth\SocialAuthenticationController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/auth/{provider}/redirect', [SocialAuthenticationController::class, 'redirect'])
        ->name('auth.login_with');

    Route::get('/auth/{provider}/callback', [SocialAuthenticationController::class, 'callback']);
});
