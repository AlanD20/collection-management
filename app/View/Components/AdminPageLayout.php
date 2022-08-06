<?php

namespace App\View\Components;

use Illuminate\View\Component;

class AdminPageLayout extends Component
{

  public function __construct(public $type = '')
  {
    //
  }

  /**
   * Get the view / contents that represents the component.
   *
   * @return \Illuminate\View\View
   */
  public function render()
  {
    return view('layouts.admin-page');
  }
}
