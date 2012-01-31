Router = function(maps){
  this.maps = maps;
}

Router.prototype.route = function(path){
  this.maps[path]();
}
