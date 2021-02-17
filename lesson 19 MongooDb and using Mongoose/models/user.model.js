const mongoose=require('mongoose')
const userShema=new mongoose.Schema({
    name:String,
    phone:String,
    password:String,
})
const User=mongoose.model('User',userShema)
module.exports=User