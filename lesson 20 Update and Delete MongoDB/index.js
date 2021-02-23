const express=require('express')
const productRouter=require('./routes/product.router')
const userRouter=require('./routes/user.router')
const siteRouter=require('./routes/site.router')
const db=require('./config/db.connect')
const path=require('path')
const cookie=require('cookie-parser')
const checkUser=require('./middleware/check.user')
const override=require('method-override')
//Connect to MongoDb
db.connect()
//Create app()
const app=express()
const port= process.env.PORT || 3000
//Set up for app
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true})) //Read req.body
app.use(express.json()) //Using json 
app.use(cookie('skhdhksgakbsb')) //Read req.cookies
app.use(express.static('public')) //Using static files
app.use(override('_method')) //Using form update and form delete 

//Check user
app.use(checkUser.checkUser)
//Get /sites
app.use('/',siteRouter)
//[get] /user
app.use('/user',userRouter)
//[get] /products
app.use('/products',productRouter)

//Running app()
app.listen(port,()=>console.log(`App is running on port ${port}`))