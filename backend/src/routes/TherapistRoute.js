const express=require('express');
const {protectRoute}=require('../middlewares/protectRoute');
const { handleGetTherapist } = require('../controllers/TherapistController');
const router=express.Router();

router.get('/',protectRoute,handleGetTherapist);

module.exports=router;