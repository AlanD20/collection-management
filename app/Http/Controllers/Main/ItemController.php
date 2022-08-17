<?php

namespace App\Http\Controllers\Main;

use App\Models\Item;
use Inertia\Inertia;
use App\Helpers\ItemHelper;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;
use App\Http\QueryFilters\Sorting\SortItem;

class ItemController extends Controller
{

  /**
   * Display a listing of the resource.
   *
   * @return \Inertia\Response
   */
  public function index()
  {
    $query = Item::query()
      ->with('tags', 'collection', 'collection.user')
      ->withCount('likes', 'comments')
      ->addSelect('items.*');

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortItem::class
      ])
      ->paginate(12)
      ->withQueryString();

    $pipe->getCollection()
      ->each(fn (Item $item) => $item->tags = $item->tags->take(3));


    $likes = (new ItemHelper())->getUserLikes($pipe->getCollection());

    $items = ItemResource::collection($pipe);

    return Inertia::render('Main/Items', compact('items'));
  }
}
