import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:8001/api",
    withCredentials:true,
});

export const sendContactMessage=async(data)=>{
    return await api.post('/contact/send-message',data);
}

export const sendSignupData=async(data)=>{
    return await api.post('/user/signup',data);
}