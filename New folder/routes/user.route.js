const express=require('express')
const userController=require('../controllers/user')

const router=express.Router()

// [get] home
router.get('/',userController.index)
router.get('/equiqment',userController.equiqment)
router.get('/service',userController.service)
router.get('/news',userController.news)
router.get('/introduction',userController.introduction)
router.get('/contact',userController.contact)

module.exports=router