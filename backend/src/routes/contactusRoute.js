const express=require('express');
const Contact=require('../model/contactModel');
const router=express.Router();

router.post('/send-message',async(req,res)=>{
    try{
        const {fullName,email,subject,message}=req.body;
        if(!fullName||!email||!subject||!message){
            return res.status(400).json({
                message:"Please provide all the fields",
            });
        }

        const contactMessage=await Contact.create({
            fullName,
            email,
            subject,
            message,
        });

        res.status(200).json({
            contactMessage,
            message:"Message sent successfully",
        });
    }catch(error){
        console.log(error.message);
        res.status(500).json({
            message:"Error in contact us route",
            error,
        });
    }
})

module.exports=router;