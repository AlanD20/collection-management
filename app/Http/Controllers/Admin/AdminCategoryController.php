<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Filtering\FilterTagCategory;
use App\Http\QueryFilters\Sorting\SortTagCategory;
use App\Http\Requests\Admin\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Inertia\Inertia;

class AdminCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $query = Category::query();

        $pipe = ThroughPipeline::getPaginatePipe(
            $query,
            [
                SortTagCategory::class,
                FilterTagCategory::class,
            ],
            paginate: 7
        );

        $categories = CategoryResource::collection($pipe);

        return Inertia::render('Admin/Category/Dashboard', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Admin\CategoryRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(CategoryRequest $request)
    {
        Category::create($request->validated());

        return back()->with('success', __('model.create', [
            'model' => __('model.category'),
        ]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Inertia\Response
     */
    public function edit(Category $category)
    {
        $category = new CategoryResource($category);

        return Inertia::render('Admin/Category/Edit', \compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\CategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $category->update([
            'name' => $request->safe()->name,
        ]);

        return back()->with('success', __('model.update', [
            'model' => __('model.category'),
        ]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return back()->with('success', __('model.delete', [
            'model' => __('model.category'),
        ]));
    }
}
