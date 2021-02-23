const express=require('express')
const siteController=require('../controllers/site.controller')
const sendCookie=require('../middleware/send.cookie')
const validation=require('../middleware/validation')
//Create router 
const router=express.Router()
//[get] home
router.get('/',siteController.index)
router.get('/login',siteController.login)
router.get('/register',siteController.register)
//[post]
router.post('/login',sendCookie.sendCookie,siteController.loginPost)
router.post('/register',validation.validate,siteController.registerPost)

module.exports=router