<?php

namespace App\Http\Controllers\Auth;

use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Validator;

class SocialAuthenticationController extends Controller
{
    public function redirect(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback(Request $request, string $provider)
    {
        try {
            $socialiteUser = Socialite::driver($provider)->user();
            $user = $this->getUser($provider, $socialiteUser);
        } catch (\Exception $e) {
            return redirect()->route('login');
        }

        Auth::login($user);
        $request->session()->regenerate();

        return redirect()->intended('/');
    }

    public function getUser($provider, $socialiteUser): User
    {
        $user = User::where([
            'provider' => $provider,
            'provider_id' => $socialiteUser->getId(),
        ])->first();

        if (! $user) {
            $this->validateEmail($socialiteUser->getEmail());

            $user = User::create([
                'provider' => $provider,
                'provider_id' => $socialiteUser->getId(),
                'name' => $socialiteUser->getName(),
                'username' => $this->getUsername($socialiteUser),
                'email' => $socialiteUser->getEmail(),
            ]);
        }

        return $user;
    }

    public function validateEmail(string $email)
    {
        $validator = Validator::make(
            ['email' => $email],
            [
                'email' => ['required', 'unique:users,email', 'email'],
            ]
        );

        if ($validator->fails()) {
            $error = $validator->errors()->first('email');

            return redirect()->route('login')
                ->with('error', $error);
            throw new Exception;
        }
    }

    public function getUsername($socialiteUser)
    {
        $username = $socialiteUser->getNickname();

        if ($username) {
            return $username;
        }

        return $socialiteUser->getName().\random_int(10, 999);
    }
}
