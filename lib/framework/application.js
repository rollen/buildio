Application = function(routers, errorsController, urlPath){
  this.routers = routers || [];
  this.errorsController = errorsController;
  this.urlPath= urlPath;
}

Application.prototype.executeRequest = function(){
  var router = this.findRouter()
  if(router){
    router.route(this.urlPath);
  } else {
    errorsController.index();
  }
}

Application.prototype.findRouter = function(){
  self = this;
  var result = false;

  this.routers.forEach(function(router){
    if( !result && router.hasRouteFor(self.urlPath) ){
      result = router; 
    }
  });
  return result;
}


