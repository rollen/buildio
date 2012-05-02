// Feature: User creates a scenario
//    In order to create advertisments
//    As a advertiser
//    I want to be able to create a jobs via the site



Given('I have not created any jobs', function(){
  var PREVIEW_BUTTON_SELECTOR = ':button#job_preview';
  var PUBLISH_BUTTON_SELECTOR = ':button#job_publish';
  var MESSAGE_SELECTOR = 'div#message';

  
  beforeEach(function(){
    bs.register('create_job', function(app, angular){
      app.run(function($httpBackend){
        $httpBackend.whenGET(/partials/).passThrough();
        $httpBackend.whenPOST('/jobs', '{"job_title":"Software Engineer"}').respond(function(method, url, data, headers){
          console.log(data);
          return [404, data, headers];
        });
        $httpBackend.whenPOST('/jobs').respond(function(method, url, data, headers){
          return [200, data, headers];
        });
      });
    });
    browser().navigateTo('index');
  });

  When('I do not fill up the form correctly', function(){
    beforeEach(function(){
      input('$parent.job_title').enter('Software Engineer');
      element(PREVIEW_BUTTON_SELECTOR).click();
    });

    Then('I should not be able to submit it', function(){
      element(PUBLISH_BUTTON_SELECTOR).click();

      expect(element(MESSAGE_SELECTOR).text()).toContain('Please Fill up all the required fields');
      expect(element('div#message > .alert-failure').count()).toBe(1);
    });
  });

  When('I fill in the form and attempt to preview it', function(){

    beforeEach(function(){
      input('$parent.job_title').enter('Software Engineer');
      input('$parent.company_name').enter('Some Random Company');
      input('$parent.job_description').enter('Build some really awesome software');
      input('$parent.requirements').enter('Have a great attitue');
      input('$parent.company_description').enter('We are a fun loving bunch');
      input('$parent.company_website').enter('http://www.somerandomcompany.com');
      input('$parent.technologies').enter('ruby, rails, java');

      element(PREVIEW_BUTTON_SELECTOR).click();
    });


    And('I publish the form', function(){
      beforeEach(function(){
        expect(element(PUBLISH_BUTTON_SELECTOR).count()).toBe(1);
        element(PUBLISH_BUTTON_SELECTOR).click();
      });

      Then('I should see that the form has been published', function(){
        var MESSAGE_SELECTOR = 'div#message';
        expect(element(MESSAGE_SELECTOR).text()).toContain('Your form was submitted successfully');
        expect(element('div#message > .alert-success').count()).toBe(1);
      });
    });
  });
});
