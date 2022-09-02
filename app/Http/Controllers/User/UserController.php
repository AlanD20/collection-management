<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserPasswordRequest;
use App\Http\Requests\User\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\Collection;
use App\Models\Comment;
use App\Models\Like;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'isBlocked'])
            ->except('show');
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $uname
     * @return \Illuminate\Http\Response
     */
    public function show(string $uname)
    {
        $uname = User::where('username', $uname)->firstOrFail();
        $user = new UserResource($uname);

        $collectionCount = $this->getUserCollectionsCount($uname->id);
        $commentCount = $this->getUserCommentsCount($uname->id);
        $likeCount = $this->getUserLikesCount($uname->id);

        return Inertia::render('User/Dashboard', compact('user', 'collectionCount', 'commentCount', 'likeCount'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $uname
     * @return \Illuminate\Http\Response
     */
    public function edit(string $uname)
    {
        $uname = User::where('username', $uname)->firstOrFail();

        $this->authorize('view', $uname);

        $user = new UserResource($uname);

        return Inertia::render('User/Edit', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $uname
     * @return \Illuminate\Http\Response
     */
    public function edit_password(string $uname)
    {
        $uname = User::where('username', $uname)->firstOrFail();

        $this->authorize('view', $uname);

        $user = new UserResource($uname);

        return Inertia::render('User/EditPassword', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $uname
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UserRequest $request, User $uname)
    {
        $this->authorize('update', $uname);

        $uname->update($request->validated());
        $uname->fresh();

        return redirect()
            ->route('u.show', ['uname' => $uname->username])
            ->with('success', __('model.update', [
                'model' => 'user',
            ]));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $uname
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update_password(UserPasswordRequest $request, User $uname)
    {
        $this->authorize('update', $uname);

        $uname->update([
            'password' => Hash::make($request->safe()->password),
        ]);

        return redirect()
            ->route('u.show', ['uname' => $uname->username])
            ->with('success', __('model.update', [
                'model' => 'user',
            ]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $uname
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(User $uname)
    {
        $this->authorize('view', $uname);

        $uname->delete();

        return redirect()
            ->route('main.index')
            ->with('success', __('model.delete', [
                'model' => 'user',
            ]));
    }

    public function getUserCollectionsCount(int $id): int
    {
        $query = Collection::query()
            ->where('user_id', $id);

        return $query->count();
    }

    public function getUserCommentsCount(int $id): int
    {
        $query = Comment::query()
            ->where('user_id', $id);

        return $query->count();
    }

    public function getUserLikesCount(int $id): int
    {
        $query = Like::query()
            ->where('user_id', $id);

        return $query->count();
    }
}
