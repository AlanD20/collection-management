<?php

namespace App\Http\QueryFilters\Sorting;


use App\Http\QueryFilters\Base\SortFilter;

class SortAdminCategory extends SortFilter
{

  protected $columns = [
    'id' => 'id',
    'name' => 'name',
    'created_at' => 'created_at',
    'updated_at' => 'updated_at',
  ];


  protected function applyFilter($builder)
  {
    $column = $this->getOrderColumn();
    return $builder->orderBy($column, $this->getSort());
  }
}
