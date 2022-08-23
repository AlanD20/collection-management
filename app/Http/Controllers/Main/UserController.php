<?php

namespace App\Http\Controllers\Main;

use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Sorting\SortUser;
use App\Http\Resources\UserResource;
use App\Models\User;
use Inertia\Inertia;

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

        $pipe = ThroughPipeline::getPaginatePipe(
            $query,
            [SortUser::class],
            paginate: 25
        );

        $users = UserResource::collection($pipe);

        return Inertia::render('Main/Users', compact('users'));
    }
}
