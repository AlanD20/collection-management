<?php

namespace App\Helpers;

use App\Models\Collection;
use Illuminate\Support\Str;

class CollectionHelper
{


  public function slugifyFieldNames($fields): array
  {
    return collect($fields)
      ->map(fn ($f) => [
        ...$f,
        'name' => Str::slug($f['name'])
      ])
      ->all();
  }

  public function truncDesc(Collection $collection, int $limit = 100)
  {
    $collection->name = Str::limit($collection->name, 20, '...');
    $collection->description = Str::limit($collection->description, $limit, '...');
    return $collection;
  }
}
