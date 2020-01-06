var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var BuildingLevelSchema = require('../public/models/BuildingLevels');
var BuildLevel = mongoose.model('BuildLevels',BuildingLevelSchema);
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);
var BuildingResources = require('../public/models/BuildingResources');
var BuildRes = mongoose.model('buildres',BuildingResources);

router.post('/UpgradeTC',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food, wood, iron, gold);
        var BL;
        BuildLevel.find({'PlayerName': req.body.PlayerName},function (err,data) {
            BL=data[0].TownCenter;

        });
        BuildRes.find({'PlayerName': req.body.PlayerName}, function (err, data1) {
            var lvl = BL + 1;
            var foo = data1[0].TownCenter.food * (lvl * 3);
            var woo = data1[0].TownCenter.wood * (lvl * 3);
            var iro = data1[0].TownCenter.iron * (lvl * 3);
            var gol = data1[0].TownCenter.gold * (lvl * 3);
            if (food >= foo & wood >= woo & iron >= iro & gold >= gol){
                var conditions = {PlayerName: req.body.PlayerName}
                    , update = {
                    food: food - foo,
                    wood: wood - woo,
                    iron: iron - iro,
                    gold: gold - gol
                }, options = {multi: true};
            resource.update(conditions, update, options, function (err, data) {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log(data);
                }
            });
            var updation = setTimeout(function () {

                var query = {
                    TownCenter: BL + 1
                };
                var conditions = {PlayerName: req.body.PlayerName}
                    ,
                    options = {multi: true};
                BuildLevel.update(conditions, query, options, function (err, data) {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(data);
                    }
                });
                res.send('Building has been successfully updated');
            }, 4000);
        }
        else{
                res.send("Not Enough Resources Available to Upgrade the Building");            }
        });
    });

});
router.post('/UpgradeMP',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food, wood, iron, gold);
        var BL;
        BuildLevel.find({'PlayerName': req.body.PlayerName},function (err,data) {
            BL=data[0].MarketPlace;

        });
        BuildRes.find({'PlayerName': req.body.PlayerName}, function (err, data1) {
            var lvl = BL +1;
            var foo=data1[0].MarketPlace.food *(lvl * 3);
            var woo=data1[0].MarketPlace.wood *(lvl * 3);
            var iro=data1[0].MarketPlace.iron *(lvl * 3);
            var gol=data1[0].MarketPlace.gold *(lvl * 3);
            if (food >= foo & wood >= woo & iron >= iro & gold >= gol){
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - foo,
                wood: wood - woo,
                iron: iron - iro,
                gold: gold - gol
            }, options = {multi: true};
            resource.update(conditions, update, options, function (err, data) {
                if (err) {console.error(err);}
                else {console.log(data);}
            });
            var updation = setTimeout(function () {

                var query = {
                    MarketPlace : BL +1
                };
                var conditions = {PlayerName: req.body.PlayerName}
                    ,
                    options = {multi: true};
                BuildLevel.update(conditions, query, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);
                    }});
                res.send('Building has been successfully updated');
            },4000);
            }
            else{
                res.send("Not Enough Resources Available to Upgrade the Building");            }
        });
    });

});
router.post('/UpgradeBR',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food, wood, iron, gold);
        var BL;
        BuildLevel.find({'PlayerName': req.body.PlayerName},function (err,data) {
            BL=data[0].Barracks;

        });
        BuildRes.find({'PlayerName': req.body.PlayerName}, function (err, data1) {
            var lvl = BL +1;
            var foo=data1[0].Barracks.food *(lvl * 3);
            var woo=data1[0].Barracks.wood *(lvl * 3);
            var iro=data1[0].Barracks.iron *(lvl * 3);
            var gol=data1[0].Barracks.gold *(lvl * 3);
            if (food >= foo & wood >= woo & iron >= iro & gold >= gol){
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - foo,
                wood: wood - woo,
                iron: iron - iro,
                gold: gold - gol
            }, options = {multi: true};
            resource.update(conditions, update, options, function (err, data) {
                if (err) {console.error(err);}
                else {console.log(data);}
            });
            var updation = setTimeout(function () {

                var query = {
                    Barracks : BL +1
                };
                var conditions = {PlayerName: req.body.PlayerName}
                    ,
                    options = {multi: true};
                BuildLevel.update(conditions, query, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);
                    }});
                res.send('Building has been successfully updated');
            },4000);
            }
            else{
                res.send("Not Enough Resources Available to Upgrade the Building");            }
        });
    });

});
router.post('/UpgradeST',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food, wood, iron, gold);
        var BL;
        BuildLevel.find({'PlayerName': req.body.PlayerName},function (err,data) {
            BL=data[0].Stable;

        });
        BuildRes.find({'PlayerName': req.body.PlayerName}, function (err, data1) {
            var lvl = BL +1;
            var foo=data1[0].Stable.food *(lvl * 3);
            var woo=data1[0].Stable.wood *(lvl * 3);
            var iro=data1[0].Stable.iron *(lvl * 3);
            var gol=data1[0].Stable.gold *(lvl * 3);
            if (food >= foo & wood >= woo & iron >= iro & gold >= gol){
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - foo,
                wood: wood - woo,
                iron: iron - iro,
                gold: gold - gol
            }, options = {multi: true};
            resource.update(conditions, update, options, function (err, data) {
                if (err) {console.error(err);}
                else {console.log(data);}
            });
            var updation = setTimeout(function () {

                var query = {
                    Stable : BL +1
                };
                var conditions = {PlayerName: req.body.PlayerName}
                    ,
                    options = {multi: true};
                BuildLevel.update(conditions, query, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);
                    }});
                res.send('Building has been successfully updated');
            },4000);
            }
            else{
                res.send("Not Enough Resources Available to Upgrade the Building");            }
        });
    });

});
router.post('/UpgradeWS',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food, wood, iron, gold);
        var BL;
        BuildLevel.find({'PlayerName': req.body.PlayerName},function (err,data) {
            BL=data[0].Workshop;

        });
        BuildRes.find({'PlayerName': req.body.PlayerName}, function (err, data1) {
            var lvl = BL +1;
            var foo=data1[0].Workshop.food *(lvl * 3);
            var woo=data1[0].Workshop.wood *(lvl * 3);
            var iro=data1[0].Workshop.iron *(lvl * 3);
            var gol=data1[0].Workshop.gold *(lvl * 3);
            if (food >= foo & wood >= woo & iron >= iro & gold >= gol){
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - foo,
                wood: wood - woo,
                iron: iron - iro,
                gold: gold - gol
            }, options = {multi: true};
            resource.update(conditions, update, options, function (err, data) {
                if (err) {console.error(err);}
                else {console.log(data);}
            });
            var updation = setTimeout(function () {

                var query = {
                    Workshop : BL +1
                };
                var conditions = {PlayerName: req.body.PlayerName}
                    ,
                    options = {multi: true};
                BuildLevel.update(conditions, query, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);
                    }});
                res.send('Building has been successfully updated');
            },4000);
            }
            else{
                res.send("Not Enough Resources Available to Upgrade the Building");            }
        });
    });

});
router.post('/UpgradeBS',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food, wood, iron, gold);
        var BL;
        BuildLevel.find({'PlayerName': req.body.PlayerName},function (err,data) {
            BL=data[0].BlackSmith;

        });
        BuildRes.find({'PlayerName': req.body.PlayerName}, function (err, data1) {
            var lvl = BL +1;
            var foo=data1[0].BlackSmith.food *(lvl * 3);
            var woo=data1[0].BlackSmith.wood *(lvl * 3);
            var iro=data1[0].BlackSmith.iron *(lvl * 3);
            var gol=data1[0].BlackSmith.gold *(lvl * 3);
            if (food >= foo & wood >= woo & iron >= iro & gold >= gol){
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - foo,
                wood: wood - woo,
                iron: iron - iro,
                gold: gold - gol
            }, options = {multi: true};
            resource.update(conditions, update, options, function (err, data) {
                if (err) {console.error(err);}
                else {console.log(data);}
            });
            var updation = setTimeout(function () {

                var query = {
                    BlackSmith : BL + 1
                };
                var conditions = {PlayerName: req.body.PlayerName}
                    ,
                    options = {multi: true};
                BuildLevel.update(conditions, query, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);
                    }});
                res.send('Building has been successfully updated');
            },4000);
            }
            else{
                res.send("Not Enough Resources Available to Upgrade the Building");            }
        });
    });

});
router.post('/UpgradeWT',function (req,res) {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food, wood, iron, gold);
        var BL;
        BuildLevel.find({'PlayerName': req.body.PlayerName},function (err,data) {
            BL=data[0].WatchTower ;

        });
        BuildRes.find({'PlayerName': req.body.PlayerName}, function (err, data1) {
            var lvl = BL +1;
            var foo=data1[0].WatchTower.food *(lvl * 3);
            var woo=data1[0].WatchTower.wood *(lvl * 3);
            var iro=data1[0].WatchTower.iron *(lvl * 3);
            var gol=data1[0].WatchTower.gold *(lvl * 3);
            if (food >= foo & wood >= woo & iron >= iro & gold >= gol){
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - foo,
                wood: wood - woo,
                iron: iron - iro,
                gold: gold - gol
            }, options = {multi: true};
            resource.update(conditions, update, options, function (err, data) {
                if (err) {console.error(err);}
                else {console.log(data);}
            });
            var updation = setTimeout(function () {

                var query = {
                    WatchTower : BL+1
                };
                var conditions = {PlayerName: req.body.PlayerName}
                    ,
                    options = {multi: true};
                BuildLevel.update(conditions, query, options, function (err, data) {
                    if (err) {console.error(err);}
                    else {console.log(data);
                    }});
                res.send('Building has been successfully updated');
            },4000);
            }
            else{
                res.send("Not Enough Resources Available to Upgrade the Building");            }
        });
    });

});
module.exports =router;