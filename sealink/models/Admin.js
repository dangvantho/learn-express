const mongoose=require('mongoose')
const adminSchema=mongoose.Schema({
    name:String,
    password:String,
})
const Admin=mongoose.model('sealinkAdmin',adminSchema)
module.exports=Admin