require("./../spec_helper");

describe('Application', function(){
  beforeEach(function(){
    this.filesystem = new SyncFS(require('fs'));
    this.response = new Response();
    this.request = new Request("/tests");
    this.testsController = new TestsController(this.request, this.response, this.filesystem, this.frameworkViewsPath);

    this.httpVerb = 'GET';
    this.pattern = '/tests';
    this.controller = new Controller();
    this.message = "index";
    this.route = new HttpRoute(this.httpVerb, this.pattern, this.controller, this.message);
    this.frameworkRouter = new Router([route]);

    this.errorsController = new ErrorsController(this.request, this.response);
  });

  describe('findRouter', function(){
    it('should return the router that can route to a given query', function(){
      this.application = new Application([frameworkRouter], null, request.url);
      expect(this.application.findRouter()).toBeTruthy();
    });
  });

  describe('executeRequest', function(){
    it('should route the request to the framework if it cannot be handled by the application Router', function(){
      spyOn(this.frameworkRouter, 'route');
      this.application = new Application([this.frameworkRouter], null, this.request.url);
      this.application.executeRequest();
      expect(this.frameworkRouter.route).toHaveBeenCalled();
    });

    it('should execute the errorsController if no possible route is found', function(){
      spyOn(errorsController, 'index');
      this.application = new Application(null, this.errorsController, this.request.url);
      this.application.executeRequest();
      expect(errorsController.index).toHaveBeenCalled();
    });
  });
});
