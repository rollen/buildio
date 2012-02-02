TestsController = function(request, response, filesystem, pathToView){
  this.request = request;
  this.response = response;
  this.filesystem = filesystem;
  this.pathToView = pathToView;
}

TestsController.prototype.index = function(){
  this.filesystem.readFile(this.pathToView, "utf8", function(error, data){
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

