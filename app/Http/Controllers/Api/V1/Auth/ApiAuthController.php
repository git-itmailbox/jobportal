<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\Api\RegisterRequest;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ApiAuthController extends Controller
{
    /**
     * Register new user
     *
     * @param RegisterRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function register (RegisterRequest $request) {
        $data = $request->all();

        $data['password'] = Hash::make($data['password']);
        $data['remember_token'] = Str::random(10);
        $user = User::create($data);
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];
        return response($response, 200);
    }

    /**
     * Auth in system.
     *
     * @param LoginRequest $request
     * @return \
     * Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request)
    {
        if ((! auth()->attempt($request->only('email', 'password')))) {
            return response()->json(['result' => false, 'error' => 'Data entered incorrectly'], 401);
        }
        $user = auth()->user();


        $accessToken = Auth::user()->createToken('Access Token')->accessToken;

        return response()->json([
            'user' => $user->toArray(),
            'access_token' => $accessToken,
        ], 200);
    }
}
