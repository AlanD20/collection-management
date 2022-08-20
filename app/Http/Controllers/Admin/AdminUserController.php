<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\User;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\QueryFilters\Sorting\SortUser;
use App\Http\QueryFilters\Filtering\FilterAdminUser;


class AdminUserController extends Controller
{

  /**
   * Display a listing of the resource.
   *
   * @return \Inertia\Response
   */
  public function index()
  {
    $query = User::query()
      ->select([
        'users.*',
        'details.*'
      ])->join('details', 'details.user_id', '=', 'users.id')
      ->with('detail');

    $pipe = ThroughPipeline::getPaginatePipe(
      $query,
      [
        SortUser::class,
        FilterAdminUser::class
      ],
      paginate: 7
    );

    $users = UserResource::collection($pipe);

    return Inertia::render('Admin/User/Dashboard', compact('users'));
  }

  /**
   *
   * @param  int $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function promote(int $user)
  {
    User::findOrFail($user)
      ->detail
      ->update(['admin' => true]);

    return back()->with('success', __('admin.promote'));
  }

  /**
   *
   * @param  int $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function demote(int $user)
  {
    User::findOrFail($user)
      ->detail
      ->update(['admin' => false]);

    return back()->with('success', __('admin.demote'));
  }

  /**
   *
   * @param  int $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function block(int $user)
  {
    User::findOrFail($user)
      ->detail
      ->update(['block' => true]);

    return back()->with('success', __('admin.block'));
  }

  /**
   *
   * @param  int $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function unblock(int $user)
  {
    User::findOrFail($user)
      ->detail
      ->update(['block' => false]);

    return back()->with('success', __('admin.unblock'));
  }

  /**
   *
   * @param  int $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function destroy(int $user)
  {
    User::findOrFail($user)->delete();

    return back()->with('success', __('admin.delete'));
  }
}
