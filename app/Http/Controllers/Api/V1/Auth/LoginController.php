<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;

class LoginController extends Controller
{
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
        $accessToken = $user->createToken('Laravel Password Grant Client')->accessToken;

        return response()->json([
            'user' => $user->toArray(),
            'access_token' => $accessToken,
        ], 200);
    }
}
