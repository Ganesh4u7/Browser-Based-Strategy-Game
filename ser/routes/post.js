// const express = require('express');
// const bodyParser =require('body-parser');


// const app =express();

// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/game");
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"))
// ;db.once("open", function(callback) {
//     console.log("Connection succeeded.");
// });

// app.use(bodyParser.json());

// //initialize route

// app.use('/AvailableVillagers',require('./VillagerUpdation'));
// app.use('/VA',require('./villagerAssign'));
// app.use('/VR',require('./VillagerRevoke'));
// app.use('/MP',require('./MarketPlace'));
// app.use('/VC',require('./Villager Creation'));
// app.use('/BT',require('./BarracksTroops'));
// app.use('/R',require('./ResourceUpdation'));
// app.use('/BU',require('./BuildingUpdation'));
// app.use('/TU',require('./BlackSmith'));
// app.use('/R',require('./resource'));
// app.use('/R',require('./SendData'));

// //listen to requests

// app.listen(process.env.port || 4000,function () {
//     console.log('connnection was made');
// });
