<?php

namespace App\Http\Controllers\Main;

use App\Models\User;
use Inertia\Inertia;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\QueryFilters\Sorting\SortUser;

class UserController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Inertia\Response
   */
  public function index()
  {

    $query = User::query();

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortUser::class
      ])
      ->paginate(25)
      ->withQueryString();

    $users = UserResource::collection($pipe);

    return Inertia::render('Main/Users', compact('users'));
  }
}
