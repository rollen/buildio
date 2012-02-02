Application = function(applicationRouter, frameworkRouter, urlPath){
  this.applicationRouter = applicationRouter;
  this.frameworkRouter = frameworkRouter;
  this.urlPath= urlPath;
}

Application.prototype.executeRequest = function(){
  if( this.applicationRouter != null && this.applicationRouter.hasRouteFor(this.urlPath) ){
    this.applicationRouter.route(this.urlPath);   
  } else {
    this.frameworkRouter.route(this.urlPath);
  }
}

