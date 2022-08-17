<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterUserSearch extends Filter
{

  public string $filterName = 'query';

  public function applyFilter($builder)
  {
    $value = $this->getQueryValue();
    if (!$value) return $builder;

    return $builder->where(function ($query) use ($value) {
      $query
        ->orWhere('users.name', 'like', "%$value%")
        ->orWhere('users.username', 'like', "%$value%");
    });
  }
}
