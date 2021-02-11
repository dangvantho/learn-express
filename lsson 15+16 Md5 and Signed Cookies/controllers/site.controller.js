const db=require('../db')
const shortid=require('shortid')
const md5=require('md5')
class siteController{
    //[get]
    index(req,res){
        res.render('./sites/index')
    }
    product(req,res){
        res.render('./sites/product')
    }
    login(req,res){
        res.render('./sites/login')
    }
    signin(req,res){
        res.render('./sites/sign.in.pug')
    }
    //[get] Log out
    logout(req,res){
        res.clearCookie('userId')
        res.locals.userAu=null
        res.redirect('/login')
    }
    //[Post]
    loginPost(req,res){
        res.redirect('/users')
    }
    signinPost(req,res){
        let form=req.body
        let password=md5(form.password)
        let user={
            id: shortid.generate(),
            name: form.name,
            phone: form.phone,
            password: password
        }
        db.get('users').push(user).write()
        res.redirect('/login')
    }
}
module.exports=new siteController