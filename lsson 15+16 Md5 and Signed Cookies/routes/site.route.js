const express=require('express')
const siteController=require('../controllers/site.controller')
const sendCookies=require('../middleware/send.cookie')
const validate=require('../middleware/validation')
const autheticate=require('../middleware/authentication')
const router=express.Router()

//
router.get('/',siteController.index)
router.get('/login', siteController.login)
router.get('/product',siteController.product)
router.get('/signin',siteController.signin)
router.get('/logout',siteController.logout)
//Post
router.post('/login', sendCookies.sendCookies, siteController.loginPost)
router.post('/signin',validate.validate, siteController.signinPost)


module.exports=router