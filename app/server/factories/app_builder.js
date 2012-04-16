AppBuilder = {}

AppBuilder.createApplication = function(request, response, filesystem){
  var appRouter = AppBuilder.createRouter(request, response, filesystem);
  var frameworkRouter = Nervebuilder.createRouter(request, response, filesystem);
  var errorsController = ErrorsController(request, response);
  console.log('Method: ' + request.method);
  return Application([appRouter, frameworkRouter], errorsController, request.url, request.method);
}
