require('./../spec_helper');

describe('Given I have an app', function(){
  var browser,
      response

  beforeEach(function(){
    browser = Browser(AppBuilder);
  });

  describe('When I go to the tests page', function(){
    beforeEach(function(){
      response = browser.visit('/tests/scenarios.js');
    });

    describe('Then I should see the scenarios.js file', function(){
      it('Then I should see the scenarios.js file', function(){
        expect(response._head).toBe(200);
      });
    });
  });
});
