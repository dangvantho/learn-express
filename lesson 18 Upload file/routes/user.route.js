const express=require('express')
const userController=require('../controllers/user.controller')
const router=express.Router()

//[get]
router.get('/',userController.index)
router.get('/logout', userController.logout)

module.exports=router