var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var villagerSchema = require('../public/models/villagers');
var Villager = mongoose.model('avails',villagerSchema);
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);

router.post('/CreateVillager',function(req,res){
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        Villager.find({'PlayerName': req.body.PlayerName}, function (err1, data1) {
            var f1 = data1[0].v1.food, w1 = data1[0].v1.wood, i1 = data1[0].v1.iron, g1 = data1[0].v1.gold;
            var tvl=req.body.totVillagers;

 if(food>=f1*tvl & wood>=w1*tvl & iron>=i1*tvl & gold>=g1*tvl) {
     var conditions = {PlayerName: req.body.PlayerName}
         , update = {
         food: food - (f1 * req.body.totVillagers),
         wood: wood - (w1 * req.body.totVillagers),
         iron: iron - (i1 * req.body.totVillagers),
         gold: gold - (g1 * req.body.totVillagers)
     }
         , options = {multi: true};
     resource.update(conditions, update, options, function (err, data) {
         if (err) {
             console.error(err);
         }
         else {
             console.log(data);
         }
     });
     var villagerCount = 0;
     var totalVillagers = req.body.totVillagers;
     var villagersCreation = setInterval(function () {
         villagerCount += 1;
         Villager.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
             var dat = data[0].AvailableVillagers + 1;
             var dat1 = data[0].TotalVillgers + 1;
             var conditions = {PlayerName: req.body.PlayerName}
                 , update = {AvailableVillagers: dat, TotalVillgers: dat1}
                 , options = {multi: true};
             Villager.update(conditions, update, options, function (err1, data1) {
                 if (err1) {
                     console.error(err1);
                 }
                 else {
                     console.log(data1);
                 }

             });
             console.log("AvailableVillagers :" + dat, "TotalVillagers : " + dat1);

             if (villagerCount == totalVillagers) {
                 res.send("Villagers are created");
                 clearInterval(villagersCreation);
             }

         });

     }, 5000)
 }
 else{
     res.send("Not Enough Resources Available");
 }
    });
    });
});
module.exports =router;