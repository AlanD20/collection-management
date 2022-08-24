<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;
    use DateDefaultFormat;

    protected $table = 'details';

    protected $primaryKey = 'id';

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

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function locale(): Attribute
    {
        return new Attribute(
            set: fn ($value) => \strtolower($value)
        );
    }

    public function theme(): Attribute
    {
        return new Attribute(
            set: fn ($value) => \strtolower($value)
        );
    }
}
