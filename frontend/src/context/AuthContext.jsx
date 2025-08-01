import {Children, createContext,useContext,useState} from "react";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);

    const login=(userData)=>setUser(userData);
    const signup=(userData)=>setUser(userData);
    console.log(user);

    return (
        <AuthContext.Provider value={{user,login,signup}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth=()=>useContext(AuthContext);