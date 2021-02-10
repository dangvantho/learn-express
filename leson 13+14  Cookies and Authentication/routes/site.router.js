const express=require('express')
const siteController=require('../controllers/site.controller')
const validation=require('../middleware/validation')
const sendCookie=require('../middleware/send.cookie')
const router=express.Router()

//[get] home
router.get('/',siteController.home)
router.get('/contact', siteController.contact)
router.get('/login',siteController.login)

//[post] /login
router.post('/login', validation.validate, sendCookie.sendCookie, siteController.loginPost)
module.exports=router