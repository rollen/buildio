AppBuilder.createRouter = function(request, response, filesystem){
  var routes = 
  [
    HttpRouteFactory.createGet('/tests/:filename', AppTestsControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/index', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/home', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createPost('/jobs', JobsControllerFactory, 'create')
    ,HttpRoute(PartialControllerFactory, 'show', RegexRouteMatcher(/^\/partials/))
    ,HttpRoute(AngularControllerFactory, 'show', RegexRouteMatcher(/^\/lib/))
  ];
  return new Router(routes, request, response, filesystem);
}
