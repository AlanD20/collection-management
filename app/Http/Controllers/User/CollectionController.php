<?php

namespace App\Http\Controllers\User;

use App\Helpers\CollectionHelper;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Models\{User, Collection, Category};
use App\Http\Requests\User\CollectionRequest;
use App\Http\QueryFilters\Sorting\SortCollection;
use App\Http\QueryFilters\Filtering\FilterCollection;
use App\Http\Resources\{
  CollectionResource,
  CategoryResource,
};

class CollectionController extends Controller
{

  /**
   * Display a listing of the resource.
   *
   * @param  \App\Models\User $user
   * @return \Inertia\Response
   */
  public function index(User $uname)
  {
    $query = Collection::query()
      ->with('category')
      ->withCount('items')
      ->where('user_id', $uname->id);

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortCollection::class,
        FilterCollection::class,
      ])
      ->paginate(7);

    $pipe->getCollection()
      ->each(
        fn (Collection $collection) => (new CollectionHelper())->truncDesc($collection)
      );


    $collections = CollectionResource::collection($pipe);

    return Inertia::render('User/Collection/Dashboard', compact('collections'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @param  \App\Models\User $user
   * @param  int $collection
   * @return \Illuminate\Http\RedirectResponse
   */
  public function show(string $uname, int $collection)
  {

    return redirect()->route('u.collections.items.index', [
      'uname' => $uname,
      'collection' => $collection,
    ]);
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
   * @return \Illuminate\Http\RedirectResponse
   */
  public function store(CollectionRequest $request, User $uname)
  {

    //! UPLOAD THUMBNAIL FILEEE
    $this->authorize('view', $uname);

    $fields =  (new CollectionHelper())
      ->slugifyFieldNames($request->safe()->fields);

    $uname->collections()->create([
      ...$request->validated(),
      'fields' => $fields
    ]);

    return back()->with('success', __('model.create', [
      'model' => 'Collection'
    ]));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  string  $uname
   * @param  \App\Models\Collection  $collection
   * @return \Inertia\Response
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
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update(CollectionRequest $request, string $uname, Collection $collection)
  {

    $this->authorize('update', $collection);

    $collection->update([
      ...$request->validated(),
      'fields' => $this->slugifyFieldNames($request->safe()->fields)
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
   * @return \Illuminate\Http\RedirectResponse
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
