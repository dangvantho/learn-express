const express=require('express')
const usersRouter=require('./routers/users-router')
const path=require('path')
const app=express()

//Set up for App
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))
app.use(express.urlencoded({extended: true}))
app.listen(3000,()=>console.log('App is running on port 3000'))

//Home
app.get('/',(req,res)=>{
    res.render('index')
})
//Users
app.use('/users',usersRouter)
