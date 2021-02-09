module.exports.validate=(req,res,next)=>{
    let err=[]
    let data=req.body
    console.log(data)
    if(!data.name) err.push('Required name!!!')
    if(!data.mail) err.push('Require mail!!')
    if(!data.phone) err.push('Require phone')
    if(err.length>0){
        res.render('./users/create',{
            err: err,
            values: data
        })
        return
    }
    next()
}