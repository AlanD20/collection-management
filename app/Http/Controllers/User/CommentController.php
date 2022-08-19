<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CommentRequest;
use App\Models\Comment;
use App\Models\User;

class CommentController extends Controller
{

  /**
   * Instantiate a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware(['auth', 'isBlocked']);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\User\CommentRequest  $request
   * @param  \App\Models\User  $uname
   * @param  int  $collection
   * @param  int  $item
   * @return \Illuminate\Http\RedirectResponse
   */
  public function store(CommentRequest $request, User $uname, int $collection, int $item)
  {

    request()->user()->comments()->create([
      'item_id' => $item,
      'item_user_id' => $uname->id,
      'body' => $request->safe()->body
    ]);

    return back()->with('success', __('model.post', [
      'model' => 'Comment'
    ]));
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  string  $uname
   * @param  int  $collection
   * @param  int  $item
   * @param  \App\Models\Comment  $comment
   * @return \Illuminate\Http\RedirectResponse
   */
  public function destroy(string $uname, int $collection, int $item, Comment $comment)
  {
    $this->authorize('delete', $comment);

    $comment->delete();

    return back()->with('success', __('model.delete', [
      'model' => 'Comment'
    ]));
  }
}
