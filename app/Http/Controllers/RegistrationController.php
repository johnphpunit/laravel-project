<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function create()
    {
        return view('registration.create');
    }

    public function store()
    {
        //validate the form fields

        $this->validate(request(),[
            'name' =>'required',
            'email' => 'required|email',
            'password' =>'required|confirmed'
        ]);

        //create a user
        $user = User::create(request(['name','email','password']));

        //Sign in User
        auth()->login($user);

        //redirect to Home Page

        return redirect('/home');

        //return redirect()->home();
    }
}
