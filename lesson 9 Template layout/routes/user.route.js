const express=require('express')
const userController=require('../controller/user.controller')
const router=express.Router()

//Get 
router.get('/',userController.index)
router.get('/create',userController.create)
router.get('/search',userController.search)
router.get('/:id',userController.viewUser)

//Post
router.post('/create',userController.postCreate)

module.exports=router