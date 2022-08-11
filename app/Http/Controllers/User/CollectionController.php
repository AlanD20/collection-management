<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Filtering\FilterCollection;
use App\Models\{Collection, Category};
use App\Http\Resources\{
  CollectionResource,
  CategoryResource
};
use App\Http\Requests\User\{
  StoreCollectionRequest,
  UpdateCollectionRequest
};
use App\Http\QueryFilters\Sorting\SortCollection;

class CollectionController extends Controller
{

  public function index(Request $request)
  {

    $query = Collection::query()
      ->select([
        'collections.*',
        'categories.name AS category.name'
      ])
      ->join('categories', 'categories.id', '=', 'collections.category_id')
      ->with('category')
      ->where('user_id', $request->user()->id);

    $pipe = ThroughPipeline::new()
      ->query($query)
      ->through([
        SortCollection::class,
        FilterCollection::class
      ])
      ->paginate(7);

    $collections = CollectionResource::collection($pipe);

    return Inertia::render('User/Collection/Dashboard', compact('collections'));
  }

  public function show(Request $request,  string $uname, int $id)
  {
    $query = Collection::with('category')->findOrFail($id);
    $collection = new CollectionResource($query);

    return Inertia::render('User/Collection/Show', compact('collection'));
  }

  public function create()
  {
    $categories = CategoryResource::collection(Category::all());

    return Inertia::render('User/Collection/Create', compact('categories'));
  }

  public function store(StoreCollectionRequest $request)
  {

    $user = $request->user();
    $user->collections()->create($request->validated());

    return back()->with('success', __('user.collection.create'));
  }

  public function edit(Request $request, string $uname, int $id)
  {
    $query = Collection::fwith('category')->indOrFail($id);
    $category = new CollectionResource($query);

    return Inertia::render('User/Collection/Edit', \compact('category'));
  }

  public function update(UpdateCollectionRequest $request, string $uname, int $id)
  {

    Collection::findOrFail($id)->update([
      'name' => $request->safe()->name
    ]);

    return back()->with('success', __('user.collection.update'));
  }

  public function destroy(string $uname, int $id)
  {
    Collection::findOrFail($id)->delete();

    return back()->with('success', __('user.collection.delete'));
  }
}
