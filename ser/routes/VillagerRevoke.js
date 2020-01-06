var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var villagerSchema = require('../public/models/villagers');
var Villager = mongoose.model('avails',villagerSchema);
router.post('/UWood',function (req,res) {

    Villager.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data){
        var dat =  data[0].InWood - req.body.InWood ;
        var Avil= data[0].AvailableVillagers + req.body.InWood;
        var conditions = { PlayerName: req.body.PlayerName }
            , update = { InWood: dat ,AvailableVillagers: Avil}
            , options = { multi: true };
        Villager.update(conditions, update, options, function (err1,data1) {
            if(err1){   console.error(err1);}
            else{  console.log(data1);}
        });
        console.log("InWood :"+dat);
        console.log("AvailableVillager :" +Avil);
        res.send({type:"POST", name:dat});});

});
router.post('/UIron',function (req,res) {

    Villager.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data){
        var dat = req.body.InIron - data[0].InIron ;
        var Avil= data[0].AvailableVillagers + req.body.InIron;
        var conditions = { PlayerName: req.body.PlayerName }
            , update = { InIron: dat ,AvailableVillagers: Avil}
            , options = { multi: true };
        Villager.update(conditions, update, options, function (err1,data1) {
            if(err1){   console.error(err1);}
            else{  console.log(data1);}
        });
        console.log("InIron :"+dat);
        console.log("AvailableVillager :" +Avil);
        res.send({type:"POST", name:dat});});

});
router.post('/UFood',function (req,res) {

    Villager.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data){
        var dat =  data[0].InFood - req.body.InFood ;
        var Avil= (data[0].AvailableVillagers) + (req.body.InFood);

        var conditions = { PlayerName: req.body.PlayerName }
            , update = { InFood: dat ,AvailableVillagers: Avil}
            , options = { multi: true };
        Villager.update(conditions, update, options, function (err1,data1) {
            if(err1){   console.error(err1);}
            else{  console.log(data1);}
        });
        console.log("InFood :"+dat);
        console.log("AvailableVillager :" +Avil);
        res.send({type:"POST", name:dat});});

});
router.post('/UGold',function (req,res) {

    Villager.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data){
        var dat =  data[0].InGold - req.body.InGold ;
        var Avil= data[0].AvailableVillagers + req.body.InGold;
        var conditions = { PlayerName: req.body.PlayerName }
            , update = { InGold: dat ,AvailableVillagers: Avil}
            , options = { multi: true };
        Villager.update(conditions, update, options, function (err1,data1) {
            if(err1){   console.error(err1);}
            else{  console.log(data1);}
        });
        console.log("InGold :"+dat);
        console.log("AvailableVillager :" +Avil);
        res.send({type:"POST", name:dat});});

});
module.exports = router;
