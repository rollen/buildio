Nervebuilder.createApplication = function(request, response, filesystem){
  var factories = Nervebuilder.createControllerFactories();
  var frameworkRouter = Nervebuilder.createRouter(factories, request, response, filesystem);
  var errorsController = new ErrorsController(request, response);
  return new Application([frameworkRouter], errorsController, request.url);
}
