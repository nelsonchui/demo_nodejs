var http = require('http');
var dt = require('./myfirstmodule');
var i = 0;

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write("</br>");
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
  i++;
  console.log(i+ ': Message responded!');
}).listen(8080); //the server object listens on port 8080

