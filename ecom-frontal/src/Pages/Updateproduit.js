import React,{useState,useEffect} from 'react';
import Header from './Header';
import {withRouter} from 'react-router-dom'

function Updateproduit(props) {
    const [data,setData]=useState([]);
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/produit/"+props.match.params.id);
        result = await result.json();
        setData(result)
    })
    return(
        <div>
            <Header />
          <div className="col-sm-6 offset-sm-3">
             <input type="text" defaultValue={data.nom}/> <br />
             <input type="text" defaultValue={data.prix}/> <br />
             <input type="text" defaultValue={data.description}/> <br />
             <input type="file" defaultValue={data.file_path}/> <br />
             <img style= {{width:100}} src={"hhttp://localhost:8000/"+data.file_path}/>
             <button>modifier</button>
         </div>
        </div>
    )
    
}
export default withRouter(Updateproduit)