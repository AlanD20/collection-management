<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Collection;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Helpers\CollectionHelper;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\ItemResource;
use App\Http\Resources\UserResource;
use App\Models\Item;
use App\Models\User;

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
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
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
      ->with([
        'tags' => fn ($tags) => $tags->take(25)->get(),
        'collection',
        'collection.user'
      ])
      ->latest('created_at')
      ->take(5)
      ->get();

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
