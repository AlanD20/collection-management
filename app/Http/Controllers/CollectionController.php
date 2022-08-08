<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CollectionController extends Controller
{

  public function index(Request $request)
  {
    return Inertia::render('User/Collection/Dashboard');
  }

  public function show(Request $request, string $username,  int $id)
  {

    return view('u.collections.show', compact('username', 'id'));
  }
}
