const Post=require('../model/postModel');

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
        const posts=await Post.find({});
        res.status(200).json({
            posts,
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

module.exports={
    handleCreatePost,
    handleGetPosts,
    handleLikePost
}