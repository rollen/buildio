AppBuilder.createRouter = function(request, response, filesystem){
  var route = HttpRouteFactory.createGet('/tests/:filename', AppTestsControllerFactory, 'show');
  return new Router([route], request, response, filesystem);
}
