const low=require('lowdb')
const FileSync=require('lowdb/adapters/FileSync')
const adapters=new FileSync('db.json')
const db=low(adapters)

// Set Defaluts for db when db.json is empty
db.defaults({users:[]}).write()
module.exports=db