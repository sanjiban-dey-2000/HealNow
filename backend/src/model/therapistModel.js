const mongoose=require('mongoose');

const therapistSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["Male","Female","Others","Prefer not to say"],
        
    },
    address:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
    },
},{
    timestamps:true,
});

const Therapist=mongoose.model("therapist",therapistSchema);

module.exports=Therapist;