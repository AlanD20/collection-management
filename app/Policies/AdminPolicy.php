<?php

namespace App\Policies;

use App\Models\User;


class AdminPolicy
{
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
}
