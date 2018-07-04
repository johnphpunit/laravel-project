
@extends('layouts.master')




@section('content')

    <div class="container">
        <div class="row">
            <div class="col-sm-8 blog-main">
            <h1> Publish a Post</h1>

                <hr>

                    {!! Form::open(['method' => 'post','url' => '/posts',]) !!}
                    {!! csrf_field() !!}
                    <div class="form-group">

                        {!! Form::label('title','Title') !!}
                        {!! Form::text('title','',['class'=>'form-control','id'=>'title']) !!}

                    </div>
                    <div class="form-group">
                        {!! Form::label('body','Body') !!}

                        {!! Form::textarea('body','',['name'=>'body','class'=>'form-control','id'=>'body','cols'=>'20','rows'=>'5']) !!}

                    </div>

                    {!! Form::submit('Publish',['class'=>'btn btn-primary']) !!}

                {!! Form::close() !!}

                @if(count($errors))
                <div class="alert alert-danger">
                    <ul>
                         @foreach($errors->all() as $error)

                             <li>{{$error}}</li>

                         @endforeach
                    </ul>
                </div>
                @endif
            </div>

@endsection


@section('footer')

    {{-- <script src="/js/file.js"></script>--}}

@endsection