require('./../spec_helper');

describe ("Given I'm any user", function(){
  describe("When I visit the tests page", function(){
    beforeEach(function(){
    });

    describe("Then I should see the angular tests running", function(){
      it("should run the angular tests", function(){
        filesystem = new SyncFS(require('fs'));
        fixtures = new Fixtures(filesystem, fixturesFolderPath );
        response = new Response();
        request = new Request("/tests");

        testsController = new TestsController(request, response, filesystem, frameworkViewsPath + '/runner.html');
        httpVerb = 'GET';
        pattern = '/tests';
        message = "index";
        route = new HttpRoute(httpVerb, pattern, testsController, message);

        frameworkRouter = new Router([route]);
        applicationRouter = new Router([]);
        errorsController = new ErrorsController(request, response);
        application = new Application([frameworkRouter, applicationRouter], errorsController, request.url);

        application.executeRequest();

        expect(response._body).toBe(fixtures.htmlfile("runner.html"));
      });
    });
  });
});
