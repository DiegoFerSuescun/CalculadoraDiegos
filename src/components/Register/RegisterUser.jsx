import React, { useState } from "react";
import { useAuth } from "../Context/authContext";


export default function RegisterUs(props){

    const auth = useAuth(); //Se inicializa el objeto que contiene todas nuestras funciones en la variable Auth
    const [ emailReg, setEmailreg ] = useState('');
    const [ passReg, setPassreg ] = useState('');

    const handleregister = (e) =>{
        e.preventDefault();
        const res = auth.registerEmail(emailReg, passReg);
        if(res){
            location.reload();
        }
    };
    
    
    return(
        <div className="container"> 
           <h1 className="mt-5">Registrate para disfrutar de la app</h1>
           <input className="form-control my-6" type="text" placeholder="Nombre" />
           <input className="form-control my-2" type="text" placeholder="Apellido" />
           <input className="form-control my-2" type="text" placeholder="Correo" onChange={(e)=>setEmailreg(e.target.value)} />
            <input className="form-control my-2" type="password" placeholder="Contraseña" onChange={(e)=>setPassreg(e.target.value)}/>
            <input className="form-control my-2" type="password" placeholder="Confirmar contraseña" />
            <div className="d-grid gap-2">
                <button className="btn btn-primary my-2" onClick={(e)=>handleregister(e)}>Registrar</button>
            </div>
        </div>
    )
}