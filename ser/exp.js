
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    var dbo = db.db("game");

    dbo.collection("resources").find({},{"_id":0}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});


var res={

    food:100,
    wood:100,
    iron:100,
    gold:10
};
var res1={
    r1:10,
    r2:5,
    r3:15,
    r4:3
}
function resupdate() {
    res.food+=res1.r1;
    res.wood+=res1.r2;
    res.iron+=res1.r3;
    res.gold+=res1.r4;
    console.log(res);

}
function villupdate() {
     res1.r1+=10;
     res1.r2+=13;
     res1.r3+=20;
     res1.r4+=4
}
//setInterval(resupdate,2000);
//setInterval(villupdate,1000);