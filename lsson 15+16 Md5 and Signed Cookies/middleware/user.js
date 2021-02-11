const db=require('../db')
module.exports.user=(req,res,next)=>{
    if(req.signedCookies.userId){
        let user=db.get('users').find({id: req.signedCookies.userId}).value()
        if(user) res.locals.userAu=user
        console.log(res.locals)
    }
    next()
}