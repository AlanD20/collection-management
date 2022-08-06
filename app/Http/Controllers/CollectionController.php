<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CollectionController extends Controller
{

  public function index(Request $request)
  {
    return view('u.collections.index');
  }

  public function show(Request $request, string $username,  int $id)
  {

    return view('u.collections.show', compact('username', 'id'));
  }
}
