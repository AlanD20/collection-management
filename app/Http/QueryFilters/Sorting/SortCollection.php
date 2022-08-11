<?php

namespace App\Http\QueryFilters\Sorting;

use App\Http\QueryFilters\Base\SortFilter;

class SortCollection extends SortFilter
{

  protected $columns = [
    'id' => 'collections.id',
    'title' => 'collections.name',
    'category' => 'categories.name',
    'created_at' => 'collections.created_at',
    'updated_at' => 'collections.updated_at',
  ];


  protected function applyFilter($builder)
  {
    $column = $this->getOrderColumn();
    return $builder->orderBy($column, $this->getSort());
  }
}
