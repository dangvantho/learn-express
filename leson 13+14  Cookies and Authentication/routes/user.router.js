const express=require('express')
const userController=require('../controllers/user.controller')
const validation=require('../middleware/validation')
const checkViewUser=require('../middleware/check.view.user')
const authentication=require('../middleware/authentication')
const router=express.Router()

//[get] /users
router.get('/', authentication.authentication, userController.index)
router.get('/create', userController.create)
router.get('/:name/:id',checkViewUser.checkViewUser , userController.viewUser)

//[post] /users/create
router.post('/create', validation.validate, userController.createPost)

module.exports=router
