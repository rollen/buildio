AssetsController = function(request, response, filesystem, folderpath, filename){
  this.request = request;
  this.response = response;
  this.filesystem = filesystem;
  this.folderpath = folderpath;
  this.filename = filename;
}

AssetsController.prototype.show = function(){
  new HttpFileWriter(this.response, this.filesystem, this.folderpath, this.filename).writeToResponse();
}

HttpFileWriter = function(response, filesystem, folderpath, filename){
  this.response = response;
  this.filesystem = filesystem;
  this.folderpath = folderpath;
  this.filename = filename;
}

HttpFileWriter.prototype.writeToResponse= function(){
  (function(res, filesystem, path){
    filesystem.readFile(path, "utf8", function onFileRead(error, data){
      if(error) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write(error + "\n");
      } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
      } 
      res.end();
    })
  })(this.response, this.filesystem, this.folderpath + '/' + this.filename);
}
