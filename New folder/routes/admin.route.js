const express= require('express')
const adminController=require('../controllers/admin')

const router=express.Router()

//[get] 
router.get('/',adminController.index)
router.get('/news',adminController.newsManage)
router.get('/news/post',adminController.news)
router.get('/service',adminController.serviceManage) //Show service and edit or delete
router.get('/service/post',adminController.service)

//[post] /service
router.post('/service/post',adminController.servicePost)
//[post] /news
router.post('/news/post',adminController.newsPost)

module.exports=router
