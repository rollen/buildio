require("./../spec_helper");

describe('Application', function(){
  beforeEach(function(){
    filesystem = new SyncFS(require('fs'));
    response = new Response();
    request = new Request("/tests");
    testsController = new TestsController(request, response, filesystem, frameworkViewsPath);

    httpVerb = 'GET';
    pattern = '/tests';
    controller = new Controller();
    message = "index";
    route = new HttpRoute(httpVerb, pattern, controller, message);
    frameworkRouter = new Router([route]);
  });

  describe('executeRequest', function(){
    it('should route the request to the framework if it cannot be handled by the application Router', function(){
      spyOn(frameworkRouter, 'route');
      application = new Application(null, frameworkRouter, request.url);
      application.executeRequest();
      expect(frameworkRouter.route).toHaveBeenCalled();
    });
  });
});
