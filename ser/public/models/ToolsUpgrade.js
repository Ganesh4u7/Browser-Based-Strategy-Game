var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ToolsUpgradeSchema =  new Schema({
    PlayerName:{
        type:String,
        unique:true,
        required:true
    },
    Infantry: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    Cavalry: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    SeigeWeapons: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    }
});

module.exports = ToolsUpgradeSchema;