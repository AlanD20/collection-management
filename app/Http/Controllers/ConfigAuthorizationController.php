<?php

namespace App\Http\Controllers;

class ConfigAuthorizationController extends Controller
{
    public function getStatus()
    {
        return back()->with('success', 'Testing a status message!');
    }

    public function getAdmin()
    {
        $user = request()->user();

        $user->detail()->update([
            'admin' => true,
        ]);

        return redirect('/')->with('success', 'User promoted to Admin Role!');
    }
}
