const low=require('lowdb')
const FileSync=require('lowdb/adapters/FileSync')
const adapters=new FileSync('db.json')
const db=low(adapters)
//Set up defaults db.json
db.defaults({
    users:[],
    product:[]
}).write()
module.exports=db