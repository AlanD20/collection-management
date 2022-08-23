<?php

namespace App\Http\QueryFilters\Filtering;

use App\Http\QueryFilters\Base\Filter;

class FilterAdminUser extends Filter
{
    public string $filterName = 'query';

    public function applyFilter($builder)
    {
        $value = $this->getQueryValue();

        return $builder->where(function ($query) use ($value) {
            $query->where('users.name', 'like', "%{$value}%")
        ->orWhere('users.username', 'like', "%{$value}%")
        ->orWhere('users.email', 'like', "%{$value}%");
        });
    }
}
