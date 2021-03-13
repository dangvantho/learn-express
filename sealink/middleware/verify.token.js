const jwt=require('jsonwebtoken')
module.exports.verify=function(req,res,next){
    if(req.cookies.token){
        jwt.verify(req.cookies.token,'skdblsbkdldfkaskljd',(err,decoded)=>{
            if(err){
                res.redirect('/login')
                return
            }
            else {
                return
            }
        })
    }
    else {
        res.redirect('/login')
        return
    }
    next()
}