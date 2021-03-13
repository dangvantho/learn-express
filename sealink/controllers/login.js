const jwt=require('jsonwebtoken')
class loginController{
    index(req,res){
        res.render('./login')
    }
    post(req,res){
        const token=jwt.sign({ admin:'admin',exp: Math.floor(Date.now()/1000)+60*60*3,},'skdblsbkdldfkaskljd',{ algorithm: 'HS256'})
        res.cookie('token',token)
        res.redirect('/admin')
    }
}
module.exports=new loginController