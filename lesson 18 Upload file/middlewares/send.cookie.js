const db=require('../db')
const md5=require('md5')
module.exports.sendCookie=(req,res,next)=>{
    if(res.locals.user){
        res.redirect('/user')
        return
    }
    let errs=[]
    let data=req.body
    let user=db.get('users')
                .find({name: data.name})
                .value()
    if(!user) errs.push("Don't have user in database!!!")
    else{
        let hashPassword=md5(data.password)
        if(user.password!=hashPassword) errs.push('Password is wrong!!!')
    }           
    if(errs.length>0){
        res.render('./sites/login',{
            errs: errs,
            values: data
        })
        return
    }
    res.cookie('userId',user.id,{signed: true})
    next()
}