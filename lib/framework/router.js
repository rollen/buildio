Router = function(maps, errorsController){
  this.maps = maps;
  this.errorsController = errorsController;
}

Router.prototype.route = function(path){
  if(typeof this.maps[path] === 'function'){
    this.maps[path]();
  } else {
    errorsController.index();
  }
}
