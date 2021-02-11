const express=require('express')
const path=require('path')
const cookies=require('cookie-parser')
const userRouter=require('./routes/user.route')
const siteRouter=require('./routes/site.route')
const userLocal=require('./middleware/user')
const app=express()
const port=process.env.PORT||3000

//Set up for app()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookies('gdyicsvdii'))
app.listen(port,()=>console.log(`App is running on port ${port}`))


//route users
app.use('/users', userLocal.user, userRouter)
//route site
app.use('/', userLocal.user, siteRouter)