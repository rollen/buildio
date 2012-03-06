AppBuilder = {}
AppBuilder.createApplication = function(request, response, filesystem){
  var appRouter = AppBuilder.createRouter(request, response, filesystem);
  var frameworkRouter = Nervebuilder.createRouter(request, response, filesystem);
  var errorsController = new ErrorsController(request, response);
  return new Application([appRouter, frameworkRouter], errorsController, request.url);
}
