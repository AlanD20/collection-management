<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
  use HasFactory;

  protected $table = 'items';
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

  public function collection()
  {
    return $this->belongsTo(Item::class, 'collection_id', 'id');
  }
  public function likes()
  {
    return $this->hasMany(Like::class, 'item_id', 'id');
  }
  public function comments()
  {
    return $this->hasMany(Comment::class, 'item_id', 'id');
  }
  public function tags()
  {
    return $this->hasMany(Tag::class, 'item_id', 'id');
  }
}
