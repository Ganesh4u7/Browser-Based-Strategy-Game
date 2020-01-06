var mongoose =require('mongoose');
var schema = mongoose.Schema;

var ToolsLevelSchema = new schema({
    PlayerName: {
        type:String,
        unique:true,
        required:true
    },
    Infantry:Number,
    Cavalry:Number,
    SeigeWeapons:Number
});

module.exports = ToolsLevelSchema;