var http = require('http');
require('./app.js');

http.createServer(function onRequestReceived(request, response){
  Nervebuilder.createApplication(request, response, require('fs')).executeRequest();
}).listen(8888);
