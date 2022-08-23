<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Filtering\FilterAdminUser;
use App\Http\QueryFilters\Sorting\SortUser;
use App\Http\Resources\UserResource;
use App\Models\User;
use Inertia\Inertia;

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
          'details.*',
      ])->join('details', 'details.user_id', '=', 'users.id')
      ->with('detail');

        $pipe = ThroughPipeline::getPaginatePipe(
            $query,
            [
                SortUser::class,
                FilterAdminUser::class,
            ],
            paginate: 7
        );

        $users = UserResource::collection($pipe);

        return Inertia::render('Admin/User/Dashboard', compact('users'));
    }

    /**
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function promote(User $user)
    {
        $user->detail->update(['admin' => true]);

        return back()->with('success', __('admin.promote'));
    }

    /**
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function demote(User $user)
    {
        $user->detail->update(['admin' => false]);

        return back()->with('success', __('admin.demote'));
    }

    /**
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function block(User $user)
    {
        $user->detail->update(['block' => true]);

        return back()->with('success', __('admin.block'));
    }

    /**
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function unblock(User $user)
    {
        $user->detail->update(['block' => false]);

        return back()->with('success', __('admin.unblock'));
    }

    /**
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', __('admin.delete'));
    }
}
