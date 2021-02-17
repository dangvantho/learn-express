const express=require('express')
const userController=require('../controllers/user.controller')
const router=express.Router()

router.get('/',userController.index)
router.get('/data',userController.data)
router.post('/',userController.post)
module.exports=router