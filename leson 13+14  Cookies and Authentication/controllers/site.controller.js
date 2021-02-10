
class siteController{
    home(req,res){
        res.render('./sites/index')
    }
    contact(req,res){
        res.render('./sites/contact')
    }
    login(req,res){
        res.render('./sites/authentication')
    }
    //post
    loginPost(req,res){
        res.redirect('/users')
    }
}
module.exports=new siteController