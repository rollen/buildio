AppBuilder.createRouter = function(request, response, filesystem){
  var routes = 
  [
    HttpRouteFactory.createGet('/tests/:filename', AppTestsControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/index', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/home', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/jobs', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/jobs/', AppRootControllerFactory, 'show')
    ,HttpRouteFactory.createGet('/jobs/new', AppRootControllerFactory, 'show')

    ,HttpRouteFactory.createPost('/api/jobs', JobsControllerFactory, 'create')
    ,HttpRouteFactory.createGet('/api/jobs', JobsControllerFactory, 'index')

    ,HttpRoute(AngularControllerFactory, 'show', RegexRouteMatcher(/^\/lib/))
  ];
  return new Router(routes, request, response, filesystem);
}
