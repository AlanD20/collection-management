<?php

namespace App\Http\QueryFilters\Base;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

abstract class Filter
{
    /**
     * handle function is used by \Illuminate\Pipeline\Pipeline, you do not have to do anything else.
     *
     * if you want to extend your needs you may do it without extending Filter class, but make sure to follow the rules.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  \Closure  $next
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function handle(Builder $query, \Closure $next)
    {
        if (! request()->has($this->getFilterName())) {
            return $next($query);
        }
        $builder = $next($query);

        $response = $this->applyFilter($builder);

        return $response ?: $next($query);
    }

    /**
     * Overloaded function to apply the desired builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @return \Illuminate\Database\Eloquent\Builder
     */
    abstract protected function applyFilter($builder);

    /**
     * Check query value is in given array.
     *
     * @return bool
     */
    protected function isRequestInArray($array)
    {
        $queryName = $this->getQueryValue();
        if (! in_array($queryName, $array)) {
            return false;
        }

        return true;
    }

    /**
     * Return query name in lowercase.
     *
     * @return string
     */
    protected function getQueryValue()
    {
        return strtolower(request($this->getFilterName()));
    }

    /**
     * Converts the class name to snake case and uses it as the filter name for URI
     *
     * @return string
     */
    protected function getFilterName()
    {
        return \strtolower($this->filterName) ?? Str::snake(\class_basename($this));
    }
}
