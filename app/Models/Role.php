<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
  use HasFactory;

  protected $table = 'roles';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'block',
    'admin'
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
}
