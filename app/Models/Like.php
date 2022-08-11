<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Like extends Model
{
  use HasFactory, DateDefaultFormat;

  protected $table = 'likes';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'user_id',
    'item_id',
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
