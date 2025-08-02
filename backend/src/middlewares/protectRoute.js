const jwt=require('jsonwebtoken');
const User=require('../model/userModel');

const protectRoute=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({
                message:"Unauthorized: No token provided",
            });
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);

        const user=await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(401).json({
                message:"Unauthorized: User not found",
            });
        }
        req.user=user;
        next();
        
    }catch(error){
        console.log("Error in protext route middleware", error.message);
        res.status(500).json({
            message:"Unauthorized: Invalid or expired token",
            error,
        });
    }
}

module.exports={
    protectRoute,
};