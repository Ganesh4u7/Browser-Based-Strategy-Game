var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var villagerSchema = require('../public/models/villagers');
var Villager = mongoose.model('avails',villagerSchema);

router.post('/',function (req,res) {

    Villager.find({'PlayerName':'RogerFederer'},{_id:0}, function(err, data){
        var prevdat = data[0].AvailableVillagers;
        var dat = req.body.AvailableVillagers + prevdat ;
        var conditions = { PlayerName: 'RogerFederer' }
            , update = { AvailableVillagers: dat }
            , options = { multi: true };
        Villager.update(conditions, update, options, function (err1,data1) {
            if(err1)
            {
                console.error(err1);
            }
            else{
                console.log(data1);
            }

        });

        console.log("AvailableVillager :"+dat);
      res.send({type:"POST",
      name:dat});

    });
});
module.exports =router;