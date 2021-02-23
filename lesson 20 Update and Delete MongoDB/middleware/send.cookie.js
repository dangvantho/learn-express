const userModel=require('../models/user.model')
const md5=require('md5')
module.exports.sendCookie=(req,res,next)=>{
    let errs=[]
    let form={
        name:req.body.name,
        password:md5(req.body.password)
    }
    userModel.findOne(form)
             .then(data=>{
                 return data._doc
             }).then(user=>{
                res.cookie(
                    'userId',
                    user._id,
                    {signed: true}
                )
                next()          
             }).catch(()=>{
                 res.redirect('/login')
                 next()   
             })    
                 
}