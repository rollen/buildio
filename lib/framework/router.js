Router = function(routes){
  this.routes = routes;
}

Router.prototype.route = function(path){
  this.findRouteFor(path, this.onFound, this.onNotFound);
}

Router.prototype.findRouteFor = function(path, onFound, onNotFound){
  for(var index = 0; index < this.routes.length; index++){
    route = this.routes[index];
    if(route.hasAMatchFor(path)) {
      return onFound(route);
    }
  }
  onNotFound(path);
}

Router.prototype.hasRouteFor = function(path){
  var result = false;
  this.routes.forEach(function(route){
    if(!result && route.hasAMatchFor(path)){
      result = true;
    }
  });
  return result;
}

Router.prototype.onFound = function(route){
  route.runAction();
}

Router.prototype.onNotFound= function(path){
  throw "No valid route to " + path
}
