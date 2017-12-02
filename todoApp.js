var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://todo:list@ds044667.mlab.com:44667/todoapp";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
