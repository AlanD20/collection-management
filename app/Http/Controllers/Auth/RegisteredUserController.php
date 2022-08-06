<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\RegisterRequest;

class RegisteredUserController extends Controller
{
  /**
   * Display the registration view.
   *
   * @return \Illuminate\View\View
   */
  public function create()
  {
    return view('auth.register');
  }

  /**
   * Handle an incoming registration request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\RedirectResponse
   *
   * @throws \Illuminate\Validation\ValidationException
   */
  public function store(RegisterRequest $request)
  {

    $user = User::create([
      'name' => $request->safe()->name,
      'username' => $request->safe()->username,
      'email' => $request->safe()->email,
      'password' => Hash::make($request->safe()->password),
    ]);

    $user->detail()->create([]);

    Auth::login($user);

    return redirect(RouteServiceProvider::HOME);
  }
}
