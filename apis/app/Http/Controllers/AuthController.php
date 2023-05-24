<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\Rol;
use App\Models\User;
use App\Models\UsersRol;

class AuthController extends Controller
{
    public function registrarme(Request $request){
        
        $u = new User([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  =>  Hash::make('password'),            
        ]);
        
        $u->save();

        $u_r = new UsersRol([
            'user_id' => $u->id,
            'rol_id' => $request->rol_id
        ]);
        $u_r->save();

        return response()->json([
            'users' => $u
        ],200);
    }

    public function store(Request $request){


        $user= User::where('email',$request->email)->orWhere('cedula',$request->cedula)->exists();

        if($user){
            return response()->json([
                'message'=>'Usuario ya esta registrado',
                'estado' => 'register'
            ], 500);
        }

        // En el caso de ser referido, vamos a verificar que el email existe 
        if($request->isReferido){
            
            $quien_lo_invito = User::where('email',$request->referido)->first();

            if(!$quien_lo_invito){
                return response()->json([
                    'message'=>'El usuario referido no existe',
                    'estado' => 'referido'
                ], 500);
            }
        }

        $user = new User([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
            'rol_id'   => 2,
            'remember_token' => Str::random(10),
            'cedula' => $request->cedula,
            'tipo' => $request->tipo,
        ]);
        
        $user->save();

        // Configuracion del usuarios
        
        $config = new UserConfig([
            'user_id'   => $user->id,
            'moneda_id' => $request->moneda_id,
            'phone'     => $request->phone,
            'ciudade_id' => $request->estado_id           
        ]);

        $config->save();

        // Caso de los referidos 

        if($request->isReferido){

            $referido = Referido::orderby('id','desc')->first();
            
            $r = new ReferidoUser([
                'isRegistrado'  => 1,                
                'referido_id'   => $referido->id,
                'invitado'      => $user->id,
                'referido'      => $quien_lo_invito->id,
            ]);
            $r->save();
        }


        return response()->json([
            'user'=>$user,
            'config' => $config
        ],200);
    }

    public function login(Request $request){
        
        $request->validate([
            'email'       => 'required',
            'password'    => 'required|string',
            'remember_me' => 'boolean',
        ]);
        
        $credentials = request(['email', 'password']);   

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        
        $user = $request->user();    

        try {
             
            $tokenResult = $user->createToken('Personal Access Token');

            $token = $tokenResult->token;
            
            if ($request->remember_me) {
                $token->expires_at = Carbon::now()->addWeeks(1);
            }
            
            $token->save();
            
            return response()->json([
                'access_token' => $tokenResult->accessToken,
                'token_type'   => 'Bearer',
                'expires_at'   => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
            ],201);  

        } catch (\Exception $e) {            
            Log::error('Ha ocurrido un error en AuthController: '.$e->getMessage().', Linea: '.$e->getLine());
            return [$e->getMessage(), $e->getLine()];
            // return response()->json([
            //     'message' => 'Ha ocurrido un error.',
            // ], 500);
        }          
    }

    public function logout(Request $request)
    {
        if($request->user() != null){
            $resp = $request->user()->token()->revoke();
            return response()->json(['message' => 'Cerrando Session'],200);
        }else{            
            return response()->json(['message' => 'Cerrando Session'],200);
        }        
    }

    public function user(Request $request){            
        $user = $request->user();        
        return response()->json($user);
    }
}
