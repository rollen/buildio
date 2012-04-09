// Feature: User creates a scenario
//    In order to create advertisments
//    As a advertiser
//    I want to be able to create a jobs via the site

describe('Given I have not created any jobs', function(){
  beforeEach(function(){
    browser().navigateTo('index');
  });
  describe('When I create a job', function(){
    describe('Then I should see the created job', function(){
      it('does nothing', function(){

      });
    });
  });
});
