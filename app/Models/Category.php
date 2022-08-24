<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
    ];

    // Date conversion
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    public function collections()
    {
        return $this->belongsTo(Collection::class, 'id', 'category_id');
    }

    public function name(): Attribute
    {
        return new Attribute(
            set: fn ($value) => \strtolower($value)
        );
    }
}
