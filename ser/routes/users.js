var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserSchema = require('../public/models/User');
var User = mongoose.model('User',UserSchema);
const jwt = require('jsonwebtoken');
// var app = require('../app');
/* GET users listing. */

router.post('/create', function(req, res, next) {
  // res.send('respond with a resource'+req.body.email);
  // user.save();
  var user = new User(req.body);
  user.save(function(err,data){
    if(err){
      if(err.message.indexOf('duplicate key error') !== -1){
          res.send('PlayerName Already exists');
      }
      else{
      res.send('some error occured Please Try again later');
        
      }
    }
    else{
      res.send('SignUp Successful ! Please Login');
      console.log('account created');
    }
  })
});

router.post('/login', function(req, res, next) {
  // res.send('respond with a resource'+req.body.email);
  User.findOne({name:req.body.name},function(err,data){
  if(err)
    res.send("Some error Occured Please try again")
  if(!data){
    res.json({
          success: false,
          message: 'User Not Found'
        });
  }
  else if(data){

    if (data.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
          const payload = {
      PlayerName: data.name 
    };

       var token = jwt.sign(payload, 'federer', {
          expiresIn : 1440 // expires in 24 hours
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

  }
})
});

router.post('/check',function(req,res){
  res.send('this is check')
    console.log('hello');
})

module.exports = router;
