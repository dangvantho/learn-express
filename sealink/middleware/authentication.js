
const Admin=require('../models/Admin')
const md5=require('md5')

module.exports.authentication=async function(req,res,next){
    const {name,password}=req.body
    // Check validate
    let errs=[]
    if(!name) errs.push('Name is required!!')
    if(!password) errs.push('Password is required!!!')
    if(errs.length>0){
        res.render('./login',{
            errs,
        })
        return
    }
    // Check admin
    const admin=await Admin.find({}).then(data=>data[0]._doc)
    if(name!==admin.name) errs.push('Name is failure!!!')
    if(md5(password)!==admin.password) errs.push('Password is failure!!!')
    if(errs.length>0){
        res.render('./login',{
            errs,
        })
        return
    }
    

    next()
}