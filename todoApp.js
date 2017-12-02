const express = require('express');
const app = express();
app.use(express.static("/Users/Yan Li/Documents/Personal Programming/UBCHacks2017/public"))
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://todo:list@ds044667.mlab.com:44667/todoapp";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.listen(3000, function() {
  console.log('listening on 3000')
})
