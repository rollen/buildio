require('./../spec_helper');

describe ("Given I'm any user", function(){
  describe("When I visit the tests page", function(){
    beforeEach(function(){
      this.filesystem = new SyncFS(require('fs'));
      this.fixtures = new Fixtures(this.filesystem, fixturesFolderPath );
      this.response = new Response();
      this.request = new Request("/tests");

      this.testsController = new TestsController(this.request, this.response, this.filesystem, frameworkViewsPath + '/runner.html');
      this.frameworkRouter = Nervecenter.createRouter({"testsController":this.testsController})

      this.errorsController = new ErrorsController(this.request, this.response);
      this.application = new Application([this.frameworkRouter], this.errorsController, this.request.url);
    });

    describe("Then I should see the angular tests running", function(){
      it("should run the angular tests", function(){

        this.application.executeRequest();

        expect(this.response._body).toBe(this.fixtures.htmlfile("runner.html"));
      });
    });
  });
});
