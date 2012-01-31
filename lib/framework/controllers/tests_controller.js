TestsController = function(request, response){
  this.request = request;
  this.response = response;
}

TestsController.prototype.index = function(){
  fs.readFile('/tmp/test.html', function(error, data){
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
    } 
    response.end();
  });
}
