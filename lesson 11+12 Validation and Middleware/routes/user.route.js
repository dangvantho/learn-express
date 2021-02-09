const express=require('express')
const userController=require('../controllers/user.controller')
const validate=require('../middleware/validation')
const router=express.Router()

//[Get] users
router.get('/',userController.index)
router.get('/create',userController.create)
router.get('/:user/:id',userController.viewUser)

//[post] /users/create
router.post('/create',validate.validate,userController.createPost)

module.exports=router