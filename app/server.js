var http = require('http');
require('./app.js');

http.createServer(function onRequestReceived(request, response){
  console.log(request.url);
  Nervebuilder.createApplication(request, response, require('fs')).executeRequest();
}).listen(8888);
