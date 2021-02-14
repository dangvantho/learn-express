const db=require('../db')
class userController{
    index(req,res){
        res.render('./users/index')
    }
    post(req,res){
        let product=req.body
        let user=db.get('users').find({id: req.cookies.userId}).cloneDeep().value()
        if(user.products.length>0){
            let x=db.get('users')
                    .find({id: req.cookies.userId})
                    .get('products')
                    .find({name:product.name})
                    .value()
            if(x) {
                x.quantity++
                db.get('users')
                    .find({id: req.cookies.userId})
                    .get('products')
                    .find({name:product.name})
                    .assign({quantity: x.quantity})
                    .write()
            }
            else{
                db.get('users')
                    .find({id: req.cookies.userId})
                    .get('products')
                    .push(product)
                    .write()
            }
        } 
        else{
            user.products.push(product)
            db.get('users').find({id:req.cookies.userId})
              .assign({products: user.products})
              .cloneDeep().write()
        }
        

    }
}
module.exports=new userController