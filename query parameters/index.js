const express=require('express');
const app=express();
const port=3000;
var users=[
    {id:0, name:'thọ', age:23},
    {id:1, name:'sơn', age:23},
    {id:2, name:'tú', age:23},
    {id:3, name:'na', age:23},
    {id:4, name:'phương', age:23}
];
var name="my friends";
app.set('view engine','pug');
app.set('views','./views');
app.listen(port,()=>console.log(`App is running in port ${port}`));

app.get('/',(req,res)=>{
    res.render('index',{
        name: name
    });
});
app.get('/users',(req,res)=>{
    res.render('./users/index',{
        users: users
    });
})
app.get('/users/search',(req,res)=>{
    var q=req.query.q;
    var matchUsers=users.filter((user)=>{
        return user.name.includes(q);
    });
    res.render('./users/index',{
        users:matchUsers
    });
});