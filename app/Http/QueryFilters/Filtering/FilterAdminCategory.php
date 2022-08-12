<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterAdminCategory extends Filter
{
  public string $filterName = 'q';

  public function applyFilter($builder)
  {
    $value = $this->getQueryValue();
    return $builder->where(function ($query) use ($value) {
      $query->where('categories.name', 'like', "%{$value}%");
    });
  }
}
