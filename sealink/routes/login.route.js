const express=require('express')
const loginController=require('../controllers/login')
const authentication=require('../middleware/authentication')

const router=express.Router()

// [get] /login
router.get('/',loginController.index)

// [post] /login
router.post('/',authentication.authentication,loginController.post)

module.exports=router