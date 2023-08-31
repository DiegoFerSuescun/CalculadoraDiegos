import React, { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import { useAuth } from "../Context/authContext";


export default function Landing(props){
    
    const auth = useAuth();
    const history = useNavigate();
    const [ emailLog, setEmaillog ] = useState('');
    const [ passLog, setPasslog ] = useState(' ');

    const handleLogin = (e) =>{
        e.preventDefault();
        const reslog = auth.loginEmail(emailLog, passLog);
        if(reslog){
            history('/calculadora')
        }
    };
    
    return(
        <div className="container"> 
            <h1 className="mt-5">Bienvenido a mi proyecto!!!</h1>
            <h3 className="mt-5">Ingresa:</h3>
            <input className="form-control my-2" type="text" placeholder="Correo" onChange={(e) => setEmaillog(e.target.value)}/>
            <input className="form-control my-2" type="password" placeholder="Contraseña" onChange={(e) => setPasslog(e.target.value)} />
            <div className="d-grid gap-2">
                <button className="btn btn-primary my-2" onClick={(e)=>handleLogin(e)}>Entrar</button>
            </div>
            <div>
                <p>Olvidaste tu contraseña</p>
                <button className="btn btn-link">Pulsa acá para reiniciar tu contraseña</button>
            </div>
            <div className="mt-4">
                <button className="btn btn-danger">
                    <i className="fab fa-google me-2"></i>
                </button>
            </div>
            <div className="mt-4">
            <NavLink to = "/reg" className="btn btn-link">Si deseas registrarte pulsa acá</NavLink>
            </div>
        </div>
    )
}