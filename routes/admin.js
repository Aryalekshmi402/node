const { request } = require("express");

const express=require('express')
const router=express.Router();

router.get('/mine',(req,res,next)=>
{
//console.log('in another middleware');
res.send('<form action="/details" method="POST"><input type="text" name="title"><button type="text">ADD DETAILS</button></form>');
});

router.post('/details',(req,res,next)=>
{
 console.log(req.body);
 res.redirect('/');
})



module.exports=router;