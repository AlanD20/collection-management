<?php

namespace App\Helpers;

use App\Models\Item;
use Illuminate\Support\Collection;


class ItemHelper
{

  /**
   * Filter custom fields with existing values
   *
   * @param  array $fields
   * @return array
   */
  public  function filterFields(array $fields): array
  {

    return collect($fields)
      ->filter(fn ($f) => \array_key_exists('value', $f))
      ->transform(fn ($f) => [
        ...$f,
        'value' => \strtolower($f['value'])
      ])
      ->values()
      ->all();
  }

  /**
   * Get liked items for current authenticated user.
   *
   * @param  Collection|Item $items
   * @return array
   */
  public function getUserLikes(Collection|Item $items)
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
