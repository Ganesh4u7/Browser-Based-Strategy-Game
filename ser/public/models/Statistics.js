var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Statistics = new schema({
    PlayerName :{
        type:String,
        unique:true,
        require:true
    },
    AttackPoints:Number,
    DefensePoints:Number


});
module.exports = Statistics;