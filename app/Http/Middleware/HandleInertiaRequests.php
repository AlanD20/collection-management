<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\{User, Category, Collection, Item};

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
      'locale' => fn () => $request->user()->detail->locale ?? session('locale', 'en'),
      'theme' => fn () => $request->user()->detail->theme ?? session('theme', 'emerald'),

      // Status flash
      'status' => [
        'success' => fn () => session('success'),
        'error' => fn () => session('error'),
      ],

      'params' => [
        'uname' => $this->getRoute('uname'),
        'category' => $this->getRoute('category'),
        'user' => $this->getRoute('user'),
        'collection' => $this->getRoute('collection'),
        'item' => $this->getRoute('item'),
        'comment' => $this->getRoute('comment'),
      ],
      'prevUrl' => fn () => url()->previous(),
      'ts' => fn () => time(),

    ]);
  }

  function getRoute(string $name)
  {
    $route = request()->route($name);
    if (!$route) return null;

    $isString =  $route && gettype($route) === 'string';

    if ($name === 'uname') {
      return $isString ? $route : $route->username;
    }

    return  $isString ? (int)$route : $route->id;
  }
}
