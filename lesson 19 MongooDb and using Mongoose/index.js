const express=require('express')
const router=require('./routes/user.route')
const mongoose=require('mongoose')
const path=require('path')
const app=express()

//Connect to MongoDB
const URL='mongodb+srv://dangvantho:dangvanthopro@cluster0.xluxf.mongodb.net/users'
mongoose.connect(URL)
        .then(()=>console.log('Connect sucess!!!'))
        .catch(e=>console.log(e))
//Set up for app()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.listen(3000,()=>console.log('App is running on port 3000'))

app.use('/',router)