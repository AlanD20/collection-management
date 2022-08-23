<?php

namespace App\Http\QueryFilters\Sorting;

use App\Http\QueryFilters\Base\SortFilter;

class SortCollection extends SortFilter
{
    protected $columns = [
        'id' => 'collections.id',
        'title' => 'collections.name',
        'category' => 'categories.name',
        'items' => 'items_count',
        'created_at' => 'collections.created_at',
        'updated_at' => 'collections.updated_at',
    ];

    protected function applyFilter($builder)
    {
        $column = $this->getOrderColumn();

        return $builder
      ->addSelect([
          'categories.name AS category.name',
      ])
      ->join('categories', 'categories.id', '=', 'collections.category_id')
      ->orderBy($column, $this->getSort());
    }
}
