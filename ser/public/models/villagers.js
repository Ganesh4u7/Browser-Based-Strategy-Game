var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var villagerSchema = new Schema({
    PlayerName:{
        type:String,
        unique:true,
        required:true
    },
    v1:{
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    },
    TotalVillgers:Number,
    AvailableVillagers:Number,
    InFood:Number,
    InWood:Number,
    InIron:Number,
    InGold:Number

});

module.exports = villagerSchema;