const db=require('../db')
const shortid=require('shortid')
class siteController{
    index(req,res){
        res.render('./sites/index.pug')
    }
    login(req,res){
        res.render('./sites/login')
    }
    product(req,res){
        let page=req.query.page || 1
        let totalProducts=db.get('products').value()
        let products=totalProducts.slice((page-1)*20,page*20)
        let numOfPages=Math.ceil(totalProducts.length/20)
        res.render('./sites/product',{
            products:products,
            numOfPages:numOfPages
        })
    }
    signin(req,res){
        res.render('./sites/signin')
    }

    //[post] login
    loginPost(req,res){
        console.log(req.body)
    }
    signinPost(req,res){
        console.log(req.body)
    }
}
module.exports=new siteController