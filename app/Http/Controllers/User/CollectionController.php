<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\Collection;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CollectionResource;
use App\Http\Requests\User\StoreCollectionRequest;
use App\Http\Requests\User\UpdateCollectionRequest;
use App\Http\Resources\CategoryResource;

class CollectionController extends Controller
{


  public function index(Request $request, string $uname)
  {
    $query = Collection::query()
      ->where('user_id', $request->user()->id)
      ->paginate(7);

    $collections = CollectionResource::collection($query);

    return Inertia::render('User/Collection/Dashboard', compact('collections', 'uname'));
  }

  public function show(Request $request, string $username,  int $id)
  {
    $query = Collection::findOrFail($id);
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
    $query = Collection::findOrFail($id);
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
