var mongoose =require('mongoose');
var schema = mongoose.Schema;

var reinf = new schema({
    SenderPlayerName: {
        type:String,
        unique:true,
        required:true
    },
     ReceiverPlayerName: {
         type:String,
         unique:true,
         required:true
     },
        t1:Number,
        t2:Number,
        t3:Number,
        t4:Number,
        t5:Number,
        t6:Number,
        t7:Number,
        t8:Number,
        t9:Number


});

module.exports = reinf;