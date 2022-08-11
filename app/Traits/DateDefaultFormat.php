<?php

namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;

trait DateDefaultFormat
{

  public function createdAt(): Attribute
  {
    return new Attribute(
      get: fn ($value) => Carbon::parse($value)->diffForHumans()
    );
  }
  public function updatedAt(): Attribute
  {
    return new Attribute(
      get: fn ($value) => Carbon::parse($value)->diffForHumans()
    );
  }
}
