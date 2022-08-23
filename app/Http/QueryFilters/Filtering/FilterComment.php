<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterComment extends Filter
{
    public string $filterName = 'query';

    public function applyFilter($builder)
    {
        $value = $this->getQueryValue();

        return $builder->whereHas('comments', function ($query) use ($value) {
            $query->whereRaw('LOWER("body"):: text  LIKE ? ', ["%$value%"]);
        });
    }
}
