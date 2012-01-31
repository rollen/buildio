require('./../../spec_helper');

describe("TestsController", function(){
  describe("index", function(){
    it("writes the angular scenario runner file to the http response", function(){
      test_controller = new TestsController(request, response, sample_html_path );
      test_controller.index();
    });
  });
});
