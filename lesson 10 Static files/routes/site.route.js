const express=require('express')
const siteController=require('../controller/site.controller')
const router=express.Router()

router.get('/:slug',siteController.slug)
router.get('/',siteController.index)
module.exports=router