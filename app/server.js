var http = require('http');
require('./server/app.js');

var port = process.env.PORT || 8888;
http.createServer(function onRequestReceived(request, response){
  console.log('attempting to route to ' + request.url);
  AppBuilder.createApplication(request, response, require('fs')).executeRequest();
}).listen(port);
console.log('Listening on port ' + port);
