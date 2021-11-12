import React,{useState} from 'react';
import Header from './Header';
function Addproduit() {
    const [nom,setNom]=useState("")
    const [file,setFile]=useState("")
    const [prix,setPrice]=useState("")
    const [description,setDescription]=useState("")
    async function ajt() {
        // let item={nom,file,prix,description};
        const formData= new FormData();
        formData.append('file',file);
        formData.append('prix',prix);
        formData.append('nom',nom);
        formData.append('description',description);

        let resul = await fetch("http://127.0.0.1:8000/api/ajouterproduit",{
            method:'POST',
            body:formData

        });
        alert("votre produit a ete sauvgarder")
        //resul=await resul.json()
        // localStorage.setItem("produit-info",JSON.stringify(resul))
    }
    return(
        <div>
             <Header />
             <br />
             <div className="col-sm-6 offset-sm-3">
             <input type="text" onChange={(e)=>setNom(e.target.value)} className="form-control" placeholder="Nom de Produit"/> <br />
             <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder="path de file"/> <br />
             <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="prix"/> <br />
             <input type="text"onChange={(e)=>setDescription(e.target.value)}  className="form-control" placeholder="description"/> <br />
            <button onClick={ajt} className="btn btn-primary">Ajouter le produit</button>
             </div>
        </div>
    )
    
}
export default Addproduit