const userModel=require('../models/user.model')
class userController{
    index(req,res){
        res.render('index')
    }
    data(req,res){
        userModel.find({}).then(data=>{
            res.send(data)
        }).catch(()=>console.log('Connect to db failure!!!'))
    }
    post(req,res){
        let user=req.body
        userModel.create(user).then(data=>{
            console.log(data)
        })
        res.render('index')    
    }
}
module.exports=new userController