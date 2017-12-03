const express = require('express')
const app = express()
app.use(express.static("public"))
console.log("run")
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://todo:list@ds044667.mlab.com:44667/todoapp"
var db

MongoClient.connect(url, function(err, database) {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.post('/todo', (req, res) => {

  db.collection('monday').find().toArray(function(err, results) {
    console.log(results)
    db.collection('monday').updateOne(results[0], req.body, function(err, result) {
      if (err) return console.log(err)

      console.log('updated database')
      res.redirect('/')
    })
  })

})
