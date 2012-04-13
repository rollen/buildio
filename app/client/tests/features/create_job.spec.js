// Feature: User creates a scenario
//    In order to create advertisments
//    As a advertiser
//    I want to be able to create a jobs via the site

describe('Given I have not created any jobs', function(){
  beforeEach(function(){
    browser().navigateTo('index');
  });

  describe('Jobs List', function(){
    it('should be empty', function(){
      expect(repeater('ul > #job').count()).toEqual(0); 
    });
  });

  describe('When I create a job', function(){
    beforeEach(function(){
      input('job_title').enter('Software Engineer');
      input('job_description').enter('I want the dude to build lots of software');
      element(':button').click();
    });

    describe('Then I should see the created job', function(){
      describe('Jobs List', function(){
        it('should have the job listed', function(){
          expect(repeater('ul > #job').count()).toEqual(1); 
        });
      });
    });
  });
});
