# Ecommerce REssigui1
React js
add bootstrap cdn css + react bootstrap
react-router-dom
  ##  React 
    -  Ajouter des pages
       - addproduit
       - header
       - login
       - register
       - updateproduits
 ##  Google font
     Mochiy Pop P One
 ##  ROUTER-dom
 ##  Laravel
    - DB Ecom
    - php artisan make:controller UserController 
    - routes/api.php
       - use App\Http\Controllers\UserController
       - Route::post('register',[UserController::class,'register']);
##    Postman
     -  http://127.0.0.1:8000/api/register
# Parte 2
 ##  Laravel 
    - Controller/UserController.php
      - use App\Models\User;
      - use Illuminate\Support\Facades\Hash;
      -  function register(Request $req)
        {
        $user = new User;
        $user->name=$req->input('name');
        $user->email=$req->input('email');
        $user->password=Hash::make($req->input('password'));
        $user->save();
        return $user;

        }
##    Postman
     -  http://127.0.0.1:8000/api/register
     -  
