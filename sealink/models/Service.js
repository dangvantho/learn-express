const mongoose= require('mongoose')
const serviceSchema=new mongoose.Schema({
    length:Number,
    chunkSize:Number,
    uploadDate: Date,
    filename:String,
    md5:String,
    contentType:String,
})
const Service=mongoose.model('services.file',serviceSchema)
module.exports=Service