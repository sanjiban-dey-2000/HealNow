const User=require('../model/userModel');
const JWT=require('jsonwebtoken');
const bcrypt=require('bcrypt');

async function handleUserSignup(req,res){
    console.log(req.body);
    try{
        const {fullName,email,password,role}=req.body;
        if(!fullName||!email||!role||!password){
            return res.status(400).json({
                message:"Please provide all the fields",
            });
        }

        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"User already exists. Please try with another email id",
            });
        }

        const user=await User.create({
            fullName,
            email,
            role,
            password,
        });

        const token=JWT.sign({ userId: user._id },process.env.JWT_SECRET_KEY,{
            expiresIn:"7d",
        });

        res.cookie('jwt',token,{
            maxAge:7*24*60*60*1000,
            httpOnly:true,
            sameSite:"strict",
        });

        res.status(200).json({
            message:"User account created",
            user,
        });

    }catch(error){
        console.log(error.message);
        res.status(500).json({
            error,
            message:"Error in user signup route",
        });
    }
}

async function handleUserLogin(req,res){
    try{
        const {email,password}=req.body;

        if(!email||!password){
            return res.status(400).json({
                message:"Please provide all the fields to login",
            });
        }

        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({
                message:"User account not found. Please try with another email",
            });
        }

        const isMatched=await bcrypt.compare(password,existingUser.password);

        if(!isMatched){
            return res.status(400).json({
                message:"Password is incorrect",
            });
        }

        const token=JWT.sign({ userId: existingUser._id },process.env.JWT_SECRET_KEY,{
            expiresIn:"7d",
        });

        res.cookie('jwt',token,{
            maxAge:7*24*60*60*1000,
            httpOnly:true,
            sameSite:"strict",
        });

        res.status(200).json({
            message:"Logged in successfully",
            user:existingUser,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Error in user login route",
        });
    }
}

module.exports={
    handleUserSignup,
    handleUserLogin,
}