<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\User;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Filtering\FilterAdminUser;
use App\Http\Resources\UserResource;
use App\Http\QueryFilters\Sorting\SortUser;


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

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortUser::class,
        FilterAdminUser::class
      ])
      ->paginate(7)
      ->withQueryString();

    $users = UserResource::collection($pipe);

    return Inertia::render('Admin/User/Dashboard', compact('users'));
  }

  /**
   *
   *
   * @param  int $userid
   * @return \Illuminate\Http\RedirectResponse
   */
  public function promote(int $userId)
  {
    User::findOrFail($userId)
      ->detail
      ->update(['admin' => true]);

    return back()->with('success', __('admin.promote'));
  }

  /**
   *
   *
   * @param  int $userid
   * @return \Illuminate\Http\RedirectResponse
   */
  public function demote(int $userId)
  {
    User::findOrFail($userId)
      ->detail
      ->update(['admin' => false]);

    return back()->with('success', __('admin.demote'));
  }

  /**
   *
   *
   * @param  int $userid
   * @return \Illuminate\Http\RedirectResponse
   */
  public function block(int $userId)
  {
    User::findOrFail($userId)
      ->detail
      ->update(['block' => true]);

    return back()->with('success', __('admin.block'));
  }

  /**
   *
   *
   * @param  int $userid
   * @return \Illuminate\Http\RedirectResponse
   */
  public function unblock(int $userId)
  {
    User::findOrFail($userId)
      ->detail
      ->update(['block' => false]);

    return back()->with('success', __('admin.unblock'));
  }

  /**
   *
   *
   * @param  int $userid
   * @return \Illuminate\Http\RedirectResponse
   */
  public function destroy(int $userId)
  {
    User::findOrFail($userId)->delete();

    return back()->with('success', __('admin.delete'));
  }
}
