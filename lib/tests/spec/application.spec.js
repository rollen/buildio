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

    errorsController = new ErrorsController(request, response);
  });

  describe('findRouter', function(){
    it('should return the router that can route to a given query', function(){
      application = new Application([frameworkRouter], null, request.url);
      expect(application.findRouter()).toBeTruthy();
    });
  });

  describe('executeRequest', function(){
    it('should route the request to the framework if it cannot be handled by the application Router', function(){
      spyOn(frameworkRouter, 'route');
      application = new Application([frameworkRouter], null, request.url);
      application.executeRequest();
      expect(frameworkRouter.route).toHaveBeenCalled();
    });

    it('should execute the errorsController if no possible route is found', function(){
      spyOn(errorsController, 'index');
      application = new Application(null, errorsController, request.url);
      application.executeRequest();
      expect(errorsController.index).toHaveBeenCalled();
    });
  });
});
