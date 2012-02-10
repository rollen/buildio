AppBuilder.createRouter = function(request, response, filesystem){
  var routes = 
  [
    HttpRouteFactory.createGet('/angular/:filename', AngularControllerFactory, 'show'),
    HttpRouteFactory.createGet('/tests/:filename', AppTestsControllerFactory, 'show'),
    HttpRouteFactory.createGet('/', AppRootControllerFactory, 'show')
  ];
  return new Router(routes, request, response, filesystem);
}
