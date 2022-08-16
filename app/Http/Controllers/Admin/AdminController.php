<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{

  /**
   *
   * @return \Inertia\Response
   */
  public function index()
  {

    return Inertia::render('Admin/Dashboard');
  }
}
