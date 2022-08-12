<?php

namespace App\Http\Controllers\User;

use App\Models\Tag;
use App\Models\Item;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Collection;
use Illuminate\Http\Request;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;
use App\Http\QueryFilters\Sorting\SortItem;
use App\Http\QueryFilters\Filtering\FilterItem;

class ItemController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @param  \App\Models\User $uname
   * @param  int $collection
   * @return \Illuminate\Http\Response
   */
  public function index(User $uname, int $collection)
  {
    $query = Item::query()
      ->with('tags')
      ->where('collection_id', $collection);

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortItem::class,
        FilterItem::class
      ])
      ->paginate(7);

    $items = ItemResource::collection($pipe);

    return Inertia::render('User/Item/Dashboard', compact('items'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @param  string $uname
   * @param  \App\Models\Collection $collection
   * @return \Illuminate\Http\Response
   */
  public function create(string $uname, Collection $collection)
  {
    $tags = Tag::all();

    return Inertia::render('User/Item/Create', compact('collection', 'tags'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
