<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Item extends Model
{
  use HasFactory, DateDefaultFormat;

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
    return $this->belongsToMany(Tag::class, 'item_tag', 'item_id', 'tag_id');
  }
}
