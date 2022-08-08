<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class AdminUserController extends Controller
{
  public function index()
  {
    $query = User::with('detail')->paginate(7);
    $users = UserResource::collection($query);

    return Inertia::render('Admin/User/Dashboard', compact('users'));
  }

  public function promote(int $id)
  {

    User::with('detail')->find($id)->detail->update([
      'admin' => true
    ]);

    return back()->with('status', __('admin.user.promote'));
  }

  public function demote(int $id)
  {

    User::with('detail')->find($id)->detail->update([
      'admin' => false
    ]);

    return back()->with('status', __('admin.user.demote'));
  }

  public function block(int $id)
  {

    User::with('detail')->find($id)->detail->update([
      'block' => true
    ]);

    return back()->with('status', __('admin.user.block'));
  }

  public function unblock(int $id)
  {

    User::with('detail')->find($id)->detail->update([
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
