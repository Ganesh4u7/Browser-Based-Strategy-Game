var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BuildLevelSchema =  new Schema({
    PlayerName: {
        type:String,
        unique:true,
        required:true
    },
    TownCenter:Number,
    Barracks:Number,
    Stable:Number,
    Workshop:Number,
    BlackSmith:Number,
    MarketPlace:Number,
    WatchTower:Number

});
module.exports = BuildLevelSchema;