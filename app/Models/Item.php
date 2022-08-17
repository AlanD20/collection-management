<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Item extends Model
{
  use HasFactory, DateDefaultFormat;

  protected $table = 'items';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'name',
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

  public function collection()
  {
    return $this->belongsTo(Collection::class, 'collection_id', 'id');
  }
  public function likes()
  {
    return $this->belongsToMany(User::class, 'likes', 'item_id', 'user_id');
  }
  public function comments()
  {
    return $this->hasMany(Comment::class, 'item_id', 'id');
  }
  public function tags()
  {
    return $this->belongsToMany(Tag::class, 'item_tag', 'item_id', 'tag_id');
  }

  public function name(): Attribute
  {
    return new Attribute(
      set: fn ($value) => \strtolower($value)
    );
  }
}
