const express=require('express');
const upload=require('../middlewares/uploadImage');
const {protectRoute}=require('../middlewares/protectRoute');
const { handleCreatePost }=require('../controllers/postController');
const router=express.Router();


router.post('/create-post',protectRoute,upload.single('file'),handleCreatePost);

module.exports=router;
