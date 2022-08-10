<?php

namespace App\Http\Controllers\User;

use App\Helpers\ThroughPipeline;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Pipeline\Pipeline;
use App\Http\QueryFilter\SortCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CollectionResource;
use App\Http\Requests\User\StoreCollectionRequest;
use App\Http\Requests\User\UpdateCollectionRequest;
use Carbon\Carbon;

class CollectionController extends Controller
{

  public function index(Request $request, string $uname)
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
        SortCollection::class
      ])
      ->paginate(7);

    $collections = CollectionResource::collection($pipe);

    return Inertia::render('User/Collection/Dashboard', compact('collections', 'uname'));
  }

  public function show(Request $request, string $username,  int $id)
  {
    $query = Collection::with('category')->findOrFail($id);
    $collection = new CollectionResource($query);

    return Inertia::render('User/Collection/Show', compact('username', 'id'));
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

    return back()->with('status', __('user.collection.create'));
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

    return back()->with('status', __('user.collection.update'));
  }

  public function destroy(Request $request, string $uname, int $id)
  {
    Collection::findOrFail($id)->delete();

    return back()->with('status', __('user.collection.delete'));
  }
}
