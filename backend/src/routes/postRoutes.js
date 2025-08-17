const express=require('express');
const upload=require('../middlewares/uploadImage');
const {protectRoute}=require('../middlewares/protectRoute');
const { handleCreatePost, handleGetPosts, handleLikePost, handleGetMyPost }=require('../controllers/postController');
const router=express.Router();


router.post('/create-post',protectRoute,upload.single('file'),handleCreatePost);

router.get('/get-posts',protectRoute,handleGetPosts);

router.post('/like-post',protectRoute,handleLikePost);

router.get('/myposts',protectRoute,handleGetMyPost);

module.exports=router;
