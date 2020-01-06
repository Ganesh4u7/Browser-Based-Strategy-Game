var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var userSchema =  new Schema({
    name:{ type: String , unique :true},
    password: String,
    email: String
});

module.exports = userSchema;