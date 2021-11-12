import React,{useEffect,useState} from 'react';
import { Table } from "react-bootstrap";
import Header from './Header';
import { Link } from "react-router-dom";
function Listeproduits() {
    const [data,setData]=useState([]);
    useEffect( () => {
        getData();
    }, [])
    async function supoperation(id) {
        let reul= await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:'DELETE'
        });
        reul=await reul.json();
        getData();
    }
    async function getData() {
        let result =await fetch("http://127.0.0.1:8000/api/list");
        result =  await result.json();
        setData(result)
    }

    async function mod(id) {
        let reul= await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:'DELETE'
        });
        reul=await reul.json();
        getData();
    }
    return(
        <div>
        <Header />
        <div className="col-sm-6 offset-sm-3">
             <br />
             <Table striped bordered hover>
         <thead>
          <tr>
      <th>ID</th>
      <th>Nom de Produit</th>
      <th>Prix</th>
      <th>Description</th>
      <th>Images</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
        {
            data.map((item)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.prix}</td>
                <td>{item.description}</td>
                <td ><img  style= {{width:100}} className="" src={"http://localhost:8000/"+item.file_path }/></td>
                <td><span onClick={()=>supoperation(item.id)} className="sup">Supprimer</span> </td>
                <td>
                <Link to={"/Modifier/"+item.id}>
                <span  className="mod">Modifier</span>
                </Link></td>
            </tr>
        
            )}
  </tbody>
</Table>
        </div>
        </div>
    )
    
}
export default Listeproduits