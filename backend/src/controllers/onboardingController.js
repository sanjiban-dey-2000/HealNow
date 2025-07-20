const UserOnboarding=require('../model/normalUserModel');

async function handleNormalUserOnboarding(req,res){
    try{
        const {userId,dob,gender,phone,address,occupation}=req.body;
        if(!userId||!dob||!gender||!phone||!address||!occupation){
            return res.status(400).json({
                message:"Please provide all the fields to be onboard",
            });
        }

        

    }catch(error){
        console.log(error);
        res.status(500).json({
            error,
            message:"Error in orboarding route",
        });
    }
}

module.exports={
    handleNormalUserOnboarding,
}