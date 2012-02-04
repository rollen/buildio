Nervebuilder.createRouter = function(controllers) {
  return new Router(
    [HttpRouteFactory.createGet('/tests', controllers['testsController'], 'index')]
  );
}
