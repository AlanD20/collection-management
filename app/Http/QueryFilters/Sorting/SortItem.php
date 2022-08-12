<?php

namespace App\Http\QueryFilters\Sorting;

use App\Http\QueryFilters\Base\SortFilter;

class SortItem extends SortFilter
{

  protected $columns = [
    'id' => 'items.id',
    'name' => 'items.name',
    'tags' => 'tags.name',
    'created_at' => 'items.created_at',
    'updated_at' => 'items.updated_at',
  ];


  protected function applyFilter($builder)
  {
    $column = $this->getOrderColumn();
    return $builder->orderBy($column, $this->getSort());
  }
}
