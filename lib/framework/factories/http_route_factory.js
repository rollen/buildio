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

