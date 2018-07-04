
@extends('layouts.master')




@section('content')

    <div class="col-sm-8 blog-main">
        <h1>{{$post->title}}</h1><br>

        <p>{{$post->body}}</p>
    </div>

    <hr>

    <div class="container">
        <ul class="list-group">
            @foreach($post->comments as $comment)

                <li class="list-group-item"> <strong>{{$comment->created_at->diffForHumans()}}:</strong>&nbsp;{{$comment->body}}</li>
            @endforeach
        </ul>

        <hr>
        <div class="card">
            <div class="card-block">

                <form method="POST" action="{{url('/posts/'.$post->id.'/comments')}}">
                    {{csrf_field()}}
                    <div class="form-group">

                        <textarea class="form-control"  rows="3"  name="body" placeholder="Your Comments Here." required></textarea>

                    </div>

                    <div class="form-group">
                    <button type="submit" class="btn btn-primary">Add Comment</button>
                    </div>

                </form>
            </div>
        </div>

    </div>

@endsection


@section('footer')

    {{-- <script src="/js/file.js"></script>--}}

@endsection