var mongoose = require('mongoose');
var schema = mongoose.Schema;

var WorkShopTroops = new schema({
    PlayerName :{
        type:String,
        unique:true,
        require:true
    },
    w1count:Number,
    w1attack:Number,
    w1defense:Number,
    w1attack1:Number,

    w2count:Number,
    w2attack:Number,
    w2defense:Number,

    w2attack1:Number,
    w3count:Number,
    w3attack:Number,
    w3defense:Number,
    w3attack1:Number,

    w1:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    },
    w2:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    },
    w3:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    }


});
module.exports = WorkShopTroops;