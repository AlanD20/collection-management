<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterTagCategory extends Filter
{
  public string $filterName = 'q';

  public function applyFilter($builder)
  {
    $value = $this->getQueryValue();
    return $builder->where(function ($query) use ($value) {
      $query->where('name', 'like', "%{$value}%");
    });
  }
}
