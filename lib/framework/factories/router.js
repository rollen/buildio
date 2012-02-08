Nervebuilder.createRouter = function(factories, request, response, filesystem) {
  var routes = [ HttpRouteFactory.createGet('/tests', factories['testsController'], 'index') ];
  return new Router(routes, request, response, filesystem);
}
