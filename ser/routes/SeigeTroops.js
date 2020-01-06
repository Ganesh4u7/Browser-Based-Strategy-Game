var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var WorkShopTroops = require('../public/models/WorkShop');
var WTroops = mongoose.model('WTroops',WorkShopTroops);
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);

router.post('/WorkshopTroop1',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        WTroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            var tr=req.body.totTroops;
        var f1=data1[0].w1.food,w1=data1[0].w1.wood,i1=data1[0].w1.iron,g1=data1[0].w1.gold;
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
        WTroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].w1count + 1;
            var conditions = { PlayerName:  req.body.PlayerName  }
                , update = { w1count: dat }
                , options = { multi: true };
          WTroops.update(conditions, update, options, function (err1,data1) {
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
router.post('/WorkshopTroop2',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        WTroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            var tr=req.body.totTroops;
        var f1=data1[0].w2.food,w1=data1[0].w2.wood,i1=data1[0].w2.iron,g1=data1[0].w2.gold;
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
        WTroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].w2count + 1;
            var conditions = { PlayerName:  req.body.PlayerName  }
                , update = { w2count:dat }
                , options = { multi: true };
            WTroops.update(conditions, update, options, function (err1,data1) {
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
router.post('/WorkshopTroop3',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        WTroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            var tr=req.body.totTroops;
        var f1=data1[0].w3.food,w1=data1[0].w3.wood,i1=data1[0].w3.iron,g1=data1[0].w3.gold;
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
        WTroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].w3count + 1;
            var conditions = { PlayerName: req.body.PlayerName  }
                , update = { w3count: dat }
                , options = { multi: true };
            WTroops.update(conditions, update, options, function (err1,data1) {
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
                res.send("Troops have been created successfully");
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