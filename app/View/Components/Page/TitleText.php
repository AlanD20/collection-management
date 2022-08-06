<?php

namespace App\View\Components\Page;

use Illuminate\View\Component;

class TitleText extends Component
{
  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(public $class = '')
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
    return view('components.page.title-text');
  }
}
