var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var resourceSchema = require('../public/models/resource');
var resource =mongoose.model('resources',resourceSchema);
var Reg = require('../public/models/RegNames');
var RegNames= mongoose.model('RegNames',Reg);

router.post('/CutResources',function (req,res) {


            resource.find({'PlayerName': req.body.PlayerName}, {_id: 0}, function (err, data) {

                var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
                if (food >= req.body.food & wood >= req.body.wood & iron >= req.body.iron & gold >= req.body.gold) {
                    var conditions = {PlayerName: req.body.PlayerName}
                        , update = {
                        food: food - req.body.food,
                        wood: wood - req.body.wood,
                        iron: iron - req.body.iron,
                        gold: gold - req.body.gold
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
                    res.send('Merchants have been sent');
                }
                else {
                    res.send("Not Enough Resources to send")
                }
            });



});
router.post('/SendResources',function (req,res) {

    resource.find({'PlayerName':req.body.PlayerName},{_id:0}, function(err, data) {
        var food = data[0].food, wood = data[0].wood, iron = data[0].iron, gold = data[0].gold;
        console.log(food,wood,iron,gold);
        if (food >= req.body.food & wood >= req.body.wood & iron >= req.body.iron & gold >= req.body.gold) {
            var conditions = {PlayerName: req.body.PlayerName}
                , update = {
                food: food + req.body.food,
                wood: wood + req.body.wood,
                iron: iron + req.body.iron,
                gold: gold + req.body.gold
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
            res.send('Resources have been deliverd successfully ');

        }
        else {
            res.send();
        }
    });

});


module.exports = router;