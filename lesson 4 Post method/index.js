const express=require('express')
const path=require('path')
const app=express()
const port=3000

app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))
//app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.listen(port,()=>console.log(`App is running on port ${port}`))

var users=[
    {id:0, name:"Tho", age:23},
    {id:1, name:"Tu", age:23},
    {id:2, name:"Son", age:23},
    {id:3, name:"Ngoc Anh", age:23},
    {id:4, name:"Phuong", age:23}
]
var name="my friends"

app.get('/',(req,res)=>{
    res.render("index",{ name: name });
})
app.get('/users',(req,res)=>{
    res.render('./users/index',{ users: users })
})
app.get('/search',(req,res)=>{
    var q=req.query.q;
    var matchUsers=users.filter((user)=>{
        user.name=user.name.toLowerCase();
        q=q.toLowerCase();
        return user.name.includes(q);
    })
    res.render('./users/index',{users: matchUsers});
})
app.get('/users/create',(req,res)=>{
    res.render('./users/create')
})
app.post('/users/create',(req,res)=>{
    var name=req.body.name;
    var age=req.body.age;
    var id=users.length;
    users.push({id: id, name: name, age: age});
    res.redirect('/users')
})