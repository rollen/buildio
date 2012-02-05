AssetsController = function(request, response, filesystem, folderpath){
  this.request = request;
  this.response = response;
  this.filesystem = filesystem;
  this.folderpath = folderpath;
}

AssetsController.prototype.show = function(filename){
  (function(res, filesystem, path){
    filesystem.readFile(path, "utf8", function(error, data){
      if(error) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write(error + "\n");
      } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
      } 
      res.end();
    })
  })(this.response, this.filesystem, this.folderpath + '/' + filename);
}
