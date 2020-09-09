const express=require('express')
const app=express();
const users=[];
const bodyParser=require('body-parser')
const expressHbs=require('express-handlebars')
app.set('hbs',expressHbs({defaultLayout:'main-layout',extname:'hbs'}))
app.set('view engine','pug')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res,next)=>
{
    res.render('index',{pageTitle:'Adduser'});
})
app.get('/users',(req,res,next)=>
{
    res.render('users',{pageTitle:'users',users: users,hasUsers:users.length>0});
})
app.post('/add-user',(req,res,next)=>{
    users.push({name:req.body.username});
    res.redirect('/users');
})
app.listen(8000);