<?php

namespace App\Helpers;

use Illuminate\Pipeline\Pipeline;
use Illuminate\Database\Eloquent\Builder;


class ThroughPipeline
{

  private const ResourcePath = '\\App\\Http\\Resources\\';

  private Builder $query;
  private array $filters;


  /**
   * Return a new instance.
   *
   * @return \App\Helpers\ThroughPipeline
   */
  public static function new()
  {
    return new ThroughPipeline();
  }

  /**
   * Query to run through pipe lines.
   *
   * @param \Illuminate\Database\Eloquent\Builder $query
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
   * @param array $filters
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
   * @param int $limit
   *
   * @return \Illuminate\Pagination\Paginator
   */
  public function paginate(int $limit)
  {
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
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function buildQuery()
  {
    return app(Pipeline::class)
      ->send($this->query)
      ->through($this->filters)
      ->thenReturn();
  }
}
