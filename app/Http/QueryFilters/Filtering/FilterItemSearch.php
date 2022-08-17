<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterItemSearch extends Filter
{

  public string $filterName = 'query';

  public function applyFilter($builder)
  {
    $value = $this->getQueryValue();
    if (!$value) return $builder;

    return $builder->where(function ($query) use ($value) {
      $query
        ->orWhere('items.name', 'like', "%$value%")
        ->orWhere('items.fields', 'like', "%$value%")
        ->orWhereHas('collection', function ($query) use ($value) {
          $query
            ->where('collections.name', 'like', "%$value%")
            ->orWhere('collections.description', 'like', "%$value%")
            ->orWhereHas('category', function ($query) use ($value) {
              $query->where('name', 'like', "%$value%");
            });
        })
        ->orWhereHas('tags', function ($query) use ($value) {
          $query->where('name', 'like', "%$value%");
        })
        ->orWhereHas('comments', function ($query) use ($value) {
          $query->where('body', 'like', "%$value%");
        });
    });
  }
}
