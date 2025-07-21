const express=require('express');
const upload=require('../middlewares/uploadImage');
const {handleUserSignup, handleUserLogin}=require('../controllers/authController');
const { handleNormalUserOnboarding, handleTherapistDetails } = require('../controllers/onboardingController');
const router=express.Router();

router.post('/user/signup',upload.single('image'),handleUserSignup);

router.post('/user/login',handleUserLogin);

router.post('/user/onboarding',handleNormalUserOnboarding);

router.post('/user/therapist',handleTherapistDetails);

module.exports=router;