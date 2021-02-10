const db=require('../db')
module.exports.checkViewUser=(req,res,next)=>{
    let id=req.cookies.userId
    let users=db.get('users').value()
    if(id!=req.params.id){
        res.render('./users/index',{
            users: users,
            err:"You don't have allow to view other account"
        })
    }
    next()
}