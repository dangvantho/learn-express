const db=require('../db')
const shortid=require('shortid')
class siteController{
    index(req,res){
        res.render('./sites/index')
    }
    products(req,res){
        res.render('./sites/product')
    }
    login(req,res){
        res.render('./sites/login')
    }
    register(req,res){
        res.render('./sites/register')
    }
    //[post]
    loginPost(req,res){
        res.render('./users/index')
    }
    registerPost(req,res){
        let form=req.body
        let newUser={
               id: shortid.generate(),
               name: form.name,
               phone: form.phone,
               password: form.password,
               pathImg: 'uploads/'+ req.file.filename
        }
        db.get('users').push(newUser).write()
        res.redirect('/login')
    }
}
module.exports=new siteController