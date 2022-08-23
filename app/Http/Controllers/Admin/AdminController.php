<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index()
    {

        // return Inertia::render('Admin/Dashboard');
        return redirect()->route('admin.users.index');
    }
}
