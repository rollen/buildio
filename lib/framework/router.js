Router = function(routes){
  this.routes = routes;
}

Router.prototype.route = function(path){
  var route = this.findRouteFor(path);
  route.runAction();
}

Router.prototype.findRouteFor = function(path){
  var result = false;
  this.routes.forEach(function(route){
    if(!result && route.hasAMatchFor(path)) {
      result = route;
    }
  })
  return result;
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

