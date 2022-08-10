<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\QueryFilter\SortAdminUser;

class AdminUserController extends Controller
{

  public function index()
  {
    $query = User::query()
      ->select([
        'users.*',
        'details.*'
      ])->join('details', 'details.user_id', '=', 'users.id');

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortAdminUser::class
      ])
      ->paginate(7);

    $users = UserResource::collection($pipe);

    return Inertia::render('Admin/User/Dashboard', compact('users'));
  }

  public function promote(int $id)
  {

    User::find($id)->detail->update([
      'admin' => true
    ]);

    return back()->with('status', __('admin.user.promote'));
  }

  public function demote(int $id)
  {
    User::find($id)->detail->update([
      'admin' => false
    ]);
    return back()->with('status', __('admin.user.demote'));
  }

  public function block(int $id)
  {
    User::find($id)->detail->update([
      'block' => true
    ]);
    return back()->with('status', __('admin.user.block'));
  }

  public function unblock(int $id)
  {
    User::find($id)->detail->update([
      'block' => false
    ]);
    return back()->with('status', __('admin.user.unblock'));
  }

  public function destroy(int $id)
  {
    User::find($id)->delete();
    return back()->with('status', __('admin.user.delete'));
  }
}
