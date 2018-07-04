<?php

namespace App\Http\Controllers;

use App\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
class PostsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index','show');
    }

    public function index()
    {
       // $posts = Post::latest()->get();

       // $posts = Post::latest();


      /*  if($month = request('month')){
            $posts->whereMonth('created_at',Carbon::parse($month)->month); // Carbon::parse($month)->year or day
        }

        if($year = request('year')){
            $posts->whereYear('created_at',$year);
        }

        $posts =  $posts->get(); */

        //using Query Scopes technique refer Post.php model file
        $posts = Post::latest()->filters(request(['month','year']))->get();

       // $archives =  Post::archives(); // refer archives static method within Post.php model
        // next step moved this above code to service provider

       // return view('posts.index',compact('posts','archives')); //View Composer in AppServiceProvider.php is used to display archives in all pages
        return view('posts.index',compact('posts'));
    }



    public function show(Post $post)
    {

        return view('posts.show', compact('post'));
    }

    public function create()
    {

        return view('posts.create');
    }

    public function store()
    {
      /*
       $this->validate(request(),[
           'title' =>'required|min:6',
           'body' =>'required|min:10'
       ]);*/


       //Post::create(request(['title','body']));

      /*  Post::create([
            'title' => request('title'),
            'body' => request('body'),
            //'user_id' => auth()->user()->id, // to provide user_id
            'user_id' => auth()->id(),
            ]);*/

        auth()->user()->publish(
            new Post(request(['title','body'])) // to provide user_id
        );

        return redirect('/');

        //return view('posts.create');
    }

    public function edit($id)
    {
           $post = Post::findOrFail($id);

           return view('posts.edit',compact('post'));
    }

    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $input = $request->all();
        $post->update($input);
    }

    public function delete($id)
    {
        $post= Post::findOrFail($id);

        $post->delete();

        //Post::where('id', '=', $id)->delete();

        return redirect('admin/users');
    }
}
