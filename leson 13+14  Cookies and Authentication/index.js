const express=require('express')
const userRouter=require('./routes/user.router')
const siteRouter=require('./routes/site.router')
const path=require('path')
const cookie=require('cookie-parser')

const app=express()
const port=process.env.PORT || 3000

//Set up for App()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use(cookie('thhhhpo'))
app.listen(port,()=>console.log(`App is running on port ${port}`))

// [get] /users
app.use('/users',userRouter)
//[get] Sites
app.use('/',siteRouter)