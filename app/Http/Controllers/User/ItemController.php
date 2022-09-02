<?php

namespace App\Http\Controllers\User;

use App\Helpers\ItemHelper;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Filtering\FilterItem;
use App\Http\QueryFilters\Sorting\SortItem;
use App\Http\Requests\User\ItemRequest;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\ItemResource;
use App\Http\Resources\TagResource;
use App\Http\Resources\UserResource;
use App\Models\Collection;
use App\Models\Item;
use App\Models\Tag;
use App\Models\User;
use Inertia\Inertia;

class ItemController extends Controller
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
     * @param  string  $uname
     * @param  int  $collection
     * @return \Inertia\Response
     */
    public function index(string $uname, int $collection)
    {
        $uname = User::where('username', $uname)->firstOrFail();

        $queryCollection = Collection::query()
            ->with('category')
            ->where('user_id', $uname->id)
            ->findOrFail($collection);

        $queryItems = Item::query()
            ->with('tags')
            ->withCount('likes', 'comments')
            ->where('collection_id', $collection);

        $pipeItems = ThroughPipeline::getPaginatePipe(
            $queryItems,
            [
                SortItem::class,
                FilterItem::class,
            ],
            paginate: 7
        );

        $likes = (new ItemHelper)->getUserLikes($pipeItems->getCollection());

        $items = ItemResource::collection($pipeItems);
        $collection = new CollectionResource($queryCollection);

        return Inertia::render('User/Item/Dashboard', compact('collection', 'items', 'likes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  string  $uname
     * @param  int  $collection
     * @return \Inertia\Response
     */
    public function create(string $uname, int $collection)
    {
        $collection = Collection::query()
            ->whereHas('user', fn ($q) => $q->where('username', $uname))
            ->findOrFail($collection);

        $tags = TagResource::collection(Tag::all());

        return Inertia::render('User/Item/Create', compact('collection', 'tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\User\ItemRequest  $request
     * @param  string  $uname
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ItemRequest $request, string $uname, Collection $collection)
    {
        $this->authorize('view', $collection);

        $fields = (new ItemHelper)->filterFields($request->safe()->fields);

        $item = $collection->items()->create([
            ...$request->validated(),
            'fields' => $fields,
        ]);

        $item->tags()->attach($request->safe()->tags);

        return redirect()
            ->route('u.collections.items.index', [
                'uname' => $uname,
                'collection' => $collection->id,
            ])
            ->with('success', __('model.create', [
                'model' => 'Item',
            ]));
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $uname
     * @param  int  $collection
     * @param  int  $item
     * @return \Inertia\Response
     */
    public function show(string $uname, int $collection, int $item)
    {
        $uname = User::where('username', $uname)->firstOrFail();

        $queryCollection = Collection::query()
            ->with('category')
            ->where('user_id', $uname->id)
            ->findOrFail($collection);

        $queryItem = Item::query()
            ->with('tags', 'comments', 'comments.user')
            ->withCount('likes', 'comments')
            ->where('collection_id', $collection)
            ->findOrFail($item);

        $likes = (new ItemHelper)->getUserLikes($queryItem);
        $liked = collect($likes)->contains($queryItem->id);

        $item = new ItemResource($queryItem);
        $collection = new CollectionResource($queryCollection);
        $user = new UserResource($uname);

        return Inertia::render('User/Item/Show', compact('collection', 'item', 'liked', 'user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $uname
     * @param  int  $collection
     * @param  int  $item
     * @return \Inertia\Response
     */
    public function edit(string $uname, int $collection, int $item)
    {
        $collection = Collection::query()
            ->whereHas('user', fn ($q) => $q->where('username', $uname))
            ->findOrFail($collection);

        $this->authorize('view', $collection);

        $item = Item::query()
            ->with('tags')
            ->where('collection_id', $collection->id)
            ->firstOrFail();

        $tags = TagResource::collection(Tag::all());

        $item = new ItemResource($item);
        $collection = new CollectionResource($collection);

        return Inertia::render('User/Item/Edit', \compact('collection', 'item', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\User\ItemRequest  $request
     * @param  string  $uname
     * @param  \App\Models\Collection  $collection
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ItemRequest $request, string $uname, Collection $collection, Item $item)
    {
        $this->authorize('update', $collection);

        $fields = (new ItemHelper)->filterFields($request->safe()->fields);

        $item->update([
            ...$request->validated(),
            'fields' => $fields,
        ]);
        $item->tags()->sync($request->safe()->tags);

        return back()->with('success', __('model.update', [
            'model' => 'Item',
        ]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $uname
     * @param  \App\Models\Collection  $collection
     * @param  \App\Models\Item  $item
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(string $uname, Collection $collection, Item $item)
    {
        $this->authorize('delete', $collection);

        $item->delete();

        return back()->with('success', __('model.delete', [
            'model' => 'Item',
        ]));
    }

    /**
     * Toggles like or unlike an item for current user..
     *
     * @param  string  $uname
     * @param  int  $collection
     * @param  int  $item
     * @return \Illuminate\Http\RedirectResponse
     */
    public function like(string $uname, int $collection, int $item)
    {
        $arr = request()->user()->likes()->toggle($item)['attached'];
        $message = count($arr) > 0 ? 'like' : 'unlike';

        return back()->with('success', __("model.{$message}", [
            'model' => 'Item',
        ]));
    }
}
