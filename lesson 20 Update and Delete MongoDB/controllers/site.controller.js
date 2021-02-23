const md5=require('md5')
const userModel=require('../models/user.model')
class siteController{
    index(req,res){
        res.render('./sites/index')
    }
    login(req,res){
        res.render('./sites/login')
    }
    register(req,res){
        res.render('./sites/register')
    }
    //[post]
    loginPost(req,res){
        res.redirect('/user')
    }
    registerPost(req,res){
        let newUser=new userModel({
            name:req.body.name,
            phone:req.body.phone,
            password:md5(req.body.password),
            cart:[],
        })
        newUser.save()
        res.redirect('/login')
    }
}
module.exports=new siteController