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
 ## react 
    - Local storage set et get item 
# Parte 3 
 ## Laravel
   - add bd produits manualle local host
   - php artisan make:controller ProduitController
   - php artisan make:Model Produit
   - API -> Route::post('ajouterproduit',[ProduitController::class,'ajouterproduit']);
   -     function ajouterproduit(Request $req)
    {
        $produit=new Produit;
        $produit->nom=$req->input('nom');
        $produit->prix=$req->input('prix');
        $produit->file_path=$req->file('file')->store('produits');
        $produit->description=$req->input('description');
       // return $req->file('file')->store('produits');
       $produit->save();
       return $produit;
    }

    - function list()
    {
        return Produit::all();
    }

    - AP -> Route::get('list',[ProduitController::class,'list']);
    - config\filesystems.php  -> 'links' => [
        public_path('Produits') => storage_path('app/Produits'),
    ],
    - php artisan storage:link
    - delete product
    - Route::delete('delete/{id}',[ProduitController::class,'delete']);
## react 
 - modifier ajouterproduit
 - ajouter list produits
## partie 4