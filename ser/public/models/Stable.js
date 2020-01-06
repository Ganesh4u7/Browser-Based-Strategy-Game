var mongoose = require('mongoose');
var schema = mongoose.Schema;

var StableTroops = new schema({
    PlayerName :{
        type:String,
        unique:true,
        require:true
    },
    s1count:Number,
    s1attack:Number,
    s1defense:Number,
    s1attack1:Number,

    s2count:Number,
    s2attack:Number,
    s2defense:Number,
    s2attack1:Number,

    s3count:Number,
    s3attack:Number,
    s3defense:Number,
    s3attack1:Number,

    s1:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    },
    s2:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    },
    s3:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    }


});
module.exports = StableTroops;