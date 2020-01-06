const express = require('express');
const app =express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/game");
 var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));db.once("open", function(callback) {
        console.log("Connection succeeded.");
    });

var villagerSchema = require('../public/models/villagers');
var Villager = mongoose.model('avail',villagerSchema);
var BarracksTroops = require('../public/models/Barracks');
var BTroops = mongoose.model('BTroops',BarracksTroops);
var BuildLevelSchema = require('../public/models/BuildingLevels');
var BuildLevel = mongoose.model('BuildLevels',BuildLevelSchema);
var ToolsUpgradeSchema = require('../public/models/ToolsUpgrade');
var Tools = mongoose.model('toolsUpgrade',ToolsUpgradeSchema);
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);
var BuildingResources = require('../public/models/BuildingResources');
var BuildRes = mongoose.model('buildres',BuildingResources);
var ToolsLevelSchema = require('../public/models/ToolsLevels');
var ToolsLevel = mongoose.model('toolsLevels',ToolsLevelSchema);
var StableTroops = require('../public/models/Stable');
var STroops = mongoose.model('STroops',StableTroops);
var WorkShopTroops = require('../public/models/WorkShop');
var WTroops = mongoose.model('WTroops',WorkShopTroops);
/*
 var rog = new resource({
        PlayerName: "RogerFederer",
         food:2345,
         wood:1789,
         iron:1234,
         gold:897

 });

 Bee.save(function(error) {
         console.log("Your data has been saved!");
     if (error) {
             console.error(error);
          }
     });
     */

var rog = new Villager({
    PlayerName:"RogerFederer",
    TotalVillgers:93,
    AvailableVillagers:28,
    InFood:11,
    InWood:21,
    InIron:15,
    InGold:18,
    v1:{
        food:200,
        wood:100,
        iron:120,
        gold:140
        }
});/*
rog.save(function (error) {
    console.log("your data is saved");
    if(error)
    {
        console.error(error);
    }

});

Villager.find({'PlayerName':'RogerFederer'},{_id:0}, function(err, data) {
var foo = data[0].InFood;
console.log(foo);
*/

//res.send(foo);
/*
var rog = new BuildLevel({
    PlayerName:"RogerFederer",
    TownCenter:1,
    Barracks:1,
    Stable:1,
    BlackSmith:1,
    MarketPlace:1,
    Workshop:1

});
rog.save(function(error) {
    console.log("Your data has been saved!");
    if (error) {
        console.error(error);
    }
});
BuildLevel.find({'BuildingName':'Stable'},{_id:0},function (err,data) {

    console.log(data);

});




rog = new Tools(
    {
        PlayerName:"RogerFederer",
        Infantry: {
            food: 1000,
            wood: 1600,
            iron: 2500,
            gold: 1200
        },
        Cavalry: {
            food: 1300,
            wood: 1700,
            iron: 3000,
            gold: 1400
        },
        SeigeWeapons: {
            food: 1100,
            wood: 2300,
            iron: 2000,
            gold: 1700
        }
    }
);*/
/*
var rog = new BuildRes({
    PlayerName : "RogerFederer",

    TownCenter: {
        food: 1200,
        wood: 1600,
        iron: 800,
        gold: 1600
    },
    MarketPlace: {
        food: 1000,
        wood: 1500,
        iron: 600,
        gold: 500
    },
    Barracks: {
        food: 800,
        wood: 1400,
        iron: 1200,
        gold: 800
    },
    Stable: {
        food: 900,
        wood: 1500,
        iron: 1400,
        gold: 700
    },
    Workshop: {
        food: 700,
        wood: 1800,
        iron: 1400,
        gold: 800
    },
    BlackSmith: {
        food: 600,
        wood: 1200,
        iron: 1400,
        gold: 1000
    }
});

var rog = new BTroops({
    PlayerName :"RogerFederer",
    t1count:0,
    t1attack:80,
    t1defense:35,
    t1attack1:0,
    t2count:0,
    t2attack:40,
    t2defense:75,
    t2attack1:0,
    t3count:0,
    t3attack:45,
    t3defense:50,
    t3attack1:0,
    t1:{
        food:120,
        wood:140,
        iron:160,
        gold:100
    },
    t2:{
        food:100,
        wood:120,
        iron:140,
        gold:100
    },
    t3:{
        food:120,
        wood:100,
        iron:160,
        gold:120
    }


});


var rog = new ToolsLevel({
    PlayerName: "RogerFederer",
    Infantry:1,
    Cavalry:1,
    SeigeWeapons:1
});*/
rog.save(function(error) {
    console.log("Your data has been saved!");
    if (error) {
        console.error(error);
    }
});


app.listen(3000,function () {
   // console.log("connection is made");

});