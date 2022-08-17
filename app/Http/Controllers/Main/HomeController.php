<?php

namespace App\Http\Controllers\Main;

use Inertia\Inertia;
use App\Models\Collection;
use App\Models\{User, Item};
use Illuminate\Http\Request;
use App\Helpers\ThroughPipeline;
use App\Helpers\CollectionHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\{UserResource, ItemResource};

class HomeController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Inertia\Response
   */
  public function index()
  {
    $latestCollections = $this->getLatestCollections();
    $largestCollections = $this->getLargestCollections();
    $latestItems = $this->getLatestItems();
    $latestUsers = $this->getLatestUsers();


    return Inertia::render('Home', compact('latestCollections', 'latestItems', 'latestUsers', 'largestCollections'));
  }

  /**
   * Display the result resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function search(Request $request)
  {
    // $query = Collection::query()
    //   ->with('category')
    //   ->withCount('items');

    // $pipe = ThroughPipeline::new()
    //   ->query($query)
    //   ->through([
    //     SortCollection::class,
    //     FilterCollection::class,
    //   ])
    //   ->paginate(7)
    // ->withQueryString();

    // $pipe->getCollection()
    //   ->each(
    //     fn (Collection $collection) => (new CollectionHelper())->truncDesc($collection)
    //   );


    // $collections = CollectionResource::collection($pipe);

    return Inertia::render('Main/SearchResult');
  }

  function getLatestCollections()
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

  function getLargestCollections()
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

  function getLatestItems()
  {
    $query = Item::query()
      ->with('tags', 'collection', 'collection.user')
      ->latest('created_at')
      ->take(4)
      ->get()
      ->each(fn (Item $item) => $item->tags = $item->tags->take(4));

    return ItemResource::collection($query);
  }

  function getLatestUsers()
  {
    $query = User::query()
      ->latest('created_at')
      ->take(5)
      ->get();

    return UserResource::collection($query);
  }
}
