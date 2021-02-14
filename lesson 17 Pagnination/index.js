const express=require('express')
const siteRouter=require('./routes/site.router')
const userRouter=require('./routes/user.router')
const path=require('path')
const checkUser=require('./middleware/check.user')
const cookie=require('cookie-parser')

const app=express()
const port=process.env.PORT || 3000

//Set for app()
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookie('ashhsvagdvvgd'))
app.use(express.static('public'))
app.listen(port,()=>console.log(`App is running on port ${port}`))

app.use('/user',userRouter)
app.use('/',siteRouter)