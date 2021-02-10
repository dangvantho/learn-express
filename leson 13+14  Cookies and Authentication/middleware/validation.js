module.exports.validate=(req,res,next)=>{
    let errs=[]
    let data=req.body
    let url=req.path
    if(!data.name) errs.push('Require fill name!!')
    if((!data.phone)&&(url!='/login')) errs.push('Require fill phone!!')
    if(!data.password) errs.push('Require fill password!!')
    if(errs.length>0){
        if(url=="/login"){ 
            res.render('./sites/authentication',{errs: errs, values: req.body})
            return
        }
        else{
            res.render('./users/create',{errs: errs, values: req.body})
            return    
        }
    }
    next()
}