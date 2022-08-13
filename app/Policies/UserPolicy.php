<?php

namespace App\Policies;

use App\Models\User;
use App\Policies\AdminPolicy;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy extends AdminPolicy
{
  use HandlesAuthorization;

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\User  $model
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, User $model)
  {
    return $user->id === $model->id;
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\User  $model
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, User $model)
  {
    return $user->id === $model->id;
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\User  $model
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, User $model)
  {
    return $user->id === $model->id;
  }
}
