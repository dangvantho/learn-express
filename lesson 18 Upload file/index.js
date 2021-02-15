const express=require('express')
const cookies=require('cookie-parser')
const path=require('path')
const checkUser=require('./middlewares/check.user')
const siteRouter=require('./routes/site.route')
const userRouter=require('./routes/user.route')
const app=express()
const port=process.env.PORT||3000

//St up for app()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookies('cvlsdkdvdcwj'))
app.use(express.static('public'))
app.use(checkUser.checkUser)

// 
app.use('/user',userRouter)
app.use('/',siteRouter)

app.listen(port,()=>console.log(`App is running on port ${port}`))