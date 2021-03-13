const mongoose=require('mongoose')
const md5=require('md5')
const Admin=require('./models/Admin')

const uri='mongodb+srv://dangvantho:dangvanthopro@cluster0.xluxf.mongodb.net/images'
mongoose.connect(uri)
        .then(()=>console.log('Connect sucess!!!'))


Admin.create({
    name:'admin',
    password: md5('admin123123admin@'),
}).then(res=>console.log(res))
.catch(e=>console.log(e))        