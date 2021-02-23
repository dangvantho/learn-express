const { response } = require('express')
const Product=require('../models/product.model')
class productController{
    index(req,res){
        let page=req.query.pages||1
        let start=(page-1)*20
        let end=page*20
        console.log(1)
        Product.find({}).then(data=>{
            let products=data.map(value=>value._doc)
            products=products.slice(start,end)
            res.render('./products/index',{products: products})
        }).catch(e=>{
            res.send(e)
        })
    }
    //[delete] /products
    destroy(req,res){
        let _id=req.params.id
        Product.deleteOne({_id: _id}).then(product=>{
            res.redirect('/products')
        })
    }
    edit(req,res){
        let _id=req.params.id
        Product.findOne({_id: _id}).then(product=>{
            res.render('./products/edit',{product: product._doc})
        })
    }

    //[put] /edit
    update(req,res){
        let id=req.params.id
        Product.updateOne({_id:id},req.body)
                .then(data=>{
                    console.log(data)
                    res.redirect('/products')
                })
                .catch(e=>console.log(e))
    }
}
module.exports=new productController