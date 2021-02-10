const db=require('../db')
const shortid=require('shortid')
class userController{
    //[get] /users
    index(req,res){
        let users=db.get('users').value()
        res.render('./users/index',{users: users})
    }
    //[Get] /users/create
    create(req,res){
        res.render('./users/create')
    }
    //[get] /users/:name/:id
    viewUser(req,res){
        let id=req.params.id
        let user=db.get('users').find({id:id}).value()
        res.render('./users/user',{user: user})
    }

    //[Post] /users/create
    createPost(req,res){
        let data=req.body
        console.log(data)
        let user={
            id: shortid.generate(), 
            name: data.name, 
            phone: data.phone, 
            password: data.password
        }
        db.get('users').push(user).write()
        res.redirect('/login')
    }
}
module.exports=new userController