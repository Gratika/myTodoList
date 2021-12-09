<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoItem extends Model
{
    protected $fillable=['item_text', 'is_completed', 'is_deleted'];
    /**
     * @var mixed
     */

    use HasFactory;
}
