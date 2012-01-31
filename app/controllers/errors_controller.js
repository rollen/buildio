ErrorsController = function(request, response){
  this.request = request;
  this.response = response;
}

ErrorsController.prototype.index = function(){
  response.writeHead(404, {"Content-Type":"text/html"});
  response.end();
}

