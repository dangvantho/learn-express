const db=require('../db')
const shortid=require('shortid')
//Get
module.exports.index=(req,res)=>{
    let users=db.get('users').value()
    res.render('./users/index',{users: users})
}
module.exports.create=(req,res)=>{
    res.render('./users/create')
}
module.exports.search=(req,res)=>{
    let q=req.query['q'].toLowerCase()
    let matchUsers=db.get('users').filter(user=>{
        return user.name.toLowerCase().includes(q)
    }).value()
    res.render('./users/index',{users: matchUsers})
}
module.exports.viewUser=(req,res)=>{
    let id=req.params.id;
    let user=db.get('users').find({id: id}).value()
    res.render('./users/user',{user: user})
}

//Post
module.exports.postCreate=(req,res)=>{
    let user={id: shortid.generate(), name: req.body.name, phone: req.body.phone}
    db.get('users').push(user).write()
    res.redirect('/users')
}