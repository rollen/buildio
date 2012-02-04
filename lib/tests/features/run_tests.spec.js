require('./../spec_helper');

describe ("Given I'm any user", function(){
  beforeEach(function(){
    this.browser = new Browser();
  });

  describe("When I visit the tests page", function(){
    beforeEach(function(){
      this.browser.visit('/tests');
    });

    describe("Then I should see the angular tests running", function(){
      it("should run the angular tests", function(){
        expect(this.browser.response._body).toBe(Fixtures.htmlfile("runner.html"));
      });
    });
  });

  describe("When I visit a page that does not exist", function(){
    beforeEach(function(){
      this.response = this.browser.visit('/awesomepage');
    });

    describe("Then I should see the nervecenter 404 page", function(){
      it('should see the nervecenter 404 page', function(){
        expect(this.browser.response._head).toBe(404);
      });
    });
  });
});
