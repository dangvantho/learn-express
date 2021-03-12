const mongoose=require('mongoose')
const imgServiceShema= new mongoose.Schema({
    files_id:mongoose.SchemaTypes.ObjectId,
    n:Number,
})
const imgService=mongoose.model('services.chunk',imgServiceShema)
module.exports=imgService