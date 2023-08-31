import React from "react";



export default function RegisterUs(props){
    
    
    return(
        <div className="container"> 
           <h1 className="mt-5">Registrate para disfrutar de la app</h1>
           <input className="form-control my-6" type="text" placeholder="Nombre" />
           <input className="form-control my-2" type="text" placeholder="Apellido" />
           <input className="form-control my-2" type="text" placeholder="Correo" />
            <input className="form-control my-2" type="password" placeholder="Contraseña" />
            <input className="form-control my-2" type="password" placeholder="Confirmar contraseña" />
            <div className="d-grid gap-2">
                <button className="btn btn-primary my-2">Enter</button>
            </div>
        </div>
    )
}