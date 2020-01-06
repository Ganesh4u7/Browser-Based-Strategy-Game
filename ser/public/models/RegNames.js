var mongoose =require('mongoose');
var schema = mongoose.Schema;

var names = new schema({
    PlayerName:{
        type:String,
        unique:true,
        require:true
    }
});
module.exports = names;