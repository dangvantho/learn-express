const low=require('lowdb')
const FileSYnc=require('lowdb/adapters/FileSync')
const adapters=new FileSYnc('db.json')
const db=low(adapters)
//Set up db when db.json is empty
db.defaults({users: []}).write()
module.exports=db