var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BuildingSchema =  new Schema({
    PlayerName: {
        type:String,
        unique:true,
        required:true
    },

    TownCenter: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    MarketPlace: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    Barracks: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    Stable: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    Workshop: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    BlackSmith: {
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    },
    WatchTower:{
        food: Number,
        wood: Number,
        iron: Number,
        gold: Number
    }
});

module.exports = BuildingSchema;