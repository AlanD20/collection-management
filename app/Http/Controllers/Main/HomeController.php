<?php

namespace App\Http\Controllers\Main;

use App\Helpers\HomeHelper;
use App\Helpers\QueryHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $homeHelper = new HomeHelper;
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
            'chr' => 3,
        ]));
        }
        $query = new QueryHelper;

        $tags = $query->tags();
        $users = $query->users();
        $items = $query->items();
        $comments = $query->comments();
        $categories = $query->categories();
        $collections = $query->collections();

        return Inertia::render('Main/SearchResult', compact(
            'tags',
            'users',
            'items',
            'comments',
            'categories',
            'collections',
        ));
    }
}
