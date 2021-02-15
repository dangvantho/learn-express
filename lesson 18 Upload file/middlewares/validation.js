module.exports.validate=(req,res,next)=>{
    let errs=[]
    let form=req.body
    if(!form.name) errs.push('Required name!!!')
    if(!form.phone) errs.push('Required phone!!!')
    if(!form.password) errs.push('Required password!!!')
    if(errs.length>0){
        res.render('./sites/register',{
            errs:errs,
            values: form
        })
        return
    }
    next()
}