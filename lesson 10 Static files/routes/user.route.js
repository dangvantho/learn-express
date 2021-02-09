const express=require('express')
const userController=require('../controller/user.controller')
const router=express.Router()

router.get('/',userController.index)
router.get('/create',userController.create)
router.get('/:user/:id',userController.viewUser)

//[post]
router.post('/create',userController.createPost)
module.exports=router