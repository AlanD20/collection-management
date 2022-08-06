<?php

namespace App\View\Components\Form;

use Illuminate\View\Component;

class Input extends Component
{

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(public $name, public $label, public $type = 'text', public $class = '')
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
    return view('components.form.input');
  }
}
