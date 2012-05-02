Given('I have some job postings', function(){
  beforeEach(function(){
    bs.register('view_jobs', function(app){
      app.run(function($httpBackend){
        $httpBackend.whenGET(/partials/).passThrough();
      });
    });
  });

  When('I go to the jobs page', function(){
    beforeEach(function(){
      browser().navigateTo('/index');
    });

    Then('I should see all the jobs on the page', function(){
    });
  });
});

