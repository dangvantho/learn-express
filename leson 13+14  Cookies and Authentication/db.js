const low=require('lowdb')
const FileSync=require('lowdb/adapters/FileSync')
const adapters=new FileSync('db.json')
const db=low(adapters)
//Set up Daufaults db.json when it is empty
db.defaults({users:[]}).write()
module.exports=db