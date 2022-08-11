<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterCollection extends Filter
{
  public string $filterName = 'q';

  public function applyFilter($builder)
  {
    $value = $this->getQueryValue();
    return $builder->where(function ($query) use ($value) {
      $query->where('collections.name', 'like', "%{$value}%")
        ->orWhere('categories.name', 'like', "%{$value}%")
        ->orWhere('collections.description', 'like', "%{$value}%");
    });
  }
}
