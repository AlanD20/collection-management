<?php

namespace App\Models;

use App\Traits\DateDefaultFormat;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    use DateDefaultFormat;

    protected $table = 'comments';

    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'item_id',
        'item_user_id',
        'body',
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

    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }
}
