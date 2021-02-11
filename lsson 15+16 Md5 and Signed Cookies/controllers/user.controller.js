class userController{
    index(req,res){
        res.render('./users/index')
    }
    viewUser(req,res){
        res.render('./users/index')
    }
}
module.exports=new userController