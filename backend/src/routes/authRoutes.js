const express=require('express');
const upload=require('../middlewares/uploadImage');
const {handleUserSignup, handleUserLogin}=require('../controllers/authController');
const { handleNormalUserOnboarding, handleTherapistDetails } = require('../controllers/onboardingController');
const { protectRoute } = require('../middlewares/protectRoute');
const router=express.Router();

router.post('/signup',handleUserSignup);

router.post('/login',handleUserLogin);

router.post('/onboarding',handleNormalUserOnboarding);

router.post('/therapist',handleTherapistDetails);

router.get('/verify',protectRoute,(req,res)=>{
    res.status(200).json({
        user:req.user,
    });
})

module.exports=router;