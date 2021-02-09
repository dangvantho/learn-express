class siteController{
    home(req,res){
        res.render('./sites/index')
    }
    contact(req,res){
        res.render('./sites/contact')
    }
}
module.exports=new siteController