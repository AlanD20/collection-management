<?php

namespace App\Http\Middleware;

use App\Helpers\Locale;
use App\Http\Resources\UserResource;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Str;

class HandleInertiaRequests extends Middleware
{
  /**
   * The root template that's loaded on the first page visit.
   *
   * @see https://inertiajs.com/server-side-setup#root-template
   * @var string
   */
  protected $rootView = 'app';

  /**
   * Determines the current asset version.
   *
   * @see https://inertiajs.com/asset-versioning
   * @param  \Illuminate\Http\Request  $request
   * @return string|null
   */
  public function version(Request $request): ?string
  {
    return parent::version($request);
  }

  /**
   * Defines the props that are shared by default.
   *
   * @see https://inertiajs.com/shared-data
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function share(Request $request): array
  {
    return array_merge(parent::share($request), [

      // Synchronously
      'appName' => config('app.name'),

      // Lazily
      'auth.user' => fn () => $request->user()
        ? new UserResource($request->user())
        : null,

      // Locale Translation
      'locale' => fn () => $request->user()->detail->locale ?? 'en',
      'theme' => fn () => $request->user()->detail->theme ?? 'light',
      // '_' => fn () => (new Locale())->getContent(),

      // Status flash
      'status' => [
        'success' => fn () => session('success'),
        'error' => fn () => session('error'),
        'ts' => fn () => time(),
      ],

      'params' => [
        'uname' => $request->route('uname') instanceof \App\Models\User ? $request->route('uname')->username : $request->route('uname'),
        'category_id' => $request->route('category_id'),
        'user_id' => $request->route('user_id'),
        'collection' => $request->route('collection'),
        'item_id' => $request->route('item_id'),
      ]

    ]);
  }
}
