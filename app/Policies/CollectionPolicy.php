<?php

namespace App\Policies;

use App\Models\Collection;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CollectionPolicy
{
  use HandlesAuthorization;

  /**
   * Perform pre-authorization checks.
   *
   * @param  \App\Models\User  $user
   * @param  string  $ability
   * @return void|bool
   */
  public function before(User $user, $ability)
  {
    if ($user->detail->admin) return true;
    if ($user->detail->block) return false;
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Collection  $collection
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Collection $collection)
  {
    return $user->id === $collection->user_id;
  }
  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Collection  $collection
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Collection $collection)
  {
    return $user->id === $collection->user_id;
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Collection  $collection
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Collection $collection)
  {
    return $user->id === $collection->user_id;
  }
}
