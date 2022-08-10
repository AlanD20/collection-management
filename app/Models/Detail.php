<?php

namespace App\Models;

use App\Traits\FormatDefaults;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Detail extends Model
{
  use HasFactory, FormatDefaults;

  protected $table = 'details';
  protected $primaryKey = 'id';
  protected $with = [];

  protected $fillable = [
    'block',
    'admin',
    'theme',
    'locale',
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
