const express=require('express');
const { handleLLMChat } = require('../controllers/chatController');

const router=express.Router();

router.post('/',handleLLMChat);

module.exports=router;