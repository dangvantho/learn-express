const express = require("express");
const app = express();
const path=require('path')
const db=require('./config/connect')
const adminRoute=require('./routes/admin.route')
const userRoute=require('./routes/user.route')
const loginRoute=require('./routes/login.route')
const verifyToken=require('./middleware/verify.token')
const cookie=require('cookie-parser')

//Connect to Database
db.connect

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))
app.use(cookie())

// /admin/
app.use('/admin',verifyToken.verify,adminRoute)

// /users
app.use('/',userRoute)

//  /login
app.use('/login',loginRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});