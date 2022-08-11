<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Models\{User, Collection, Category};
use App\Http\Resources\{
  CollectionResource,
  CategoryResource
};
use App\Http\Requests\User\{
  StoreCollectionRequest,
  UpdateCollectionRequest
};
use App\Http\QueryFilters\Sorting\SortCollection;
use App\Http\QueryFilters\Filtering\FilterCollection;

class CollectionController extends Controller
{

  public function index(Request $request, User $uname)
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

    $collections = CollectionResource::collection($pipe);

    return Inertia::render('User/Collection/Dashboard', compact('collections'));
  }

  public function show(Request $request,  User $uname, int $id)
  {
    $query = Collection::query()
      ->with('category')
      ->where('user_id', $uname->id)
      ->findOrFail($id);
    $collection = new CollectionResource($query);

    return Inertia::render('User/Collection/Show', compact('collection'));
  }

  public function create(User $uname)
  {
    $this->authorize('view', $uname);

    $categories = CategoryResource::collection(Category::all());

    return Inertia::render('User/Collection/Create', compact('categories'));
  }

  public function store(StoreCollectionRequest $request, User $uname)
  {
    $this->authorize('view', $uname);

    $uname->collections()->create($request->validated());

    return back()->with('success', __('model.create', [
      'model' => 'Collection'
    ]));
  }

  public function edit(Request $request, string $uname, Collection $col_id)
  {

    $this->authorize('view', $col_id);

    $col_id->load('category');
    $category = new CollectionResource($col_id);

    return Inertia::render('User/Collection/Edit', \compact('category'));
  }

  public function update(UpdateCollectionRequest $request, string $uname, Collection $col_id)
  {
    $this->authorize('update', $col_id);

    $col_id->update([
      'name' => $request->safe()->name
    ]);

    return back()->with('success', __('model.update', [
      'model' => 'Collection'
    ]));
  }

  public function destroy(string $uname, Collection $col_id)
  {
    $this->authorize('delete', $col_id);

    $col_id->delete();

    return back()->with('success', __('model.delete', [
      'model' => 'Collection'
    ]));
  }
}
