const express=require('express');
const app=express();
const port=3000;
var users=[
    {id:0, name:'thọ', age: 23},
    {id:0, name:'tú', age: 23},
    {id:0, name:'sơn', age: 23},
    {id:0, name:'ngọc anh', age: 23},
    {id:0, name:'phương', age: 23}
];
var name='500 anh em';
app.set('view engine', 'pug')
app.set('views','./views')
app.listen(port,()=>console.log(`App is running on port ${port}`));
app.get('/',(request,response)=>{
    response.render('index',{
        name: name
    })
});
app.get('/users',(request,response)=>{
    response.render('./users/index',{
        users: users
    })
});