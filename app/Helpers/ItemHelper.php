<?php

namespace App\Helpers;


class ItemHelper
{

  /**
   * Filter custom fields with existing values
   *
   * @param  array $fields
   * @return array
   */
  public  function filterFields($fields): array
  {

    return collect($fields)
      ->filter(fn ($f) => \array_key_exists('value', $f))
      ->values()
      ->all();
  }

  /**
   * Get liked items for current authenticated user.
   *
   * @param  \Illuminate\Support\Collection $items
   * @return array
   */
  public function getUserLikes(\Illuminate\Support\Collection $items)
  {
    if (!request()->user()) return [];

    return request()->user()
      ->likes()
      ->whereIn('item_id', $items->pluck('id')->all())
      ->get()
      ->pluck('id')
      ->all();
  }
}
