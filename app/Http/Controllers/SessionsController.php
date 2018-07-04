<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('destroy');
    }

    public function create()
    {
            return view('sessions.create');
    }

    public function store()
    {
        // attempt to authenticate the user
        //auth()->attempt(request(['email','password']));

        //if not authenticated

        if (!auth()->attempt(request(['email','password']))){

            return back()->withErrors('Invalid Credentials. Please try again..');
        }

        //
        //Redirect to home
        //return redirect()->home();
        return redirect('/home');
    }

    public function destroy()
    {
        auth()->logout();

        return redirect('/home');

       // return redirect()->home();
    }
}
