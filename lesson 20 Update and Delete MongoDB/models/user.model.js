const mongoose=require('mongoose')
const userChema=mongoose.Schema({
    name:String,
    phone:String,
    password:String,
    cart:Array,
})
const User=mongoose.model('User',userChema,'users')
module.exports=User