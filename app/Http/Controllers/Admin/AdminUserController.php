<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\User;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Filtering\FilterAdminUser;
use App\Http\Resources\UserResource;
use App\Http\QueryFilters\Sorting\SortAdminUser;

class AdminUserController extends Controller
{

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
        SortAdminUser::class,
        FilterAdminUser::class
      ])
      ->paginate(7);

    $users = UserResource::collection($pipe);

    return Inertia::render('Admin/User/Dashboard', compact('users'));
  }

  public function promote(int $userId)
  {
    dd($userId);
    User::findOrFail($userId)->detail->update(['admin' => true]);

    return back()->with('success', __('admin.user.promote'));
  }

  public function demote(int $userId)
  {
    User::findOrFail($userId)->detail->updateOrCreate(['admin' => false]);

    return back()->with('success', __('admin.user.demote'));
  }

  public function block(int $userId)
  {
    User::findOrFail($userId)->detail->updateOrCreate(['block' => true]);

    return back()->with('success', __('admin.user.block'));
  }

  public function unblock(int $userId)
  {
    User::findOrFail($userId)->detail->updateOrCreate(['block' => false]);

    return back()->with('success', __('admin.user.unblock'));
  }

  public function destroy(int $userId)
  {
    User::findOrFail($userId)->delete();

    return back()->with('success', __('admin.user.delete'));
  }
}
