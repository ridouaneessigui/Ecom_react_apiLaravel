import Header from './Header'
import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
function Login() {
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
        history.push("/ajouter")
    }
    }, [])
    async function login() {
        let item={password,email};
        let resul = await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify(item)

        })
        resul=await resul.json()
        localStorage.setItem("user-info",JSON.stringify(resul))
        history.push("/ajouter")

    }
    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="E-mail"/>
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Mot de Passe"/>
            <br />
            <button onClick={login} className="btn btn-primary">Login</button>
         </div>
        </div>
    )
    
}
export default Login