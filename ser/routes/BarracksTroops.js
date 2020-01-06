var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var BarracksTroops = require('../public/models/Barracks');
var BTroops = mongoose.model('BTroops',BarracksTroops);
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);

router.post('/BarracksTroop1',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        BTroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            var f1=data1[0].t1.food,w1=data1[0].t1.wood,i1=data1[0].t1.iron,g1=data1[0].t1.gold;
            var tr=req.body.totTroops;
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        var tf=f1*tr,tw=w1*tr,ti=i1*tr,tg=g1*tr;
        if(food>=tf & wood>= tw & iron>= ti & gold >= tg) {
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food - tf,
                wood: wood - tw,
                iron: iron - ti,
                gold: gold - tg
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

    var troopCount=0;
    var totalTroops = req.body.totTroops;
    var troopsCreation = setInterval(function () {
        troopCount+=1;
        BTroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].t1count + 1;
            var conditions = { PlayerName:  req.body.PlayerName  }
                , update = { t1count: dat }
                , options = { multi: true };
            BTroops.update(conditions, update, options, function (err1,data1) {
                if(err1)
                {
                    console.error(err1);
                }
                else{
                    console.log(data1);
                }

            });
            console.log("Available Troop1 Troops :"+dat);

            if(troopCount == totalTroops)
            {
                res.send("Troops are Created");
                clearInterval(troopsCreation);
            }

        });



    },50)

        }
        else{
            res.send("Not Enough Resources,Try Creating Less Troops");
        }
        });
    });
});
router.post('/BarracksTroop2',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
            BTroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
                var tr=req.body.totTroops;
                var f1=data1[0].t2.food,w1=data1[0].t2.wood,i1=data1[0].t2.iron,g1=data1[0].t2.gold;
                var tr=req.body.totTroops;
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
                var tf=f1*tr,tw=w1*tr,ti=i1*tr,tg=g1*tr;
                if(food>=tf & wood>= tw & iron>= ti & gold >= tg) {
        var conditions = {PlayerName: req.body.PlayerName}
            , update = {
            food: food - tf,
            wood: wood - tw,
            iron: iron - ti,
            gold: gold - tg
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
    var troopCount=0;
    var totalTroops = req.body.totTroops;
    var troopsCreation = setInterval(function () {
        troopCount+=1;
        BTroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].t2count + 1;
            var conditions = { PlayerName: req.body.PlayerName  }
                , update = { t2count:dat }
                , options = { multi: true };
            BTroops.update(conditions, update, options, function (err1,data1) {
                if(err1)
                {
                    console.error(err1);
                }
                else{
                    console.log(data1);
                }

            });
            console.log("Available Troop2 Troops :"+dat);

            if(troopCount == totalTroops)
            {
                res.send("Troops are Created");
                clearInterval(troopsCreation);
            }

        });



    },50)
        }
    else{
            res.send("Not Enough Resources,Try Creating Less Troops");
        }
    });
   });
});
router.post('/BarracksTroop3',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
             BTroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
                 var tr=req.body.totTroops;
                var f1=data1[0].t3.food,w1=data1[0].t3.wood,i1=data1[0].t3.iron,g1=data1[0].t3.gold;
                var tr=req.body.totTroops;

        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        var tf=f1*tr,tw=w1*tr,ti=i1*tr,tg=g1*tr;
        if(food>=tf & wood>= tw & iron>= ti & gold >= tg) {
        var conditions = {PlayerName: req.body.PlayerName}
            , update = {
            food: food - tf,
            wood: wood - tw,
            iron: iron - ti,
            gold: gold - tg
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
    var troopCount=0;
    var totalTroops = req.body.totTroops;
    var troopsCreation = setInterval(function () {
        troopCount+=1;
        BTroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].t3count + 1;
            var conditions = { PlayerName:  req.body.PlayerName  }
                , update = { t3count: dat }
                , options = { multi: true };
            BTroops.update(conditions, update, options, function (err1,data1) {
                if(err1)
                {
                    console.error(err1);
                }
                else{
                    console.log(data1);
                }

            });
            console.log("Available Troop 3 Troops :"+dat);

            if(troopCount == totalTroops)
            {
                res.send("Troops are Created");
                clearInterval(troopsCreation);
            }

        });



    },50)

     }
     else{
         res.send("Not Enough Resources,Try Creating Less Troops");
         }
      });
    });
});
module.exports= router;