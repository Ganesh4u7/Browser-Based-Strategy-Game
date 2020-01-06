var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BarracksTroops = new schema({
    PlayerName :{
        type:String,
        unique:true,
        require:true
    },
        t1count:Number,
        t1attack:Number,
        t1defense:Number,
        t1attack1:Number,
        t2count:Number,
        t2attack:Number,
        t2defense:Number,
        t2attack1:Number,
        t3count:Number,
        t3attack:Number,
        t3defense:Number,
        t3attack1:Number,

    t1:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    },
    t2:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    },
    t3:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    }


});
module.exports = BarracksTroops;