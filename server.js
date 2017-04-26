var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listRestaurants', function (req, res) {
   fs.readFile( __dirname + "/" + "Restaurants.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/listRestaurants/:id', function (req, res) {
   
   fs.readFile( __dirname + "/" + "Restaurants.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["Restaurant" + req.params.id]
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
