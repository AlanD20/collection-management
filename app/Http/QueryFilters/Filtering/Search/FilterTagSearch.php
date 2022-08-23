<?php

namespace App\Http\QueryFilters\Filtering\Search;

use App\Http\QueryFilters\Base\Filter;

class FilterTagSearch extends Filter
{
    public string $filterName = 'query';

    public function applyFilter($builder)
    {
        $value = $this->getQueryValue();
        if (! $value) {
            return $builder;
        }

        return $builder->where(function ($query) use ($value) {
            $query->whereHas('tags', function ($query) use ($value) {
                $query->where('name', 'like', "%$value%");
            });
        });
    }
}
