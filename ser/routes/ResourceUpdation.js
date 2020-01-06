var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var villagerSchema = require('../public/models/villagers');
var Villager = mongoose.model('avails',villagerSchema);
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);


router.post('/RU',function (req,res) {

    var updation = setInterval(function () {
    resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;

        Villager.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {

            var IW = data[0].InWood * 10, IF = data[0].InFood *10, II = data[0].InIron * 10, IG = data[0].InGold *10;
                var conditions = {PlayerName: req.body.PlayerName}
                    , update = {
                    food: food + IF ,
                    wood: wood + IW ,
                    iron: iron + II ,
                    gold: gold + IG
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
                console.log(food + (IF * 10),
                    wood + (IW * 10),
                    iron + (II * 10),
                    gold + (IG * 10));
            });
        });
    },10000);
});
module.exports=router;
