<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    use DateDefaultFormat;

    protected $table = 'items';

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'fields',
    ];

    // Date conversion
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    // Casts
    protected $casts = [
        'fields' => 'array',
    ];

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

    public function fields(): Attribute
    {
        return new Attribute(
            get: fn ($fields) => collect(\json_decode($fields, true))
                ->transform(
                    fn ($field) => $field['type'] === 'datetime' ?
                        [
                            ...$field,
                            'value' => \Carbon\Carbon::parse($field['value'])
                                ->format('m-d-Y'),
                        ] : $field
                )->all()
        );
    }
}
