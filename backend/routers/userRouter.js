const router=require('express').Router()
const userController=require('../controllers/userController')

router.post('/register',userController.SignUp)
router.post('/LogIn',userController.LogIn)

module.exports=router