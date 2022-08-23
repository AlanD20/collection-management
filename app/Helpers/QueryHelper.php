<?php

namespace App\Helpers;

use App\Http\QueryFilters\Filtering\Search\FilterCategorySearch;
use App\Http\QueryFilters\Filtering\Search\FilterCollectionSearch;
use App\Http\QueryFilters\Filtering\Search\FilterCommentSearch;
use App\Http\QueryFilters\Filtering\Search\FilterItemSearch;
use App\Http\QueryFilters\Filtering\Search\FilterTagSearch;
use App\Http\QueryFilters\Filtering\Search\FilterUserSearch;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\ItemResource;
use App\Http\Resources\UserResource;
use App\Models\Collection;
use App\Models\Item;
use App\Models\User;

class QueryHelper
{
    public function items()
    {
        $query = Item::query()
      ->with([
          'tags',
          'collection',
          'collection.user',
      ]);

        $pipe = ThroughPipeline::getPaginatePipe(
            query: $query,
            filters: [FilterItemSearch::class],
            paginate: 12,
            name: 'items'
        );

        return ItemResource::collection($pipe);
    }

    public function categories()
    {
        $query = Collection::query()
      ->with('user', 'category');

        $pipe = ThroughPipeline::getPaginatePipe(
            query: $query,
            filters: [FilterCategorySearch::class],
            name: 'categories'
        );

        return CollectionResource::collection($pipe);
    }

    public function collections()
    {
        $query = Collection::query()->with(['user', 'category']);

        $pipe = ThroughPipeline::getPaginatePipe(
            query: $query,
            filters: [FilterCollectionSearch::class],
            name: 'collections'
        );

        return CollectionResource::collection($pipe);
    }

    public function comments()
    {
        $query = Item::query()
      ->with([
          'comments',
          'collection',
          'comments.user',
          'collection.user',
      ]);

        $pipe = ThroughPipeline::getPaginatePipe(
            query: $query,
            filters: [FilterCommentSearch::class],
            name: 'comments'
        );

        $pipe->getCollection()
      ->each(
          fn ($item) => $item->comments = $item->comments->filter(
              fn ($comment) => str_contains($comment->body, request()->query('query'))
          )
      );

        return ItemResource::collection($pipe);
    }

    public function tags()
    {
        $query = Item::query()
      ->with([
          'tags',
          'collection',
          'collection.user',
      ]);
        $pipe = ThroughPipeline::getPaginatePipe(
            query: $query,
            filters: [FilterTagSearch::class],
            name: 'tags'
        );

        return ItemResource::collection($pipe);
    }

    public function users()
    {
        $query = User::query();

        $pipe = ThroughPipeline::getPaginatePipe(
            query: $query,
            filters: [FilterUserSearch::class],
            paginate: 12,
            name: 'users'
        );

        return UserResource::collection($pipe);
    }
}
