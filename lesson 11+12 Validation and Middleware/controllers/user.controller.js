const shortid=require('shortid')
const db=require('../db')

function userController(){
    //[Get] /users
    this.index=(req,res)=>{
        let users=db.get('users').value()
        res.render('./users/index',{users: users})
    }
    //[Get] /users/create
    this.create=(req,res)=>{
        res.render('./users/create')
    }
    //[Get] /:user/:id
    this.viewUser=(req,res)=>{
        let user=db.get('users').find({id: req.params.id}).value()
        res.render('./users/user',{user: user})
    }

    //[Post] /users/create
    this.createPost=(req,res,next)=>{
        let data=req.body
        let user={
            id: shortid.generate(),
            name: data.name,
            mail: data.mail,
            phone: data.phone
        }
        db.get('users').push(user).write()
        res.redirect('/users')
    }

}
module.exports=new userController