Nervebuilder.createApplication = function(request, response, filesystem){
  this.controllers = Nervebuilder.createControllers(request, 
                                                    response, 
                                                    filesystem, 
                                                    frameworkViewsPath);
  this.frameworkRouter = Nervebuilder.createRouter(this.controllers)
  this.errorsController = new ErrorsController(request, response);
  return new Application([this.frameworkRouter], this.errorsController, request.url);
}
