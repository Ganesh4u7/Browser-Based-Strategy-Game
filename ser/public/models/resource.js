var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var resourceSchema =  new Schema({
        PlayerName: {
            type:String,
            unique:true,
            required:true
        },
        food:Number,
        wood:Number,
        iron:Number,
        gold:Number
    });

module.exports = resourceSchema;