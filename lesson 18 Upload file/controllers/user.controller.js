class userController{
    index(req,res){
        res.render('./users/index')
    }
    logout(req,res){
        res.clearCookie('userId')
        res.redirect('/login')
    }
}
module.exports=new userController