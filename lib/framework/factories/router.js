Nervebuilder.createRouter = function(factories, request, response, filesystem) {
  var routes = [ 
    HttpRouteFactory.createGet('/tests', factories['testsController'], 'index'),
    HttpRouteFactory.createGet('/assets/:filename', factories['assetsController'], 'show')
  ];
  return new Router(routes, request, response, filesystem);
}
