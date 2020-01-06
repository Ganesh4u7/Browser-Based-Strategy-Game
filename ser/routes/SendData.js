var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);
var BuildLevelSchema = require('../public/models/BuildingLevels');
var BuildLevel = mongoose.model('BuildLevels',BuildLevelSchema);
var BuildingResources = require('../public/models/BuildingResources');
var BuildRes = mongoose.model('buildres',BuildingResources);
var villagerSchema = require('../public/models/villagers');
var Villager = mongoose.model('avails',villagerSchema);
var StableTroops = require('../public/models/Stable');
var STroops = mongoose.model('STroops',StableTroops);
var WorkShopTroops = require('../public/models/WorkShop');
var WTroops = mongoose.model('WTroops',WorkShopTroops);
var BarracksTroops = require('../public/models/Barracks');
var BTroops = mongoose.model('BTroops',BarracksTroops);
var ToolsLevelSchema = require('../public/models/ToolsLevels');
var ToolsLevel = mongoose.model('toolsLevels',ToolsLevelSchema);
var ToolsUpgradeSchema = require('../public/models/ToolsUpgrade');
var Tools = mongoose.model('toolsUpgrade',ToolsUpgradeSchema);
var Notification= require('../public/models/Notification');
var Notific = mongoose.model('Notifications',Notification);
// const jwt = require('jsonwebtoken');
// router.use(function(req, res, next) {

// 	// check header or url parameters or post parameters for token
// 	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

// 	// decode token
// 	if (token) {

// 		// verifies secret and checks exp
// 		jwt.verify(token, 'federer', function(err, decoded) {
// 			if (err) {
// 				return res.json({ success: false, message: 'Failed to authenticate token.' });
// 			} else {
// 				// if everything is good, save to request for use in other routes
// 				req.decoded = decoded;
// 				next();
// 			}
// 		});

// 	} else {

// 		// if there is no token
// 		// return an error
// 		return res.status(403).send({
// 			success: false,
// 			message: 'No token provided.'
// 		});

// 	}

// });

