var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);
var ToolsUpgradeSchema = require('../public/models/ToolsUpgrade');
var Tools = mongoose.model('toolsUpgrade',ToolsUpgradeSchema);
var BarracksTroops = require('../public/models/Barracks');
var BTroops = mongoose.model('BTroops',BarracksTroops);
var ToolsLevelSchema = require('../public/models/ToolsLevels');
var ToolsLevel = mongoose.model('toolsLevels',ToolsLevelSchema);
var StableTroops = require('../public/models/Stable');
var STroops = mongoose.model('STroops',StableTroops);
var WorkShopTroops = require('../public/models/WorkShop');
var WTroops = mongoose.model('WTroops',WorkShopTroops);

router.post('/Infantry',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        Tools.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            ToolsLevel.find({'PlayerName':req.body.PlayerName},function (err2,data2) {
                var lvl = data2[0].Infantry + 1;
                console.log(lvl);
            var food1=data1[0].Infantry.food *(lvl *3),
                wood1=data1[0].Infantry.wood *(lvl *3),
                iron1=data1[0].Infantry.iron *(lvl *3),
                gold1=data1[0].Infantry.gold *(lvl *3);
            if(food>=food1 & wood>=wood1 & iron>=iron1 & gold>=gold1) {
                var conditions = {PlayerName: req.body.PlayerName}
                    , update = {
                    food: food - food1,
                    wood: wood - wood1,
                    iron: iron - iron1,
                    gold: gold - gold1
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


                BTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {

                    var t1a = data[0].t1attack, t1d = data[0].t1defense;
                    var t2a = data[0].t2attack, t2d = data[0].t2defense;
                    var t3a = data[0].t3attack, t3d = data[0].t3defense;


                    var conditions = {PlayerName: req.body.PlayerName}
                        , update = {
                            t1attack: t1a + 5,
                            t1defense: t1d + 5,
                            t2attack: t2a + 5,
                            t2defense: t2d + 5,
                            t3attack: t3a + 5,
                            t3defense: t3d + 5
                        },
                        options = {multi: true};
                    BTroops.update(conditions, update, options, function (err, data) {
                        if (err) {
                            console.error(err);
                        }
                        else {
                            console.log(data);
                        }
                    });

                    var conditions = {PlayerName: req.body.PlayerName},
                        update = {
                            Infantry: lvl
                        },
                        options = {multi: true};
                    ToolsLevel.update(conditions, update, options, function (err, data) {
                        if (err) {
                            console.error(err);
                        }
                        else {
                            console.log(data);
                        }
                    });

                });
                res.send("Infantry Weaponery is Being Upgraded");
            }
            else{
                res.send("Not Enough Resources to Upgrade");
            }
            });
          });
        });
});
router.post('/Cavalry',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        Tools.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            ToolsLevel.find({'PlayerName':req.body.PlayerName},function (err2,data2) {
                var lvl = data2[0].Cavalry +1;


            var food1=data1[0].Cavalry.food *(lvl *3),
                wood1=data1[0].Cavalry.wood *(lvl *3),
                iron1=data1[0].Cavalry.iron *(lvl *3),
                gold1=data1[0].Cavalry.gold *(lvl *3);
            if(food>=food1 & wood>=wood1 & iron>=iron1 & gold>=gold1) {
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - food1,
                wood: wood - wood1,
                iron: iron - iron1,
                gold: gold - gold1
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


            STroops.find({'PlayerName':req.body.PlayerName},function (err,data) {

                var t1a=data[0].s1attack,t1d=data[0].s1defense;
                var t2a=data[0].s2attack,t2d=data[0].s2defense;
                var t3a=data[0].s3attack,t3d=data[0].s3defense;


                var conditions = {PlayerName: req.body.PlayerName}
                    , update = {
                        s1attack : t1a +5,
                        s1defense : t1d+5,
                        s2attack : t2a +5,
                        s2defense : t2d +5,
                        s3attack : t3a +5,
                        s3defense :t3d +5
                    },
                    options = {multi: true};
                STroops.update(conditions, update, options, function (err, data) {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(data);
                    }
                });
                var conditions = {PlayerName :req.body.PlayerName},
                    update={
                        Cavalry: lvl
                    },
                     options = {multi: true};
                ToolsLevel.update(conditions, update, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);}
                });
             });
                res.send("Cavalry Weaponery is Being Upgraded");
            }
            else{
                res.send("Not Enough Resources to Upgrade");
            }
            });
        });
    });



});


router.post('/SeigeWeapons',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        Tools.find({'PlayerName':req.body.PlayerName},function (err,data1) {
            ToolsLevel.find({'PlayerName':req.body.PlayerName},function (err2,data2) {
                var lvl = data2[0].SeigeWeapons +1;

            var food1=data1[0].SeigeWeapons.food *(lvl *3),
                wood1=data1[0].SeigeWeapons.wood *(lvl *3),
                iron1=data1[0].SeigeWeapons.iron *(lvl *3),
                gold1=data1[0].SeigeWeapons.gold *(lvl *3);
                if(food>=food1 & wood>=wood1 & iron>=iron1 & gold>=gold1) {
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - food1,
                wood: wood - wood1,
                iron: iron - iron1,
                gold: gold - gold1
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


            WTroops.find({'PlayerName':req.body.PlayerName},function (err,data) {
                console.log(data[0]);
                var t1a=data[0].w1attack1;
                var t2a=data[0].w2attack1;
                var t3a=data[0].w3attack1;


                var conditions = {PlayerName: req.body.PlayerName}
                    , update = {
                        w1attack1 : t1a +5,
                        w2attack1 : t2a +5,
                        w3attack1 : t3a +5

                    },
                    options = {multi: true};
                WTroops.update(conditions, update, options, function (err, data) {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(data);
                    }
                });
                var conditions = {PlayerName :req.body.PlayerName},
                    update={
                        SeigeWeapons: lvl
                    },
                     options = {multi: true};
                ToolsLevel.update(conditions, update, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);}
                });
            });
                res.send("Seige Weaponery is Being Upgraded");
            }
        else{
                res.send("Not Enough Resources to Upgrade");
            }
        });
    });
});
});
module.exports = router;

