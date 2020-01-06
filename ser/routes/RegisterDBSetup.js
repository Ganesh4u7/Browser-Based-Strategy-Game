const express = require('express');
const app =express();
var mongoose = require("mongoose");
var router = express.Router();

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
var Stat = require('../public/models/Statistics');
var Stats= mongoose.model('Statistics',Stat);
var Reg = require('../public/models/RegNames');
var RegNames= mongoose.model('RegNames',Reg);
var ST = require('../public/models/SecondrayTroops');
var SecTroops=mongoose.model('SecTroops',ST);
var Notification= require('../public/models/Notification');
var Notific = mongoose.model('Notifications',Notification);

router.post('/Setup',function (req,res) {

  var rog = new Villager({
        v1: {
            food: 200,
            wood: 100,
            iron: 120,
            gold: 140
        },
        PlayerName: req.body.PlayerName,
        TotalVillgers: 10,
        AvailableVillagers: 10,
        InFood: 0,
        InWood: 0,
        InIron: 0,
        InGold: 0
    });

    rog.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog1 = new BTroops({
        t1: {
            food: 120,
            wood: 140,
            iron: 160,
            gold: 100
        },
        t2: {
            food: 100,
            wood: 120,
            iron: 140,
            gold: 100
        },
        t3: {
            food: 120,
            wood: 100,
            iron: 160,
            gold: 120
        },
        PlayerName: req.body.PlayerName,
        t1count: 0,
        t1attack: 80,
        t1defense: 35,
        t1attack1: 0,
        t2count: 0,
        t2attack: 40,
        t2defense: 75,
        t2attack1: 0,
        t3count: 0,
        t3attack: 45,
        t3defense: 50,
        t3attack1: 0
    });
    rog1.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog2 = new STroops({
        s1: {
            food: 240,
            wood: 180,
            iron: 260,
            gold: 200
        },
        s2: {
            food: 220,
            wood: 200,
            iron: 240,
            gold: 220
        },
        s3: {
            food: 200,
            wood: 220,
            iron: 260,
            gold: 220
        },
        PlayerName: req.body.PlayerName,
        s1count: 0,
        s1attack: 175,
        s1defense: 65,
        s1attack1: 0,
        s2count: 0,
        s2attack: 75,
        s2defense: 165,
        s2attack1: 0,
        s3count: 0,
        s3attack: 135,
        s3defense: 130,
        s3attack1: 0
    });
    rog2.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });

    var rog3 = new WTroops({
        w1: {
            food: 600,
            wood: 800,
            iron: 650,
            gold: 500
        },
        w2: {
            food: 550,
            wood: 750,
            iron: 600,
            gold: 550
        },
        w3: {
            food: 500,
            wood: 700,
            iron: 700,
            gold: 600
        },
        PlayerName: req.body.PlayerName,
        w1count: 0,
        w1attack: 0,
        w1defense: 0,
        w1attack1: 110,
        w2count: 0,
        w2attack: 0,
        w2defense: 0,
        w2attack1: 130,
        w3count: 0,
        w3attack: 0,
        w3defense: 0,
        w3attack1: 150
    });
    rog3.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });

    var rog4 = new BuildLevel({
        PlayerName: req.body.PlayerName,
        TownCenter: 0,
        Barracks: 0,
        Stable: 0,
        BlackSmith: 0,
        MarketPlace: 0,
        Workshop: 0,
        WatchTower:0
    });
    rog4.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog5 = new BuildRes({
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
        },
        WatchTower:{
            food: 1000,
            wood: 1800,
            iron: 1600,
            gold: 1200
        },
        PlayerName: req.body.PlayerName
    });
    rog5.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog6 = new resource({
        PlayerName: req.body.PlayerName,
        food: 5000,
        wood: 5000,
        iron: 5000,
        gold: 4000
    });
    rog6.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog7 = new SecTroops({
        PlayerName: req.body.PlayerName,
        t1: 0,
        t2: 0,
        t3: 0,
        t4: 0,
        t5: 0,
        t6: 0,
        t7: 0,
        t8: 0,
        t9: 0
    });
    rog7.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog8 = new Stats({
        PlayerName: req.body.PlayerName,
        AttackPoints: 0,
        DefensePoints: 0
    });
    rog8.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog9 = new ToolsLevel({
        PlayerName: req.body.PlayerName,
        Infantry: 0,
        Cavalry: 0,
        SeigeWeapons: 0
    });
    rog9.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog10 = new Tools({
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
        },
        PlayerName: req.body.PlayerName
    });
    rog10.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {
            console.error(error);
        }
    });
    var rog11= new Notific({
        PlayerName:req.body.PlayerName,
        AttacksIncoming:0,
        AttacksOutgoing:0,
        ReinfIncoming:0,
        ReinfOutgoing:0,
        IncomingTroops:0
    });
    rog11.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {console.error(error);}
    });

    var rog12=new RegNames({
        PlayerName:req.body.PlayerName
    });
    rog12.save(function (error) {
        console.log("Your data has been saved!");
        if (error) {console.error(error);}
    });
res.send("YOUR DATABASE SETUP IS COMPLETED SUCCESSFULLY");
});

module.exports= router;