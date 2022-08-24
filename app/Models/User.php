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
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use DateDefaultFormat;

    protected $table = 'users';

    protected $primaryKey = 'id';

    protected $with = ['detail'];

    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'provider',
        'provider_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public static function boot()
    {
        parent::boot();
        static::created(function (User $user) {
            $user->detail()->create([]);
        });
    }

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
        return $this->belongsToMany(Item::class, 'likes', 'user_id', 'item_id');
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
