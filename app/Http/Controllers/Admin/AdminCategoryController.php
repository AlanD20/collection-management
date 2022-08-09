<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryRequest;
use App\Http\Resources\CategoryResource;

class AdminCategoryController extends Controller
{


  public function index()
  {
    $query = Category::paginate(7);
    $categories = CategoryResource::collection($query);

    return Inertia::render('Admin/Category/Dashboard', compact('categories'));
  }

  public function create()
  {

    return Inertia::render('Admin/Category/Create');
  }

  public function store(CategoryRequest $request)
  {
    Category::create($request->validated());

    return back()->with('status', __('admin.category.create'));
  }

  public function edit(Request $request, int $id)
  {
    $query = Category::findOrFail($id);
    $category = new CategoryResource($query);

    return Inertia::render('Admin/Category/Edit', \compact('category'));
  }

  public function update(CategoryRequest $request, int $id)
  {

    Category::findOrFail($id)->update([
      'name' => $request->safe()->name
    ]);

    return back()->with('status', __('admin.category.update'));
  }

  public function destroy(Request $request, int $id)
  {
    Category::findOrFail($id)->delete();

    return back()->with('status', __('admin.category.delete'));
  }
}
