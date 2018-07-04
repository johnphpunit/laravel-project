@extends('layouts.master')



@section('content')

    <div class="col-sm-8">
        <h1>Sign In</h1>

        <fieldset>
                 <form method="POST" action="{{url('/login')}}">
                    {{csrf_field()}}


                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>


                    <div class="form-group">
                       <button  type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>

                @include('layouts.errors')
        </fieldset>
    </div>

@endsection