<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use App\Comment;
class Post extends Model
{
    //protected $timestamps = true;
/*
    protected $fillable = [
        'title', 'body','user_id'
    ];*/

    protected $guarded = ['id'];

    public function comments() 
    {
        return $this->hasMany(Comment::class);
    }

    public function user()// $comment->user->name // can be done or $comment->post->user
    {
        return $this->BelongsTo(User::class);
    }

    public function addComment($body)
    {
       /* Comment::create([
            'body'=> $body,
            'post_id'=> $this->id // instead of post->id, since we are in post model itself
        ]);*/

       //$this->comments()->create(['body'=>$body]);
       $this->comments()->create(compact('body'));
    }
    
    //using Query Scopes technique
    public function scopeFilters($query, $filters)
    {
        //$posts = Post::latest();

        if($month = $filters['month']){
            $query->whereMonth('created_at',Carbon::parse($month)->month); // Carbon::parse($month)->year or day
        }

        if($year = $filters['year']){
            $query->whereYear('created_at',$year);
        }

       // $posts =  $this->get();
    }

    public static function archives()
    {
        return static::selectRaw('year(created_at) year, monthname(created_at) month, count(*) published')
        ->groupBy('year','month')
        //->get()->toArray();
        ->get();
    }
}
