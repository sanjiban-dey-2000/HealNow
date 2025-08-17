const Post=require('../model/postModel');
const User=require('../model/userModel');

async function handleCreatePost(req,res){
    try{
        const {content}=req.body;
        const userId=req.user._id;
        const newPost=await Post.create({
            userId,
            content,
        });
        if(req.file){
            newPost.media=`/assets/${req.file.filename}`;
        }

        await newPost.save();

        res.status(201).json({
            post:newPost,
            message:"Post created",
        });

    }catch(error){
        console.log(error.message);
        res.status(500).json({
            message:"Error in post creation route",
            error,
        });
    }
}

async function handleGetPosts(req,res){
    try{
        const posts=await Post.find({}).populate("userId","fullName").populate("comments.user","fullName");
        res.status(200).json({
            posts
        });
    }catch(error){
        console.log(error.message);
        res.status(500).json({
            message:"Error in getting posts route",
            error,
        });
    }
}

async function handleLikePost(req,res){

}

async function handleGetMyPost(req,res){
    try{
        const posts=await Post.find({userId:req.user._id});
        res.status(200).json({
            posts,
        });
    }catch(error){
        console.log(error.message);
        res.status(500).json({
            message:"Internal server error in getting my posts",
            error,
        });
    }
}

async function handleDeletePost(req,res){
    try{
        const {postId}=req.body;
        const deletedPost=await Post.findByIdAndDelete(postId);
        res.status(200).json({
            message:"Post deleted successfully",
            deletedPost,
        });
    }catch(error){
        console.log(error.message);
        res.status(500).json({
            message:"Internal server error in delete post route",
            error,
        });
    }
}

module.exports={
    handleCreatePost,
    handleGetPosts,
    handleLikePost,
    handleGetMyPost,
    handleDeletePost,
}