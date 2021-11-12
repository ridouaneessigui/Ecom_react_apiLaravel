import React,{useEffect,useState} from 'react';
import { Table } from "react-bootstrap";
import Header from './Header';
function Listeproduits() {
    const [data,setData]=useState([]);
    useEffect(async () => {
        let result =await fetch("http://127.0.0.1:8000/api/list");
        result =  await result.json();
        setData(result)
    }, [])
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
                <td><img  style= {{width:100}} className="imghover" src={"http://localhost:8000/"+item.file_path }/></td>
            </tr>
        
            )}
  </tbody>
</Table>
        </div>
        </div>
    )
    
}
export default Listeproduits