import { useEffect, useState } from "react";
import {useAuth} from "../context/AuthContext";
import axios from "axios";
import {Navigate} from "react-router-dom"
import LoadingPage from "../pages/LoadingPage";

const ProtectedRoute=({children})=>{
    const {user,login}=useAuth();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const verifyToken=async()=>{
            try{
                const res=await axios.get("http://localhost:8001/api/user/verify",{
                    withCredentials:true,
                });
                if(res.data.user) login(res.data.user);
            }catch(error){
                console.log(error.message);
            }finally{
                setLoading(false);
            }
        };
        if(!user) verifyToken();
        else setLoading(false);
    },[user,login]);

    if(loading) return <LoadingPage/>;
    if(!user) return <Navigate to='/login' replace/>;

    return children;
} 

export default ProtectedRoute;