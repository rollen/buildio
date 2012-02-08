var http = require('http');
require('./app.js');

var port = process.env.PORT || 8888;
http.createServer(function onRequestReceived(request, response){
  AppBuilder.createApplication(request, response, require('fs')).executeRequest();
}).listen(port);
