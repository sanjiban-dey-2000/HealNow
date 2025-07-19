const mongoose=require('mongoose');

const normalUserSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    dob:{
        type:String,
    },
    gender:{
        type:String,
        enum:["Male","Female","Others","Prefer not to say"],
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    occupation:{
        type:String
    },
},{
    timestamps:true,
});

const UserOnboarding=mongoose.model('normalUser',normalUserSchema);

module.exports=UserOnboarding;