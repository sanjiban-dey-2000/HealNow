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

export const sendLoginData=async(data)=>{
    return await api.post('/user/login',data);
}

export const sendTherapistOnboardingData=async(data)=>{
    return await api.post('/user/therapist',data);
}

export const postLogout=async()=>{
    return await api.post('/user/logout');
}

export const sendUserOnboardingData=async(data)=>{
    return await api.post('/user/onboarding',data);
}

export const sendChatBotmsg=async(data)=>{
    return await api.post('/aiChat/',data);
}

export const createPost=async(formData)=>{
    return await api.post('/post/create-post',formData);
}

export const getPosts=async()=>{
    return await api.get('/post/get-posts');
}

export const getTherapists=async()=>{
    return await api.get('/therapist/');
}