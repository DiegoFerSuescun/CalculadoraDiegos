import { auth } from "../Firebase/firebase.config";
import { createContext, useContext } from "react"; // para globalizar toda la aplicación
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context ){
        console.log("error en la creación de contexto");
    }
    return context;
};

export function AuthProvider ({children}){

    const registerEmail = async (email, password ) =>{
        const response = await createUserWithEmailAndPassword(auth,email, password)
        console.log(response);
    };
    const loginEmail = async (email, password) =>{
        const response = await signInWithEmailAndPassword(auth, email,password)
        console.log(response);
    };
    const loginGoogle = async () =>{
        const response = new GoogleAuthProvider();
        return await signInWithPopup(auth, response)
    };
    const logOut = async () => {
        const response = await signOut(auth);
        console.log(response);
    };

    return <authContext.Provider value = {{
        registerEmail,
        loginEmail,
        loginGoogle,
        logOut,
    }}
    >
    {children}
    </authContext.Provider>

}  

