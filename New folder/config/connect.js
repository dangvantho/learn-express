const mongoose=require('mongoose')
const db={
    connect: mongoose.connect('mongodb+srv://dangvantho:dangvanthopro@cluster0.xluxf.mongodb.net/images')
                     .then(()=>console.log('connect successs!!!'))
}
module.exports=db