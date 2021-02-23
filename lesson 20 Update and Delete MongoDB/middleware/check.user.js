const userModel=require('../models/user.model')
module.exports.checkUser=(req,res,next)=>{
    if(req.signedCookies.userId){
        let id=req.signedCookies.userId
        userModel.findOne({_id:id})
                 .then(data=> data._doc)
                 .then(user=>{
                     res.locals.user=user
                     console.log(res.locals.user.name)
                     next()
                 }).catch(()=>{
                     console.log('Fail req.singCookies.userId')
                     next()
                 })
    }
}