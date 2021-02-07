const express=require('express')
const path=require('path')
const low=require('lowdb')
const FileSync=require('lowdb/adapters/FileSync')
const shortid=require('shortid')
const app=express()
const port=3000
 
//Set up app
app.use(express.urlencoded({extended:true})) 
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))
app.listen(port,()=>console.log('App is running on port 3000'))

//Set up lowdb
const adapters=new FileSync('db.json')
const db=low(adapters)
//Set up Default when db.json is empty
db.defaults({'users': []}).write()

//Get
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/users',(req,res)=>{
    let users=db.get('users').value()
    res.render('./users/index',{users: users})
})
app.get('/users/search',(req,res)=>{
    let q=req.query.q.toLowerCase()
    let matchUsers=db.get('users').filter(user=>{
        return user.name.toLowerCase().includes(q)
    }).value()
    console.log(matchUsers[0])
    res.render('./users/index',{users: matchUsers})
})
app.get('/users/create',(req,res)=>{
    res.render('./users/create')
})
app.get('/users/:id',(req,res)=>{
    let id=req.params.id
    let user=db.get('users').find({id:id}).value()
    res.render('./users/user',{user: user})
})

//Post
app.post('/users/create',(req,res)=>{
    let name=req.body.name
    let age=parseInt(req.body.age)
    let id=shortid.generate()
    db.get('users').push({id: id, name: name, age: age})
      .write()
    res.redirect('/users')  
})