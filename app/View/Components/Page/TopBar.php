<?php

namespace App\View\Components\Page;

use Illuminate\View\Component;

class TopBar extends Component
{
  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(public $route)
  {
    //
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('components.page.top-bar');
  }
}
