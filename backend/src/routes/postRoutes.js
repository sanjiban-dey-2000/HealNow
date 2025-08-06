const express=require('express');
const upload=require('../middlewares/uploadImage');
const {protectRoute}=require('../middlewares/protectRoute');
const { handleCreatePost, handleGetPosts }=require('../controllers/postController');
const router=express.Router();


router.post('/create-post',protectRoute,upload.single('file'),handleCreatePost);

router.get('/get-posts',protectRoute,handleGetPosts);

module.exports=router;
