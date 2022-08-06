<?php

namespace App\View\Components\Status;

use Illuminate\View\Component;

class Alert extends Component
{
  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(public $type, public $message, public $class = '')
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
    return view('components.status.alert');
  }
}