router.post('/Wood',function (req,res) {
    console.log(req.body.PlayerName);
    Villager.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var InWood = data[0].InWood,CP= InWood * 10,AvailableVillagers= data[0].AvailableVillagers;
        res.send(JSON.stringify(
            {
                InWood : InWood,
                CurrentProduction : CP,
                AvailableVillagers : AvailableVillagers

            }));
    });
});
router.post('/Gold',function (req,res) {
    Villager.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var InGold = data[0].InGold,CP= InGold * 10,AvailableVillagers= data[0].AvailableVillagers;

        res.send(JSON.stringify(
            {
                InGold : InGold,
                CurrentProduction : CP,
                AvailableVillagers : AvailableVillagers

            }));
    });
});
router.post('/Food',function (req,res) {
    Villager.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var InFood = data[0].InFood,CP= InFood * 10,AvailableVillagers= data[0].AvailableVillagers;

        res.send(JSON.stringify(
            {
                InFood : InFood,
                CurrentProduction : CP,
                AvailableVillagers : AvailableVillagers

            }));
    });
});
router.post('/Iron',function (req,res) {
    Villager.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var InIron = data[0].InIron,CP= InIron * 10,AvailableVillagers= data[0].AvailableVillagers;

        res.send(JSON.stringify(
            {
                InIron : InIron,
                CurrentProduction : CP,
                AvailableVillagers : AvailableVillagers

            }));
    });
});
router.post('/Barracks',function (req,res) {
    BuildRes.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food=data[0].Barracks.food,wood=data[0].Barracks.wood,gold=data[0].Barracks.gold,iron=data[0].Barracks.iron;
        BuildLevel.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            var level=data1[0].Barracks +1;
            BTroops.find({'PlayerName':req.body.PlayerName},function (err,data2) {
                res.send(JSON.stringify({
                    Bfood:food *(level*3),
                    Bwood:wood *(level*3),
                    Bgold:gold *(level*3),
                    Biron:iron *(level*3),
                    level: level,
                    t1f:data2[0].t1.food,
                    t1w:data2[0].t1.wood,
                    t1i:data2[0].t1.iron,
                    t1g:data2[0].t1.gold,
                    t2f:data2[0].t2.food,
                    t2w:data2[0].t2.wood,
                    t2i:data2[0].t2.iron,
                    t2g:data2[0].t2.gold,
                    t3f:data2[0].t3.food,
                    t3w:data2[0].t3.wood,
                    t3i:data2[0].t3.iron,
                    t3g:data2[0].t3.gold,
                    t1attack:data2[0].t1attack,
                    t1defense:data2[0].t1defense,
                    t1attack1:data2[0].t1attack1,
                    t2attack:data2[0].t2attack,
                    t2defense:data2[0].t2defense,
                    t2attack1:data2[0].t2attack1,
                    t3attack:data2[0].t3attack,
                    t3defense:data2[0].t3defense,
                    t3attack1:data2[0].t3attack1,
                    t1count:data2[0].t1count,
                    t2count:data2[0].t2count,
                    t3count:data2[0].t3count

                }));
            });
        });
    });
});
router.post('/Stable',function (req,res) {
    BuildRes.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food=data[0].Stable.food,wood=data[0].Stable.wood,gold=data[0].Stable.gold,iron=data[0].Stable.iron;
        BuildLevel.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            var level=data1[0].Stable +1;
            STroops.find({'PlayerName':req.body.PlayerName},function (err,data2) {
                res.send(JSON.stringify({
                    Bfood:food *(level*3),
                    Bwood:wood *(level*3),
                    Bgold:gold *(level*3),
                    Biron:iron *(level*3),
                    level: level,
                    s1f:data2[0].s1.food,
                    s1w:data2[0].s1.wood,
                    s1i:data2[0].s1.iron,
                    s1g:data2[0].s1.gold,
                    s2f:data2[0].s2.food,
                    s2w:data2[0].s2.wood,
                    s2i:data2[0].s2.iron,
                    s2g:data2[0].s2.gold,
                    s3f:data2[0].s3.food,
                    s3w:data2[0].s3.wood,
                    s3i:data2[0].s3.iron,
                    s3g:data2[0].s3.gold,
                    s1attack:data2[0].s1attack,
                    s1defense:data2[0].s1defense,
                    s1attack1:data2[0].s1attack1,
                    s2attack:data2[0].s2attack,
                    s2defense:data2[0].s2defense,
                    s2attack1:data2[0].s2attack1,
                    s3attack:data2[0].s3attack,
                    s3defense:data2[0].s3defense,
                    s3attack1:data2[0].s3attack1,
                    s1count:data2[0].s1count,
                    s2count:data2[0].s2count,
                    s3count:data2[0].s3count
                }));
            });
        });
    });
});
router.post('/Workshop',function (req,res) {
    BuildRes.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food=data[0].Workshop.food,wood=data[0].Workshop.wood,gold=data[0].Workshop.gold,iron=data[0].Workshop.iron;
        BuildLevel.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            var level=data1[0].Workshop +1 ;
            WTroops.find({'PlayerName':req.body.PlayerName},function (err,data2) {
                res.send(JSON.stringify({
                    Bfood:food *(level*3),
                    Bwood:wood *(level*3),
                    Bgold:gold *(level*3),
                    Biron:iron *(level*3),
                    level: level,
                    w1f:data2[0].w1.food,
                    w1w:data2[0].w1.wood,
                    w1i:data2[0].w1.iron,
                    w1g:data2[0].w1.gold,
                    w2f:data2[0].w2.food,
                    w2w:data2[0].w2.wood,
                    w2i:data2[0].w2.iron,
                    w2g:data2[0].w2.gold,
                    w3f:data2[0].w3.food,
                    w3w:data2[0].w3.wood,
                    w3i:data2[0].w3.iron,
                    w3g:data2[0].w3.gold,
                    w1attack:data2[0].w1attack,
                    w1defense:data2[0].w1defense,
                    w1attack1:data2[0].w1attack1,
                    w2attack:data2[0].w2attack,
                    w2defense:data2[0].w2defense,
                    w2attack1:data2[0].w2attack1,
                    w3attack:data2[0].w3attack,
                    w3defense:data2[0].w3defense,
                    w3attack1:data2[0].w3attack1,
                    w1count:data2[0].w1count,
                    w2count:data2[0].w2count,
                    w3count:data2[0].w3count
                }));
            });
        });
    });
});
router.post('/TownCenter',function (req,res) {
    BuildRes.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food=data[0].TownCenter.food,wood=data[0].TownCenter.wood,gold=data[0].TownCenter.gold,iron=data[0].TownCenter.iron;
        BuildLevel.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            Villager.find({'PlayerName':req.body.PlayerName},function (err,data2) {
                var v1f = data2[0].v1.food, v1w = data2[0].v1.wood, v1i = data2[0].v1.iron, v1g = data2[0].v1.gold;
                 var Avail= data2[0].AvailableVillagers;


                var level = data1[0].TownCenter +1;

                res.send(JSON.stringify({
                    Bfood: food * (level * 3),
                    Bwood: wood * (level * 3),
                    Bgold: gold * (level * 3),
                    Biron: iron * (level * 3),
                    v1f:v1f,
                    v1w:v1w,
                    v1i:v1i,
                    v1g:v1g,
                    level: level,
                    Avail:Avail

                }));
            });
        });
    });


});
router.post('/BlackSmith',function (req,res) {
    BuildRes.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food=data[0].BlackSmith.food,wood=data[0].BlackSmith.wood,gold=data[0].BlackSmith.gold,iron=data[0].BlackSmith.iron;
        BuildLevel.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            var level=data1[0].BlackSmith +1;
            Tools.find({'PlayerName':req.body.PlayerName},function (err,data2) {
                ToolsLevel.find({'PlayerName':req.body.PlayerName},function (err,data3) {
                    var Ilvl=data3[0].Infantry + 1 ,Clvl=data3[0].Cavalry+1,SWlvl=data3[0].SeigeWeapons+1;

                    res.send(JSON.stringify({
                        Bfood:food *(level*3),
                        Bwood:wood *(level*3),
                        Bgold:gold *(level*3),
                        Biron:iron *(level*3),
                        i1f:data2[0].Infantry.food * (Ilvl * 3),
                        i1w:data2[0].Infantry.wood * (Ilvl * 3),
                        i1i:data2[0].Infantry.iron * (Ilvl * 3),
                        i1g:data2[0].Infantry.gold * (Clvl * 3),
                        c2f:data2[0].Cavalry.food * (Clvl * 3),
                        c2w:data2[0].Cavalry.wood * (Clvl * 3),
                        c2i:data2[0].Cavalry.iron * (Clvl * 3),
                        c2g:data2[0].Cavalry.gold * (Clvl * 3),
                        sw3f:data2[0].SeigeWeapons.food * (SWlvl * 3),
                        sw3w:data2[0].SeigeWeapons.wood * (SWlvl * 3),
                        sw3i:data2[0].SeigeWeapons.iron * (SWlvl * 3),
                        sw3g:data2[0].SeigeWeapons.gold * (SWlvl * 3),
                        Ilvl:Ilvl,
                        Clvl:Clvl,
                        SWlvl:SWlvl,
                        level:level

                    }));
                });
            });
        });
    });
});
router.post('/MarketPlace',function (req,res){
    BuildRes.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food=data[0].MarketPlace.food,wood=data[0].MarketPlace.wood,gold=data[0].MarketPlace.gold,iron=data[0].MarketPlace.iron;
        BuildLevel.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            var level = data1[0].MarketPlace +1;

            res.send(JSON.stringify({
                Bfood: food * (level * 3),
                Bwood: wood * (level * 3),
                Bgold: gold * (level * 3),
                Biron: iron * (level * 3),
                level: level

            }));
        });
    });
});

