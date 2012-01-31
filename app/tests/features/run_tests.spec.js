require('./../spec_helper');

describe ("Given I'm any user", function(){
  describe("When I visit the tests page", function(){
    beforeEach(function(){
    });

    describe("Then I should see the angular tests running", function(){
      response = new Response();
      request = new Request("/tests");
      application = new Application(request, response).create();
      expect(response.body).toBe(angularScenarioRunnerText());
    });
  });
});
