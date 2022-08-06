<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
  public function index()
  {

    $users = User::with('detail')->paginate(7);

    return view('admin.index', compact('users'));
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
