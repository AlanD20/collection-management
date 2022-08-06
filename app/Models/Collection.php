<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
  use HasFactory;

  protected $table = 'collections';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'name',
    'description',
    'category',
    'thumbnail',
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
    return $this->hasMany(Item::class, 'collection_id', 'id');
  }
  public function category()
  {
    return $this->hasOne(Category::class, 'collection_id', 'id');
  }
}
