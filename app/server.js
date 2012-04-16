var http = require('http');
require('./server/app.js');

var port = process.env.PORT || 8888;
http.createServer(function onRequestReceived(request, response){
  var applicaiton = AppBuilder.createApplication(request, response, require('fs'))
  Server(request, response, application);
}).listen(port);
console.log('Listening on port ' + port);
