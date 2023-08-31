import React from "react";
import {NavLink} from "react-router-dom";


export default function Landing(props){
    
    
    return(
        <div className="container"> 
            <h1 className="mt-5">Bienvenido a mi proyecto!!!</h1>
            <h3 className="mt-5">Ingresa:</h3>
            <input className="form-control my-2" type="text" placeholder="Correo" />
            <input className="form-control my-2" type="password" placeholder="Contraseña" />
            <div className="d-grid gap-2">
                <button className="btn btn-primary my-2">Enter</button>
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
        </div>
    )
}