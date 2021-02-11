const db=require('../db')
const md5=require('md5')
module.exports.sendCookies=(req,res,next)=>{
    let errs=[]
    let form=req.body
    let user=db.get('users').find({name: form.name}).value()
    if(!user){
        errs.push('User not found')
    }
    else{
        let hassPassword=md5(form.password)
        if(user.password!=hassPassword){
          errs.push('Fail password!!')
        }
    }
    
    if(errs.length>0){
        res.render('./sites/login',{
            errs: errs,
            values: req.body
        })
        return
    }
    res.cookie('userId',user.id,{signed: true})
    next()
}