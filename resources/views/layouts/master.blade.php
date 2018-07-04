
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="../../favicon.ico">

        <title>Blog Template for Bootstrap</title>

        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">


        <!-- Custom styles for this template -->
        <link href="{{ asset('/public/css/blog.css') }}" rel="stylesheet">
</head>

<body>

@includeIf('layouts.nav')
<div class="blog-header">
        <div class="container">
                <h1 class="blog-title">The Bootstrap Blog</h1>
                <p class="lead blog-description">An example blog template built with Bootstrap.</p>
        </div>
</div>

<div class="container">

        <div class="row">

                <div class="col-sm-8 blog-main">
                @yield('content')
                </div>
                @includeIf('layouts.sidebar')


         </div><!-- /.row -->

</div><!-- /.container -->


@includeIf('layouts.footer')
</body>
</html>
