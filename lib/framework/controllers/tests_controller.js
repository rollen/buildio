TestsController = function(request, response, filesystem, pathToView){
  this.request = request;
  this.response = response;
  this.filesystem = filesystem;
  this.pathToView = pathToView;
}

TestsController.prototype.index = function(){
  self = this;
  this.filesystem.readFile(this.pathToView, "utf8", function(error, data){
    if(error) {
      self.response.writeHead(500, {"Content-Type": "text/plain"});
      self.response.write(error + "\n");
    } else {
      self.response.writeHead(200, {"Content-Type": "text/html"});
      self.response.write(data);
    } 
    self.response.end();
  });
}

