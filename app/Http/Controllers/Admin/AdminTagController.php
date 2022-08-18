<?php

namespace App\Http\Controllers\Admin;

use App\Models\Tag;
use Inertia\Inertia;
use App\Helpers\ThroughPipeline;
use App\Http\Resources\TagResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TagRequest;
use App\Http\QueryFilters\Sorting\SortTagCategory;
use App\Http\QueryFilters\Filtering\FilterTagCategory;

class AdminTagController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Inertia\Response
   */
  public function index()
  {
    $query = Tag::query();

    $pipe = ThroughPipeline::getPaginatePipe(
      $query,
      [
        SortTagCategory::class,
        FilterTagCategory::class
      ],
      paginate: 7
    );

    $tags = TagResource::collection($pipe);

    return Inertia::render('Admin/Tag/Dashboard', compact('tags'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Inertia\Response
   */
  public function create()
  {
    return Inertia::render('Admin/Tag/Create');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\TagRequest  $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function store(TagRequest $request)
  {
    Tag::create($request->validated());

    return back()->with('success', __('model.create', [
      'model' => 'Tag'
    ]));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Tag  $tag
   * @return \Inertia\Response
   */
  public function edit(Tag $tag)
  {
    $tag = new TagResource($tag);

    return Inertia::render('Admin/Tag/Edit', \compact('tag'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\TagRequest  $request
   * @param  \App\Models\Tag  $tag
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update(TagRequest $request, Tag $tag)
  {
    $tag->update([
      'name' => $request->safe()->name
    ]);

    return back()->with('success', __('model.update', [
      'model' => 'Tag'
    ]));
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Tag  $tag
   * @return \Illuminate\Http\RedirectResponse
   */
  public function destroy(Tag $tag)
  {
    $tag->items()->detach();
    $tag->delete();

    return back()->with('success', __('model.delete', [
      'model' => 'Category'
    ]));
  }
}
