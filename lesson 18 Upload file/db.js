const low=require('lowdb')
const FileSync=require('lowdb/adapters/FileSync')
const adapters=new FileSync('db.json')
const db=low(adapters)
//Set up Defaults db.json
db.defaults({
    users:[],
    products:[]
}).write()
module.exports=db 