const express=require('express')
const app=express()
const userRouter=require('./router/user-router')
const path=require('path')
//Set up for app
app.use(express.urlencoded({extended:true}))
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))
app.listen(3000,()=>console.log('App is running on port 3000'))


//Get

app.use('/users',userRouter)
app.get('/',(req,res)=>{
    res.render('index')
})