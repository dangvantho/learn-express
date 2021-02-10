const db=require('../db')
module.exports.sendCookie=(req,res,next)=>{
    console.log(req.body)
    let values={name: req.body.name, password: req.body.password}
    let user=db.get('users').find(values).value()
    if(user)
       res.cookie('userId',user.id)
    else 
       res.redirect('/users/create')   
    next()
}