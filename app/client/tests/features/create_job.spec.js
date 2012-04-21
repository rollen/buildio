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
      input('company_name').enter('Some Random Company');
      input('job_description').enter('Build some really awesome software');
      input('requirement').enter('rails,ruby,java,sql,javascript');
      input('company_description').enter('We are a fun loving bunch');
      input('company_website').enter('http://www.somerandomcompany.com');

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
