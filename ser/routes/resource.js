var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);
var villagerSchema = require('../public/models/villagers');
var Villager = mongoose.model('avails',villagerSchema);


router.post('/Res',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food= data[0].food, wood = data[0].wood, iron = data[0].iron,gold = data[0].gold;
        Villager.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            var InFood=data1[0].InFood,InWood=data1[0].InWood,InIron=data1[0].InIron,InGold=data1[0].InGold;
            var totVillagers=data1[0].TotalVillgers,availVillagers=data1[0].AvailableVillagers;


        res.send(JSON.stringify(
            {   food: food,
                wood: wood,
                iron: iron,
                gold: gold,
                InWood: InWood,
                InFood: InFood,
                InIron: InIron,
                InGold: InGold,
                TotalVillagers: totVillagers,
                AvailableVillagers:availVillagers

            }));
        });
    });

});
module.exports = router;