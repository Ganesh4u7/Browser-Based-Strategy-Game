var mongoose =require('mongoose');
var schema = mongoose.Schema;

var Notification=new schema({
    PlayerName:{
        type:String,
        unique:true,
        required:true
    },
   AttacksIncoming:Number,
    AttacksOutgoing:Number,
    ReinfIncoming:Number,
    ReinfOutgoing:Number,
    IncomingTroops:Number

});

module.exports=Notification;