const express=require('express')
const userController=require('../controllers/user.controller')
const authentication=require('../middleware/authentication')
//Create router
const router=express.Router()
router.get('/',authentication.autheticate , userController.index)

module.exports=router