<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
  use HasFactory;

  protected $table = 'categories';
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

  public function collections()
  {
    return $this->belongsTo(Collection::class, 'category_id', 'id');
  }

  public function name(): Attribute
  {
    return new Attribute(
      set: fn ($value) => \strtolower($value)
    );
  }
}
