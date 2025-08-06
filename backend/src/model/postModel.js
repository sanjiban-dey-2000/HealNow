const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    content:{
        type:String,
        default:'',
    },
    media:{
        type:String,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }],
    comments:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user",
            },
            text:String,
            createdAt:{
                type:Date,
                default:Date.now,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    }
},{
    timestamps:true,
});

const Post=mongoose.model("post",postSchema);
module.exports=Post;