<?php

use App\Http\Controllers\ConfigAuthorizationController;
use App\Http\Controllers\User\PreferenceController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('/config')
    ->name('config.')
    ->middleware(['auth', 'config.auth'])
    ->group(function () {
        Route::get('/getstatus', [ConfigAuthorizationController::class, 'getStatus'])->name('getstatus');

        Route::get('/getadmin', [ConfigAuthorizationController::class, 'getAdmin']);
    });

require __DIR__.'/main.php';
require __DIR__.'/auth.php';
require __DIR__.'/socials.php';
require __DIR__.'/admin/index.php';
require __DIR__.'/users.php';

Route::prefix('/set')
    ->name('set.')
    ->group(function () {
        Route::post('/locale', [PreferenceController::class, 'locale'])
            ->name('locale');
        Route::post('/theme', [PreferenceController::class, 'theme'])
            ->name('theme');
    });

Route::fallback(fn () => redirect()->route('main.index'));
