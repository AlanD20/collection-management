<?php


namespace App\Helpers;

use App\Models\Item;
use App\Models\User;
use App\Models\Collection;
use App\Http\Resources\ItemResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\CollectionResource;

class HomeHelper
{

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
