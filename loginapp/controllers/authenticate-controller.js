var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
        res.send('there are some error with query')
        
          /*res.json({
            status:false,
            message:'there are some error with query'
            })*/
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              res.send('successfully authenticated')
              
                /*res.json({
                    status:true,
                    message:'successfully authenticated'
                })*/
            }else{
              res.send('Email and password does not match')
                /*res.json({
                  status:false,
                  message:"Email and password does not match"
                 });*/
            }
          
        }
        else{
          res.send('Email does not exits')
          /*res.json({
              status:false,    
            message:"Email does not exits"
          });*/
        }
      }
    });
}

