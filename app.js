//const http=require('http');
const path=require('path');
const express=require('express');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const bodyParser=require('body-parser');
const { request } = require('express');
const app=express();
app.set('view engine','pug');
app.set('views','views');


app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

//const server=http.createServer(app);
//server.listen(3000);
app.listen(3000);