import { auth } from "../Firebase/firebase.config";
import { createContext, useContext } from "react"; // para globalizar toda la aplicación

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context ){
        console.log("error en la creación de contexto");
    }
}

