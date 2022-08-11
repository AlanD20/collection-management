<?php

namespace App\Http\QueryFilters\Sorting;

use App\Http\QueryFilters\Base\SortFilter;

class SortAdminUser extends SortFilter
{

  protected $columns = [
    'id' => 'users.id',
    'name' => 'users.name',
    'username' => 'users.username',
    'status' => 'details.block',
    'admin' => 'details.admin',
    'created_at' => 'users.created_at',
    'updated_at' => 'users.updated_at',
  ];


  protected function applyFilter($builder)
  {
    $column = $this->getOrderColumn();
    return $builder->orderBy($column, $this->getSort());
  }
}
