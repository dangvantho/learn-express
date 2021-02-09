const express=require('express')
const siteController=require('../controllers/site.controller')
const router=express.Router()

//[Get] home and contact
router.get('/',siteController.home)
router.get('/contact',siteController.contact)

module.exports=router