const db=require('../db')
const shortid=require('shortid')
const { render } = require('pug')
class userController{
    //[get] page users
    index(req,res){
        let users=db.get('users').value()
        res.render('./users/index',{users: users})
    }
    //[get] users/create
    create(req,res){
        res.render('./users/create')
    }
    //[get] users/viewUser
    viewUser(req,res){
        let id=req.params.id
        let user=db.get('users').find({id: id}).value()
        res.render('./users/user',{user: user})
    }

    //[post] users/create
    createPost(req,res){
        let data=req.body
        let user={id: shortid.generate(), name: data.name, email: data.mail, phone: data.phone}
        db.get('users').push(user).write()
        res.redirect('/users')
    }
}
module.exports=new userController