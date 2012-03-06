require('./../spec_helper');

describe('Given I have an app', function(){
  beforeEach(function(){
    this.browser = new Browser(AppBuilder);
  });

  describe('When I go to the tests page', function(){
    beforeEach(function(){
      this.browser.visit('/tests/scenarios.js');
    });

    describe('Then I should see the scenarios.js file', function(){
      it('Then I should see the scenarios.js file', function(){
        expect(this.browser.response._head).toBe(200);
      });
    });
  });
});
