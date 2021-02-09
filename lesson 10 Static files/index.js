const express=require('express')
const userRouter=require('./routes/user.route')
const siteRouter=require('./routes/site.route')
const path=require('path')
const app=express()

//Set up for app
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.listen(3000,()=>console.log("App is running on port 3000"))

//User 
app.use('/users',userRouter)
//Site
app.use('/',siteRouter)


