const express=require('express')
const path=require('path')
const low=require('lowdb')
const FileSync=require('lowdb/adapters/FileSync')
const shortid=require('shortid')
const app=express()
const port=3000

//Setting app
app.use(express.urlencoded({extended: true}))
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))
app.listen(port,()=>console.log(`App is running on port ${port}`))
//Set up lowdb
const adapters=new FileSync('db.json')
const db=low(adapters)
//Set deufault db when db.json is empty
db.defaults({users:[]})
  .write()
//Get data
//var users=db.get('users').value()

//GET
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/users',(req,res)=>{
    let users=db.get('users').value()
    res.render('./users/index',{users: users})
})
app.get('/users/search',(req,res)=>{
    var q=req.query['q'].toLowerCase();
    var macthUsers=db.get('users').filter((user)=>{
        return user['name'].toLowerCase().includes(q)
    }).value()
    res.render('./users/index',{users: macthUsers})
})
app.get('/users/create',(req,res)=>{
    res.render('./users/create');
})

//POST 
app.post('/users/create',(req,res)=>{
    let name=req.body.name;
    let age=req.body.age;
    let id=shortid.generate();
    db.get('users')
      .push({id: id, name: name, age: age})
      .write() 
    res.redirect('/users')
})
