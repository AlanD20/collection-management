<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable, DateDefaultFormat;

  protected $table = 'users';
  protected $primaryKey = 'id';
  protected $with = ['detail'];

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'username',
    'email',
    'password',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [];

  public function detail()
  {
    return $this->hasOne(Detail::class, 'user_id', 'id');
  }
  public function collections()
  {
    return $this->hasMany(Collection::class, 'user_id', 'id');
  }
  public function likes()
  {
    return $this->hasMany(Like::class, 'user_id', 'id');
  }
  public function comments()
  {
    return $this->hasMany(Comment::class, 'user_id', 'id');
  }
  public function getRouteKeyName()
  {
    return 'username';
  }

  public function name(): Attribute
  {
    return new Attribute(
      set: fn ($value) => \strtolower($value)
    );
  }
  public function username(): Attribute
  {
    return new Attribute(
      set: fn ($value) => \strtolower($value)
    );
  }
  public function email(): Attribute
  {
    return new Attribute(
      set: fn ($value) => \strtolower($value)
    );
  }
}
