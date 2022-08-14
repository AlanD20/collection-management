<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Comment;
use App\Models\Item;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy extends AdminPolicy
{
  use HandlesAuthorization;

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Comment  $comment
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Comment $comment)
  {
    return $user->id === $comment->user_id;
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Comment  $comment
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Comment $comment)
  {

    return $user->id === $comment->user_id || $comment->item_user_id === $user->id;
  }
}
