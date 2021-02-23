module.exports.autheticate=(req,res,next)=>{
    if(!res.locals.user){
        res.redirect('/login')
        return
    }
    next()
}