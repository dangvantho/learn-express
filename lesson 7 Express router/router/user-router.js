const express=require('express')
const router=express.Router()
const db=require('../db')
const shortid=require('shortid')

router.get('/',(req,res)=>{
    let users=db.get('users').value()
    res.render('./users/index',{users: users})
})
router.get('/create',(req,res)=>{
    res.render('./users/create')
})
router.get('/search',(req,res)=>{
    let q=req.query['q'].toLowerCase()
    let matchUsers=db.get('users').filter(user=>{
        return user['name'].toLowerCase().includes(q)
    }).value()
    res.render('./users/index',{users: matchUsers})
})
router.get('/:id',(req,res)=>{
    let id=req.params.id;
    let user=db.get('users').find({id:id}).value()
    res.render('./users/user',{user: user})
})
//Post
router.post('/create',(req,res)=>{
    let name=req.body.name
    let phone=req.body.phone
    let id=shortid.generate()
    db.get('users').push({id:id, name:name, phone:phone}).write()
    res.redirect('/users')
})
module.exports=router;