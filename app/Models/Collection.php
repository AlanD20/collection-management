<?php

namespace App\Models;

use App\Traits\FormatDefaults;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Collection extends Model
{
  use HasFactory, FormatDefaults;

  protected $table = 'collections';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'name',
    'description',
    'category_id',
    'thumbnail',
    'fields'
  ];

  // Date conversion
  protected $dates = [
    'created_at',
    'updated_at',
  ];

  // Hidden from query
  protected $hidden = [];

  // Casts
  protected $casts = [
    'fields' => 'array'
  ];

  // Default values
  protected $attributes = [];

  public function items()
  {
    return $this->hasMany(Item::class, 'collection_id', 'id');
  }
  public function category()
  {
    return $this->hasOne(Category::class, 'id', 'category_id');
  }
}
