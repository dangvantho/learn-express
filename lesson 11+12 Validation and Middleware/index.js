const express=require('express')
const userRouter=require('./routes/user.route')
const siteRouter=require('./routes/site.route')
const path=require('path')
const app=express()
const port=3000||process.env.PORT

//Set up for App
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.listen(port,()=>console.log(`App is running on port ${port}`))

//[Get] users
app.use('/users',userRouter)
//[Get] home
app.use('/',siteRouter)