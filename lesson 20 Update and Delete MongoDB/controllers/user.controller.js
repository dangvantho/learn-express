const User=require('../models/user.model')
class userController{
    index(req,res){
        res.render('./users/user')
    }
}
module.exports=new userController