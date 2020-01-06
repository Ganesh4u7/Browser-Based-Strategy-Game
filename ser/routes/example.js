
 mongoose.connect("mongodb://localhost:27017/game");
 var db = mongoose.connection;
 db.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(callback) {
         console.log("Connection succeeded.");
 });

 var res2 = new res1({
     food : 2345,
     wood : 1789,
     iron : 987,
     gold : 1986
 });

 res2.save(function(error) {
     console.log("Your bee has been saved!");
     if (error) {
         console.error(error);
     }
 });