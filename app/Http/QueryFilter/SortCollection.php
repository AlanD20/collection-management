<?php

namespace App\Http\QueryFilter;


use App\Http\QueryFilter\Base\SortFilter;

class SortCollection extends SortFilter
{

  protected $columns = [
    'id' => 'collections.id',
    'name' => 'collections.name',
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
