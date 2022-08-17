<?php

namespace App\Http\Controllers\Main;

use Inertia\Inertia;
use App\Models\Collection;
use App\Models\{User, Item};
use Illuminate\Http\Request;
use App\Helpers\ThroughPipeline;
use App\Helpers\CollectionHelper;
use App\Helpers\HomeHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\{UserResource, ItemResource};
use App\Http\QueryFilters\Filtering\{
  FilterItem,
  FilterComment,
  FilterItemSearch,
  FilterTagCategory
};


class HomeController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Inertia\Response
   */
  public function index()
  {
    $homeHelper = new HomeHelper();
    $latestCollections = $homeHelper->getLatestCollections();
    $largestCollections = $homeHelper->getLargestCollections();
    $latestItems = $homeHelper->getLatestItems();
    $latestUsers = $homeHelper->getLatestUsers();


    return Inertia::render('Home', compact('latestCollections', 'latestItems', 'latestUsers', 'largestCollections'));
  }

  /**
   * Display the result resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function search(Request $request)
  {
    if (\strlen($request->query('query')) < 3) {
      return redirect()
        ->route('main.index')
        ->with('error', __('main.min_search', [
          'chr' => 3
        ]));
    }

    $items = (new HomeHelper())->queryItems();
    $users = (new HomeHelper())->queryUsers();

    return Inertia::render('Main/SearchResult', compact('items', 'users'));
  }
}
