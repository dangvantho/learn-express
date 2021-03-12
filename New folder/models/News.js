const mongoose= require('mongoose')
const newsSchema=new mongoose.Schema({
    length:Number,
    chunkSize:Number,
    uploadDate: Date,
    filename:String,
    md5:String,
    contentType:String,
})
const News=mongoose.model('news.file',newsSchema)
module.exports=News