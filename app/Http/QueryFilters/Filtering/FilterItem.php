<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterItem extends Filter
{
  public string $filterName = 'query';

  public function applyFilter($builder)
  {
    $value = $this->getQueryValue();
    if (!$value) return $builder;

    return $builder->where(function ($query) use ($value) {
      $query
        ->where('items.name', 'like', "%$value%")
        ->orWhereHas('tags', function ($query) use ($value) {
          $query->where('name', 'like', "%$value%");
        });
    });
  }
}
