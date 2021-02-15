const db=require('../db')
module.exports.checkUser=(req,res,next)=>{
    if(req.signedCookies.userId){
        console.log(req.signedCookies)
        let user=db.get('users')
                   .find({id: req.signedCookies.userId})
                   .value()
        if(user) res.locals.user=user          
    }
    next()
}