<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Models\{User, Collection, Category};
use App\Http\Resources\{
  CollectionResource,
  CategoryResource
};
use App\Http\Requests\User\CollectionRequest;
use App\Http\QueryFilters\Sorting\SortCollection;
use App\Http\QueryFilters\Filtering\FilterCollection;

class CollectionController extends Controller
{

  /**
   * Display a listing of the resource.
   *
   * @param  \App\Models\User $user
   * @return \Illuminate\Http\Response
   */
  public function index(User $uname)
  {
    $query = Collection::query()
      ->select([
        'collections.*',
        'categories.name AS category.name'
      ])
      ->join('categories', 'categories.id', '=', 'collections.category_id')
      ->with('category')
      ->where('user_id', $uname->id);

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortCollection::class,
        FilterCollection::class
      ])
      ->paginate(7);

    $pipe->getCollection()
      ->each(function (Collection $collection) {
        $collection->name = Str::limit($collection->name, 20, '...');
        $collection->description = Str::limit($collection->description);
      });

    $collections = CollectionResource::collection($pipe);

    return Inertia::render('User/Collection/Dashboard', compact('collections'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @param  \App\Models\User $user
   * @param  int $collection
   * @return \Illuminate\Http\Response
   */
  public function show(User $uname, int $collection)
  {

    $query = Collection::query()
      ->with('category')
      ->where('user_id', $uname->id)
      ->findOrFail($collection);
    $collection = new CollectionResource($query);
    $items = $collection->items()->paginate(7);

    return Inertia::render('User/Item/Dashboard', compact('collection', 'items'));
  }

  public function create(User $uname)
  {

    $this->authorize('view', $uname);

    $categories = CategoryResource::collection(Category::all());

    return Inertia::render('User/Collection/Create', compact('categories'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\User\CollectionRequest  $request
   * @param  \App\Models\User $user
   * @return \Illuminate\Http\Response
   */
  public function store(CollectionRequest $request, User $uname)
  {

    $this->authorize('view', $uname);

    $uname->collections()->create($request->validated());

    return back()->with('success', __('model.create', [
      'model' => 'Collection'
    ]));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  string  $uname
   * @param  \App\Models\Collection  $collection
   * @return \Illuminate\Http\Response
   */
  public function edit(string $uname, Collection $collection)
  {

    $this->authorize('view', $collection);

    $collection->load('category');
    $collection = new CollectionResource($collection);
    $categories = CategoryResource::collection(Category::all());

    return Inertia::render('User/Collection/Edit', \compact('collection', 'categories'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\User\CollectionRequest  $request
   * @param  string  $uname
   * @param  \App\Models\Collection  $collection
   * @return \Illuminate\Http\Response
   */
  public function update(CollectionRequest $request, string $uname, Collection $collection)
  {

    $this->authorize('update', $collection);

    $collection->update([
      'name' => $request->safe()->name
    ]);

    return back()->with('success', __('model.update', [
      'model' => 'Collection'
    ]));
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  string  $uname
   * @param  \App\Models\Collection  $collection
   * @return \Illuminate\Http\Response
   */
  public function destroy(string $uname, Collection $collection)
  {

    $this->authorize('delete', $collection);

    $collection->delete();

    return back()->with('success', __('model.delete', [
      'model' => 'Collection'
    ]));
  }
}
