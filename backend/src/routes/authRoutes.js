const express=require('express');
const upload=require('../middlewares/uploadImage');
const {handleUserSignup, handleUserLogin}=require('../controllers/authController');
const { handleNormalUserOnboarding, handleTherapistDetails } = require('../controllers/onboardingController');
const router=express.Router();

router.post('/signup',handleUserSignup);

router.post('/login',handleUserLogin);

router.post('/onboarding',handleNormalUserOnboarding);

router.post('/therapist',handleTherapistDetails);

module.exports=router;