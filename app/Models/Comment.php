<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
  use HasFactory;

  protected $table = 'comments';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'user_id',
    'item_id',
    'body'
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

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id', 'id');
  }
  public function item()
  {
    return $this->belongsTo(Item::class, 'item_id', 'id');
  }
}
