HttpRouteFactory = {};

HttpRouteFactory.createGet = function(pattern, controller, action) {
  return new HttpRoute('GET', pattern, controller, action);
}

HttpRouteFactory.createPost = function(pattern, controller, action) {
  return new HttpRoute('POST', pattern, controller, action);
}

HttpRouteFactory.createDelete = function(pattern, controller, action) {
  return new HttpRoute('DELETE', pattern, controller, action);
}

HttpRouteFactory.createPut = function(pattern, controller, action) {
  return new HttpRoute('PUT', pattern, controller, action);
}

HttpRouteFactory.build = function(options){
    options = options === null ? {} : options;
    var factory = options['factory'] || ControllerFactory;
    var httpVerb = options['httpVerb'] || 'GET';
    var pathPattern = options['pattern'] = '/home';
    var message = options['message'] = 'index';
    return new HttpRoute(httpVerb, pathPattern, factory, message);
}
