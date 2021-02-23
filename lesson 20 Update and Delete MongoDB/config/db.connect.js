const mongoose=require('mongoose')
const url='mongodb+srv://dangvantho:dangvanthopro@cluster0.xluxf.mongodb.net/users'
class db{
    connect(){
        mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
                  .then(()=>console.log('Connect to MongoDB success!!!'))
                  .catch(()=>console.log('Connect to MongoDB failure!!!'))
    }
}
module.exports=new db                