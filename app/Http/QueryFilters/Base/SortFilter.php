<?php

namespace App\Http\QueryFilters\Base;

use Illuminate\Database\Eloquent\Builder;

abstract class SortFilter
{
    public $filterName = ['sort', 'order_by'];

    protected $sortTypes = ['asc', 'desc'];

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
        if (! request()->has($this->getFilterNames())) {
            return $next($query);
        }
        if (! $this->isSortTypeExists() || ! $this->isColumnExists()) {
            return $next($query);
        }

        $builder = $next($query);

        return $this->applyFilter($builder);
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
    protected function isSortTypeExists()
    {
        $sort = $this->getSort();
        if (! in_array($sort, $this->sortTypes)) {
            return false;
        }

        return true;
    }

    /**
     * Check if a column exists by given column name.
     *
     * @return bool
     */
    protected function isColumnExists()
    {
        $orderBy = $this->getOrderBy();

        if (! \array_key_exists($orderBy, $this->columns)) {
            return false;
        }

        return true;
    }

    /**
     * Return sort value in lowercase.
     *
     * @return string
     */
    protected function getSort()
    {
        return strtolower(request('sort'));
    }

    /**
     * Return order by in lowercase.
     *
     * @return string
     */
    protected function getOrderBy()
    {
        return strtolower(request('order_by'));
    }

    /**
     * Return order column.
     *
     * @return string
     */
    protected function getOrderColumn()
    {
        return $this->columns[$this->getOrderBy()];
    }

    /**
     * Converts the class name to snake case and uses it as the filter name for URI
     *
     * @return string
     */
    protected function getFilterNames()
    {
        $filters = [];
        if (\is_array($this->filterName)) {
            foreach ($this->filterName as $filter) {
                $filters[] = strtolower($filter);
            }
        }

        return $filters;
    }
}
