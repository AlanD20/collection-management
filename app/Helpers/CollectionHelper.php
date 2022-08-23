<?php

namespace App\Helpers;

use App\Models\Collection;
use Illuminate\Support\Str;

class CollectionHelper
{
    /**
     * Slugify custom field's name
     *
     * @param  array  $fields
     * @return array
     */
    public function slugifyFieldNames($fields): array
    {
        return collect($fields)
      ->map(fn ($f) => [
          ...$f,
          'name' => Str::slug($f['name']),
      ])
      ->all();
    }

    /**
     * Truncate description field to a limited number of characters.
     *
     * @param  \App\Models\Collection  $collection
     * @return \App\Models\Collection
     */
    public function truncDesc(Collection $collection, int $limit = 100)
    {
        $collection->name = Str::limit($collection->name, 12, '...');
        $collection->description = Str::limit($collection->description, $limit, '...');

        return $collection;
    }
}
