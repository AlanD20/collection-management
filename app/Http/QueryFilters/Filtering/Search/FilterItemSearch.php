<?php

namespace App\Http\QueryFilters\Filtering\Search;

use App\Http\QueryFilters\Base\Filter;

class FilterItemSearch extends Filter
{
    public string $filterName = 'query';

    public function applyFilter($builder)
    {
        $value = $this->getQueryValue();
        if (! $value) {
            return $builder;
        }

        return $builder->where(function ($query) use ($value) {
            $query
        ->where('items.name', 'like', "%$value%")
        ->orWhere('items.fields', 'like', "%$value%");
        });
    }
}
