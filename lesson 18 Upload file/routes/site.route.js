const express=require('express')
const siteController=require('../controllers/site.controller')
const authentication=require('../middlewares/authentication')
const validation=require('../middlewares/validation')
const sendCookie=require('../middlewares/send.cookie')
const multer=require('multer')
const upload=multer({dest:'./public/uploads'})
const router=express.Router()

//[get] /home
router.get('/',siteController.index)
router.get('/products',siteController.products)
router.get('/login',siteController.login)
router.get('/register',siteController.register)

//[post]
router.post('/login', sendCookie.sendCookie, siteController.loginPost)
router.post('/register',upload.single('avatar'), validation.validate, siteController.registerPost)

module.exports=router