<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{

    protected $fillable =['body','post_id','user_id'];

    public function post()
    {
        return $this->BelongsTo(Post::class);
    }

    public function user()
    {
        return $this->BelongsTo(User::class);
    }
}
