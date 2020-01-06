var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var StableTroops = require('../public/models/Stable');
var STroops = mongoose.model('STroops',StableTroops);
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);

router.post('/StableTroop1',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        STroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            var tr=req.body.totTroops;
            var f1=data1[0].s1.food,w1=data1[0].s1.wood,i1=data1[0].s1.iron,g1=data1[0].s1.gold;
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
        STroops.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data){
            var dat = data[0].s1count + 1;
            var conditions = { PlayerName: req.body.PlayerName }
                , update = { s1count: dat }
                , options = { multi: true };
            STroops.update(conditions, update, options, function (err1,data1) {
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
router.post('/StableTroop2',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        STroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            var tr=req.body.totTroops;
            var f1=data1[0].s2.food,w1=data1[0].s2.wood,i1=data1[0].s2.iron,g1=data1[0].s2.gold;
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
        STroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].s2count + 1;
            var conditions = { PlayerName:  req.body.PlayerName  }
                , update = { s2count:dat }
                , options = { multi: true };
            STroops.update(conditions, update, options, function (err1,data1) {
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
router.post('/StableTroop3',function (req,res) {
    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        STroops.find({'PlayerName':req.body.PlayerName},function (err1,data1) {
            var tr=req.body.totTroops;
            var f1=data1[0].s3.food,w1=data1[0].s3.wood,i1=data1[0].s3.iron,g1=data1[0].s3.gold;
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
        STroops.find({'PlayerName': req.body.PlayerName },{_id:0}, function(err, data){
            var dat = data[0].s3count + 1;
            var conditions = { PlayerName:  req.body.PlayerName  }
                , update = { s3count: dat }
                , options = { multi: true };
            STroops.update(conditions, update, options, function (err1,data1) {
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