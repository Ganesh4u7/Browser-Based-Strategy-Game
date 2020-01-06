const express = require('express');
const bodyParser =require('body-parser');
var router = express.Router();
const jwt = require('jsonwebtoken');
const app =express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/game");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection succeeded.");
});



app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/user',require('./routes/users'));

app.use('/AvailableVillagers',require('./routes/VillagerUpdation'));
app.use('/VA',require('./routes/villagerAssign'));
app.use('/VR',require('./routes/VillagerRevoke'));
app.use('/MP',require('./routes/MarketPlace'));
app.use('/VC',require('./routes/Villager Creation'));
app.use('/BT',require('./routes/BarracksTroops'));
app.use('/ST',require('./routes/StableTroops'));
app.use('/WT',require('./routes/SeigeTroops'));
app.use('/R',require('./routes/ResourceUpdation'));
app.use('/BU',require('./routes/BuildingUpdation'));
app.use('/TU',require('./routes/BlackSmith'));
app.use('/R',require('./routes/resource'));
app.use('/R',require('./routes/SendData'));
app.use('/R',require('./routes/ToopsManagement'));
app.use('/DB',require('./routes/RegisterDBSetup'));
app.use('/R',require('./routes/Statistics'));

//listen to requests

app.listen(3000,function () {
    console.log('connnection was made');
});
module.exports = app;