//const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/mine',(req,res,next)=>
{
//console.log('in another middleware');
res.send('<form action="/details" method="POST"><input type="text" name="title"><button type="text">ADD DETAILS</button></form>');
});

app.use('/details',(req,res,next)=>
{
 console.log(req.body);
 res.redirect('/');
})


app.use('/',(req,res,next)=>
{
//console.log(' middleware');
res.send('<h1>embrace your failure</h1>');
});
//const server=http.createServer(app);
//server.listen(3000);
app.listen(3000);