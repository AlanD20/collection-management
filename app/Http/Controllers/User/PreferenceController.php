<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PreferenceController extends Controller
{

  /**
   * Instantiate a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware(['auth', 'isBlocked']);
  }

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
    $request->user->detail()->update([
      'locale' => $validated['locale']
    ]);

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
    $p = $request->user()->detail()->update([
      'theme' => $validated['theme']
    ]);

    return back()->with('status', __('user.theme'));
  }
}
