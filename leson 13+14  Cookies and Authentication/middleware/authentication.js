module.exports.authentication=(req,res,next)=>{
    if(!req.cookies.userId) res.render('./sites/authentication')
    next()
}