const express=require('express')
const userController=require('../controllers/users-controller')
const router=express.Router()

//get
router.get('/',userController.index)
router.get('/create',userController.create)
router.get('/search',userController.search)
router.get('/:id',userController.viewUser)

//post
router.post('/create',userController.postCreate)

module.exports=router