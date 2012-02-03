var http = require('http');
require('./app.js');

http.createServer(function onRequestReceived(request, response){
}).listen(8888);

http.createServer(function onRequestReceived(request, response){
  console.log('Routing ' + request.url);
  filesystem = require('fs');
  testsController = new TestsController(request, response, filesystem, frameworkViewsPath + '/runner.html');
  httpVerb = 'GET';
  pattern = '/tests';
  message = 'index';
  route = new HttpRoute(httpVerb, pattern, testsController, message);
  errorsController = new ErrorsController(request, response);
  frameworkRouter = new Router([route]);
  applicationRouter = new Router([]);
  application = new Application([applicationRouter, frameworkRouter], errorsController, request.url);
  application.executeRequest();
}).listen(8888);
