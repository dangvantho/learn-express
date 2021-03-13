const mongoose=require('mongoose')
const imgNewShema= new mongoose.Schema({
    files_id:mongoose.SchemaTypes.ObjectId,
    n:Number,
})
const imgNews=mongoose.model('news.chunk',imgNewShema)
module.exports=imgNews