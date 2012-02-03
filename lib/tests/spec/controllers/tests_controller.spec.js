require('./../../spec_helper');

describe("TestsController", function(){
  beforeEach(function(){
    filesystem = new SyncFS(require('fs'));
    request = new Request();
    response = new Response();
    fixtures = new Fixtures(filesystem, fixturesFolderPath);
  });

  describe("index", function(){
    it("should write the angular scenario runner file to the http response", function(){
      testsController = new TestsController(request, response, filesystem, fixtures.htmlfilePath("runner.html"));
      testsController.index();
      expect(response._body).toBe(fixtures.htmlfile("runner.html"));
    });
  });
});
