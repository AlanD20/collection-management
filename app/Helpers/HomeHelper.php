<?php


namespace App\Helpers;


use App\Models\{Item, User, Collection};
use App\Http\Resources\{
  UserResource,
  ItemResource,
  CollectionResource
};
use App\Http\QueryFilters\Filtering\{
  FilterUserSearch,
  FilterItemSearch
};

class HomeHelper
{

  public function queryItems()
  {

    $query = Item::query()
      ->with([
        'comments',
        'tags',
        'collection',
        'collection.user',
        'collection.category'
      ]);

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        FilterItemSearch::class
      ])
      ->paginate(5)
      ->withQueryString();

    $pipe->each(fn ($item) => $item->tags = $item->tags->take(3));

    return ItemResource::collection($pipe);
  }

  public function queryUsers()
  {

    $query = User::query();

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        FilterUserSearch::class
      ])
      ->paginate(5)
      ->withQueryString();

    return UserResource::collection($pipe);
  }

  /**
   * Query latest collections.
   *
   */
  public function getLatestCollections()
  {
    $query = Collection::query()
      ->with('category', 'user')
      ->latest('created_at')
      ->take(5)
      ->get()
      ->each(
        fn (Collection $collection) => (new CollectionHelper())->truncDesc($collection, 65)
      );

    return CollectionResource::collection($query);
  }

  /**
   * Query largest collections.
   *
   */
  public function getLargestCollections()
  {
    $query = Collection::query()
      ->with('category', 'user')
      ->withCount('items')
      ->orderBy('items_count', 'desc')
      ->take(5)
      ->get()
      ->each(
        fn (Collection $collection) => (new CollectionHelper())->truncDesc($collection, 65)
      );


    return CollectionResource::collection($query);
  }

  /**
   * Query latest items.
   *
   */
  public function getLatestItems()
  {
    $query = Item::query()
      ->with('tags', 'collection', 'collection.user')
      ->latest('created_at')
      ->take(4)
      ->get()
      ->each(fn (Item $item) => $item->tags = $item->tags->take(4));

    return ItemResource::collection($query);
  }

  /**
   * Query latest users
   *
   */
  public function getLatestUsers()
  {
    $query = User::query()
      ->latest('created_at')
      ->take(5)
      ->get();

    return UserResource::collection($query);
  }
}
