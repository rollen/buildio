require('./../spec_helper');

describe ("Given I'm any user", function(){
  describe("When I visit the tests page", function(){
    beforeEach(function(){
      Browser.visit('/tests');
    });

    describe("Then I should see the angular tests running", function(){
      it("should run the angular tests", function(){
        expect(Browser.response._body).toBe(Fixtures.htmlfile("runner.html"));
      });
    });
  });
});
