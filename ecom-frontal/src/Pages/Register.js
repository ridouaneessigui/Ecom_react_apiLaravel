import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
function Register() {
   
    const [nom_complet,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
        history.push("/ajouter")
    }
    }, [])
    async function signUp() {
        let item={nom_complet,password,email};
        let resul = await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept":'application/json'
            }

        })
        resul=await resul.json()
        localStorage.setItem("user-info",JSON.stringify(resul))
        history.push("/ajouter")
    }
    return(
        <section>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <br />
            <h1>Registrer</h1>
            <br />
            <input type="text" value={nom_complet} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name Complete"/>
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="E-mail"/>
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Mot de Passe"/>
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </section>
    )   
}
export default Register