router.post('/HomePage',function (req,res) {
    if(req.body.PlayerName){
        Villager.find({'PlayerName':req.body.PlayerName},function (err,data) {
            resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err1, data1) {
                Notific.find({'PlayerName':req.body.PlayerName},function (err2,data2){
                    var AI=data2[0].AttacksIncoming,AO=data2[0].AttacksOutgoing,RI=data2[0].ReinfIncoming,RO=data2[0].ReinfOutgoing,IT=data2[0].IncomingTroops;
                    var food = data1[0].food, wood = data1[0].wood, iron = data1[0].iron, gold = data1[0].gold;
                    var InFood = data[0].InFood, CPFood = InFood * 10;
                    var InWood = data[0].InWood, CPWood = InWood * 10;
                    var InGold = data[0].InGold, CPGold = InGold * 10;
                    var InIron = data[0].InIron, CPIron = InIron * 10;

                    res.send(JSON.stringify(
                        {
                            food:food,
                            wood:wood,
                            iron:iron,
                            gold:gold,
                            CPFood:CPFood,
                            CPWood:CPWood,
                            CPIron:CPIron,
                            CPGold:CPGold,
                            AttacksIncoming:AI,
                            AttacksOutgoing:AO,
                            ReinfIncoming:RI,
                            ReinfOutgoing:RO,
                            IncomingTroops:IT

                        }));
                });
            });
        });
    }

});
router.post('/WatchTower',function (req,res){
    BuildRes.find({'PlayerName':req.body.PlayerName},function (err,data) {
        var food=data[0].WatchTower.food,wood=data[0].WatchTower.wood,gold=data[0].WatchTower.gold,iron=data[0].WatchTower.iron;
        BuildLevel.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            var level = data1[0].WatchTower +1;
            console.log(level);

            res.send(JSON.stringify({
                Bfood: food * (level * 3),
                Bwood: wood * (level * 3),
                Bgold: gold * (level * 3),
                Biron: iron * (level * 3),
                level: level

            }));
        });
    });
});
router.post('/TM',function (req,res) {
    BTroops.find({'PlayerName':req.body.PlayerName},function (err,data) {
        STroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            WTroops.find({'PlayerName':req.body.PlayerName},function (err2,data2) {
                var t1=data[0].t1count,t2=data[0].t2count,
                    t3=data[0].t3count,t4=data1[0].s1count,
                    t5=data1[0].s2count,t6=data1[0].s3count,
                    t7=data2[0].w1count,t8=data2[0].w2count,
                    t9=data2[0].w3count;

                res.send(JSON.stringify({
                    t1:t1,
                    t2:t2,
                    t3:t3,
                    t4:t4,
                    t5:t5,
                    t6:t6,
                    t7:t7,
                    t8:t8,
                    t9:t9
                }));
            });
        });
    });
});



module.exports= router;