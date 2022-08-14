<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterCollection extends Filter
{
  public string $filterName = 'q';

  public function applyFilter($builder)
  {
    $value = $this->getQueryValue();
    if (!$value) return $builder;

    return $builder->where(function ($query) use ($value) {
      $query
        ->Where('collections.name', 'like', "%$value%")
        ->orWhere('collections.description', 'like', "%$value%")
        ->orWhereHas('category', function ($query) use ($value) {
          $query->where('name', 'like', "%$value%");
        });
    });
  }
}
