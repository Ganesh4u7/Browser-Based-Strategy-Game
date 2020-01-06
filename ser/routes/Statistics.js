var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stat = require('../public/models/Statistics');
var Stats= mongoose.model('Statistics',Stat);

router.get('/AttackingRank',function (req,res) {
    Stats.find({},['PlayerName','AttackPoints'],{sort:{AttackPoints:-1}},function (err,data) {
         res.send(data);
        
    });
    
});
router.get('/DefenseRank',function (req,res) {
    Stats.find({},['PlayerName','DefensePoints'],{sort:{DefensePoints:-1}},function (err,data) {
        res.send(data);

    });

});

module.exports=router;