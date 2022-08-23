<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    use DateDefaultFormat;

    protected $table = 'tags';

    protected $primaryKey = 'id';

    protected $with = [];

    protected $fillable = [
        'name',
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
        return $this->belongsToMany(Item::class, 'item_tag', 'tag_id', 'item_id');
    }

    public function name(): Attribute
    {
        return new Attribute(
            set: fn ($value) => \strtolower($value)
        );
    }
}
