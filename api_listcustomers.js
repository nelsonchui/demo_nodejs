var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listCustomers', function (req, res) {
   fs.readFile( __dirname + "/" + "customers.json", 'utf8', function (err, data) {
      console.log(__dirname);
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})