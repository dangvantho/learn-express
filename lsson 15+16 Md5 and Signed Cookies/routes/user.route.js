const express=require('express')
const autheticate=require('../middleware/authentication')
const userController=require('../controllers/user.controller')
const router=express.Router()

//[get] /users
router.get('/',autheticate.autheticate,userController.index)
//[get] /users/:name/:id
router.get('/:name/:id',userController.viewUser)
module.exports=router