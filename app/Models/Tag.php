<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends Model
{
  use HasFactory, DateDefaultFormat;

  protected $table = 'tags';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'name'
  ];

  // Date conversion
  protected $dates = [
    'created_at',
    'updated_at',
  ];

  // Hidden from query
  protected $hidden = [];

  // Default values
  protected $attributes = [];

  public function items()
  {
    return $this->belongsToMany(Item::class);
  }
}
