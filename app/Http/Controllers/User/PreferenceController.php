<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class PreferenceController extends Controller
{

  /**
   * Store locale in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function locale(Request $request)
  {
    $validated = $request->validate([
      'locale' => ['required', 'string', 'in:en,ku'],
    ]);

    $locale = $validated['locale'];
    App::setLocale($locale);
    $user = $request->user();
    if ($user) {
      $user->detail()->update([
        'locale' => $locale
      ]);
    }
    session()->put('locale', $locale);

    return back()->with('status', __('user.locale'));
  }

  /**
   * Store theme in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function theme(Request $request)
  {
    $validated = $request->validate([
      'theme' => ['required', 'string', 'in:emerald,dracula'],
    ]);

    $theme = $validated['theme'];
    $user = $request->user();
    if ($user) {
      $user->detail()->update([
        'theme' => $theme
      ]);
    }
    session()->put('theme', $theme);

    return back()->with('status', __('user.theme'));
  }
}
