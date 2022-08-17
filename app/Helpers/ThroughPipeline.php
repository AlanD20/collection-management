<?php

namespace App\Helpers;

use Illuminate\Pipeline\Pipeline;
use Illuminate\Database\Eloquent\Builder;


class ThroughPipeline
{


  private Builder $query;
  private array $filters;


  /**
   * Return a new instance.
   *
   * @return ThroughPipeline
   */
  public static function new(): ThroughPipeline
  {
    return new ThroughPipeline();
  }

  /**
   * Query to run through pipe lines.
   *
   * @param  Builder $query
   *
   * @return self
   */
  public function query(Builder $query)
  {
    $this->query = $query;
    return $this;
  }

  /**
   * Array of filters to send query through
   *
   * @param  array $filters
   *
   * @return self
   */
  public function through(array $filters)
  {
    $this->filters = $filters;
    return $this;
  }

  /**
   * Return the result as a paginator instance
   *
   * @param  int $limit
   *
   * @return \Illuminate\Pagination\Paginator
   */
  public function paginate(int $limit)
  {
    // \Illuminate\Support\Facades\DB::enableQueryLog();
    // $g = $this->buildQuery()->paginate($limit);
    // dd(\Illuminate\Support\Facades\DB::getQueryLog());
    return $this->buildQuery()->paginate($limit);
  }

  /**
   * Return the result in a collection instance
   *
   * @return \Illuminate\Support\Collection
   */
  public function get()
  {
    return $this->buildQuery()->get();
  }

  /**
   * Builds the pipeline
   *
   * @return Builder
   */
  public function buildQuery(): Builder
  {
    return app(Pipeline::class)
      ->send($this->query)
      ->through($this->filters)
      ->thenReturn();
  }
}
