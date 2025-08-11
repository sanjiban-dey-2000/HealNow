const User=require('../model/userModel');
const Therapist=require('../model/therapistModel');

async function handleGetTherapist(req,res){
    try{
        const therapists=await Therapist.find().populate("userId","fullName").exec();

        console.log(therapists);

        res.status(200).json({
            therapists,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            error,
            message:"Error in getting therapist route",
        });
    }
}

module.exports={
    handleGetTherapist,
}