<?php

namespace App\Http\Controllers\Main;

use App\Helpers\CollectionHelper;
use App\Helpers\ThroughPipeline;
use App\Http\Controllers\Controller;
use App\Http\QueryFilters\Sorting\SortCollection;
use App\Http\Resources\CollectionResource;
use App\Models\Collection;
use Inertia\Inertia;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $query = Collection::query()
      ->with('category', 'user')
      ->withCount('items')
      ->addSelect('collections.*');

        $pipe = ThroughPipeline::getPaginatePipe(
            $query,
            [SortCollection::class],
            paginate: 12
        );

        $pipe->getCollection()
      ->each(
          fn (Collection $collection) => (new CollectionHelper)->truncDesc($collection)
      );

        $collections = CollectionResource::collection($pipe);

        return Inertia::render('Main/Collections', compact('collections'));
    }
}
