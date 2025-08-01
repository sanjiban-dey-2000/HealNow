const UserOnboarding=require('../model/normalUserModel');
const Therapist=require('../model/therapistModel');

async function handleNormalUserOnboarding(req,res){
    try{
        const {userId,dob,gender,phone,address,occupation,bio}=req.body;
        if(!userId||!dob||!gender||!phone||!address||!occupation||!bio){
            return res.status(400).json({
                message:"Please provide all the fields to be onboard",
            });
        }

        const userDetails=await UserOnboarding.create({
            userId,
            dob,
            gender,
            phone,
            address,
            occupation,
            bio,
        });

        res.status(200).json({
            userDetails,
            message:"Details saved successfully",
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            error,
            message:"Error in orboarding route",
        });
    }
}

async function handleTherapistDetails(req,res){
    try{

        const {userId,phone,gender,address,experience,bio}=req.body;

        if(!userId||!phone||!gender||!address||!experience||!bio){
            return res.status(400).json({
                message:"Please provide all the fields",
            });
        }

        const therapistDetails=await Therapist.create({
            userId,
            phone,
            gender,
            address,
            experience,
            bio
        });

        res.status(200).json({
            message:"Details saved successfully",
            therapistDetails,
        })
    }catch(error){
        console.log(error.message);
        res.status(500).json({
            error,
            message:"Error in saving therapist details route",
        })
    }
}

module.exports={
    handleNormalUserOnboarding,
    handleTherapistDetails,
}