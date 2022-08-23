<?php

namespace App\Http\Controllers\User;

use App\Helpers\CollectionHelper;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Filtering\FilterCollection;
use App\Http\QueryFilters\Sorting\SortCollection;
use App\Http\Requests\User\CollectionRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CollectionResource;
use App\Models\Category;
use App\Models\Collection;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CollectionController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'isBlocked'])
      ->except(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \App\Models\User  $user
     * @return \Inertia\Response
     */
    public function index(User $uname)
    {
        $query = Collection::query()
      ->with('category', 'user')
      ->withCount('items')
      ->where('user_id', $uname->id);

        $pipe = ThroughPipeline::getPaginatePipe(
            $query,
            [
                SortCollection::class,
                FilterCollection::class,
            ],
            paginate: 7
        );

        $pipe->getCollection()
      ->each(
          fn (Collection $collection) => (new CollectionHelper)->truncDesc($collection)
      );

        $collections = CollectionResource::collection($pipe);

        return Inertia::render('User/Collection/Dashboard', compact('collections'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Models\User  $user
     * @param  int  $collection
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
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(CollectionRequest $request, User $uname)
    {
        $this->authorize('view', $uname);

        $fields = [];
        if ($request->has('fields')) {
            $fields = (new CollectionHelper)
        ->slugifyFieldNames($request->safe()->fields);
        }

        $file = null;
        if ($request->has('thumbnail')) {
            $file = '/uploads/'.$request->file('thumbnail')->store('images', 'public');
        }

        $uname->collections()->create([
            ...$request->validated(),
            'fields' => $fields,
            'thumbnail' => $file,
        ]);

        return back()->with('success', __('model.create', [
            'model' => __('model.collection'),
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

        $fields = [];
        if ($request->has('fields')) {
            $fields = (new CollectionHelper)
        ->slugifyFieldNames($request->safe()->fields);
        }

        $file = null;
        if ($request->has('thumbnail')) {
            Storage::delete($collection->thumbnail);
            $file = '/uploads/'.$request->file('thumbnail')->store('images', 'public');
        }

        $collection->update([
            ...$request->validated(),
            'fields' => $fields,
            'thumnail' => $file,
        ]);

        return back()->with('success', __('model.update', [
            'model' => __('model.collection'),
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
            'model' => __('model.collection'),
        ]));
    }
}
