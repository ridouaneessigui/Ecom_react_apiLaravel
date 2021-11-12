<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produit;

class ProduitController extends Controller
{
    //
    function ajouterproduit(Request $req)
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
    function list()
    {
        return Produit::all();
    }

}
