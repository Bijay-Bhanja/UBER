const express=require("express")
const router=express.Router();
const {body}=require("express-validator")
const userController=require("../controllers/user.controller")
const authMiddleware=require("../middleware/auth.middleware")



router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ming:3}).withMessage('First name must be at least 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be 6 character')
],userController.registerUser)

router.post("/login",[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('password must be 6 characters')
],userController.loginUser)

router.get("/profile",authMiddleware.authUser,userController.getUserProfile)

router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports=router