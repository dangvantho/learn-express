const express=require('express')
const siteController=require('../controllers/site.controller')
const authentication=require('../middleware/authentication')
const checkUser=require('../middleware/check.user')
const sendCookie=require('../middleware/send.cookie')
const validation=require('../middleware/validation')

const router=express.Router()
//Get
router.get('/',siteController.index)
router.get('/product',siteController.product)
router.get('/login',siteController.login)
router.get('/signin',siteController.signin)

//[Post]
router.post('/login',siteController.loginPost)
router.post('/signin',siteController.signinPost)

module.exports=router