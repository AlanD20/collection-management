<?php

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

Route::get('/getstatus', function () {
    return back()->with('success', 'Testing a status message!');
})->name('getstatus');

Route::get('/getadmin', function () {

    /** @var \App\Models\User $user */
    $user = auth()->user();

    $user->detail()->update([
        'admin' => true,
    ]);

    return redirect('/');
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
