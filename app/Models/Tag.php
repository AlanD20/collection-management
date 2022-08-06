<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
  use HasFactory;

  protected $table = 'tags';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    //
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
