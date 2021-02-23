const express=require('express')
const productController=require('../controllers/product.controller')
const getProducts=require('../middleware/get.products')

//Create router
const router=express.Router()

//[get] /products
router.get('/',productController.index)
router.get('/:id',productController.edit)

//[put] Update
router.put('/:id',productController.update)
router.delete('/:id',productController.destroy)

module.exports=router